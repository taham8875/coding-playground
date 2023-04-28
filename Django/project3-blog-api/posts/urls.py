from django.urls import path
from .views import PostViewSet, UserViewSet
from rest_framework.routers import SimpleRouter

# old : urls
# urlpatterns = [
#     path("", PostListView.as_view(), name="post-list"),
#     path("<int:pk>/", PostDetailView.as_view(), name="post-detail"),
# ]

# new : routers
router = SimpleRouter()
# router.register("", PostViewSet, basename="post")
router.register("users", UserViewSet, basename="user")

urlpatterns = router.urls
