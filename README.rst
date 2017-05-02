================
Admin React Rest
================

Reusable application which replaces the static django admin interface with react.

Requirements
------------

* Django

Support
-------

* Django: 1.8, 1.9, 1.10, 1.11
* Python: 2.7, 3.4, 3.5, 3.6

Documentation
-------------
For a full documentation you can visit: http://django-admin-react-rest.readthedocs.org/

Setup
-----

* ``pip install django-admin-react-rest``

and then add ``admin_react_Rest`` at the INSTALLED_APPS like this::

    INSTALLED_APPS = [
        'admin_react_rest',
        'django.contrib.admin',
        ...
    ]
