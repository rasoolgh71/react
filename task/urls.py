from . import views
from django.conf.urls import url


urlpatterns = [
    url(r'^home$', views.home, name='home'),
    url(r'^react1$', views.react1, name='react1'),
    url(r'^react2$', views.react2, name='react2'),
    url(r'^tolist$', views.tolist, name='tolist'),
    url(r'^markdown$', views.markdown, name='markdown'),
    url(r'^watch$', views.watch, name='watch'),
    url(r'^calculate$', views.calculate, name='calculate'),
    url(r'^datashet$', views.datashet, name='datashet'),

]