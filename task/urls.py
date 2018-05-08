from . import views
from django.conf.urls import url


urlpatterns = [
    url(r'^home$', views.home, name='home'),
    url(r'^react1$', views.react1, name='react1'),
    url(r'^test$', views.test, name='test'),
]