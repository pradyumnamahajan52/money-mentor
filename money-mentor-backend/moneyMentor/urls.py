from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('api/user/', include('users.urls')),
    path('api/bse/', include('bse.urls')),
    path('api/nse/', include('nse.urls')),
    path('api/risk-profile/', include('riskprofile.urls')),
    path('', include('home.urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
