# -*- coding: utf-8 -*-
import pprint
import json
from collections import OrderedDict
from django.utils.encoding import force_text
from django.urls import reverse
from django.template.response import TemplateResponse
from django.utils.encoding import force_text
from django.utils.translation import ugettext as _
from django.contrib import admin
from django.core.serializers import serialize
from django.http import JsonResponse


class AdminRestModelAdmin(admin.ModelAdmin):

    def render_simple_change_form(self, request, context, add=False,
                                  change=False, form_url='', obj=None):
        opts = self.model._meta
        app_label = opts.app_label

        if add and self.add_form_template is not None:
            form_template = self.add_form_template
        else:
            form_template = self.change_form_template

        return TemplateResponse(request, form_template or [
            "admin/%s/%s/change_form.html" % (app_label, opts.model_name),
            "admin/%s/change_form.html" % app_label,
            "admin/change_form.html"
        ], context)

    def change_view(self, request, object_id, form_url='', extra_context=None):
        if request.content_type != 'application/json':
            add = object_id is None
            opts = self.model._meta

            context = dict(
                self.admin_site.each_context(request),
                title=(_('Add %s') if add else _('Change %s')) % force_text(
                    opts.verbose_name),
            )

            return self.render_simple_change_form(request, context, add)

        change_view = super(AdminRestModelAdmin, self).change_view(
            request, object_id, form_url, extra_context)
        context_data = change_view.context_data

        opts = context_data['opts']
        breadcrumb = [
            ('Home',
             reverse('admin:index')),
            (force_text(opts.app_config.verbose_name),
             reverse('admin:app_list', args=(opts.app_label, ))),
        ]

        if context_data['has_change_permission']:
            breadcrumb.append(
                (force_text(opts.verbose_name_plural).capitalize(),
                 reverse('admin:%s_%s_changelist' % (
                     opts.app_label, opts.model_name)))
            )
        else:
            breadcrumb.append(
                (force_text(opts.verbose_name_plural).capitalize(), )
            )

        if context_data['add']:
            breadcrumb.append(
                ('Add %s' % opts.verbose_name, )
            )
        else:
            breadcrumb.append(
                (force_text(context_data['original']), None)
            )

        del context_data['opts']
        context_data['opts'] = {}
        context_data['opts']['breadcrumb'] = OrderedDict(breadcrumb)

        del context_data['media']
        del context_data['original']
        del context_data['available_apps']

        context_data['site_header'] = str(context_data['site_header'])
        context_data['site_title'] = str(context_data['site_title'])

        context_data['adminform'] = context_data['adminform'].__dict__
        context_data['adminform']['form'] = \
            context_data['adminform']['form'].__dict__
        context_data['adminform']['form']['instance'] = \
            context_data['adminform']['form']['instance'].__dict__

        del context_data['adminform']['model_admin']
        del context_data['adminform']['form']['error_class']
        del context_data['adminform']['form']['renderer']
        del context_data['adminform']['form']['instance']['_state']

        for key in context_data['adminform']['form']['fields'].keys():
            context_data['adminform']['form']['fields'][key] = \
                context_data['adminform']['form']['fields'][key].__dict__
            widget = context_data['adminform']['form']['fields'][key]['widget']
            context_data['adminform']['form']['fields'][key]['widget'] = \
                context_data['adminform']['form']['fields'][key]['widget'] \
                    .__dict__

            if 'textarea' in  widget.template_name:
                context_data['adminform']['form']['fields'][key]['widget'][
                    'tag'] = 'textarea'
            if hasattr(widget, 'input_type'):
                context_data['adminform']['form']['fields'][key]['widget'][
                    'tag'] = 'input'

            del context_data['adminform']['form']['fields'][key]['validators']

        user_short_name = request.user.get_short_name()
        context_data['user'] = {}
        context_data['user']['username'] = (
            user_short_name if user_short_name else request.user.get_username())
        context_data['user']['userlinks'] = {}

        if context_data['site_url']:
            context_data['user']['userlinks']['View site'] = \
                context_data['site_url']
        # if request.user.is_active and request.user.is_staff:
        #     context_data['user']['userlinks']['Documentation'] = \
        #         reverse('django-admindocs-docroot')
        if request.user.has_usable_password:
            context_data['user']['userlinks']['Change password'] = \
                reverse('admin:password_change')
        context_data['user']['userlinks']['Logout'] = reverse('admin:logout')

        change = context_data['change']
        is_popup = context_data['is_popup']
        save_as = context_data['save_as']
        show_save = context_data.get('show_save', True)
        show_save_and_continue = context_data.get('show_save_and_continue', True)
        context_data.update({
            'show_delete_link': (
                not is_popup and context_data['has_delete_permission'] and
                change and context_data.get('show_delete', True)
            ),
            'delete_url': reverse('admin:%s_%s_delete' % (
                opts.app_label, opts.model_name), args=(object_id,)),
            'show_save_as_new': not is_popup and change and save_as,
            'show_save_and_add_another': (
                context_data['has_add_permission'] and not is_popup and
                (not save_as or context_data['add'])
            ),
            'show_save_and_continue': not is_popup and context_data[
                'has_change_permission'] and show_save_and_continue,
            'show_save': show_save,
        })

        return JsonResponse(context_data)


class AdminRestAdminSite(admin.AdminSite):

    def register(self, model_or_iterable, admin_class=None, **options):
        """
        Create a new ModelAdmin class which inherits from the original and
        the above and register all models with that
        """
        models = model_or_iterable
        if not isinstance(model_or_iterable, (tuple, list)):
            models = tuple([model_or_iterable])

        for model in models:
            if admin_class:
                admin_class = type(
                    str('DynamicAdminRestModelAdmin'),
                    (admin_class, AdminRestModelAdmin),
                    dict(admin_class.__dict__))
            else:
                admin_class = AdminRestModelAdmin

            super(AdminRestAdminSite, self).register(
                [model], admin_class, **options)