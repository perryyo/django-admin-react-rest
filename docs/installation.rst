Installation
============

Getting the code
----------------

The recommended way to install the ``Admin React Rest`` is via pip_::

    $ pip install django-admin-react-rest

To test an upcoming release, you can install the in-development version
instead with the following command::

     $ pip install -e git+https://github.com/django-admin-react-rest/django-admin-react-rest.git#egg=django-admin-view-permission

Requirements
------------

* Django

Support
-------

* Django: 1.8, 1.9, 1.10, 1.11
* Python: 2.7, 3.4, 3.5, 3.6

Setup
-----

Make sure that ``'django.contrib.admin'`` is set up properly and add
``'admin_react_rest'`` to your ``INSTALLED_APPS`` setting::

    INSTALLED_APPS = [
        'admin_react_rest',
        # ...
        'django.contrib.admin',
        # ...
    ]

.. _pip: https://pip.pypa.io/