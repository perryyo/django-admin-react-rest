from __future__ import unicode_literals

from django.apps import AppConfig
from django.contrib import admin

from admin_react_rest.admin import AdminRestAdminSite


class AdminRestConfig(AppConfig):
    name = 'admin_react_rest'

    def ready(self):
        if not isinstance(admin.site, AdminRestAdminSite):
            admin.site = AdminRestAdminSite('admin')
            admin.sites.site = admin.site
