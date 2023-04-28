from rest_framework import generics, viewsets
from rest_framework.permissions import IsAdminUser
from .models import Post
from django.contrib.auth.models import User
from .serializers import PostSerializer, UserSerializer
from .permissions import IsAuthorOrReadOnly

# old : views
# class PostListView(generics.ListCreateAPIView):
#     permission_classes = (IsAuthorOrReadOnly,)
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer
    
# class PostDetailView(generics.RetrieveUpdateDestroyAPIView):
#     permission_classes = (IsAuthorOrReadOnly,)
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer
    
# RetrieveUpdateDestroyAPIView vs RetrieveAPIView
#   RetrieveUpdateDestroyAPIView: GET, PUT, PATCH, DELETE
#   RetrieveAPIView: GET

# ListAPIView vs ListCreateAPIView
#   ListAPIView: GET
#   ListCreateAPIView: GET, POST

# New : viewsets
class PostViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthorOrReadOnly,)
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    

class UserViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAdminUser,)
    queryset = User.objects.all()
    serializer_class = UserSerializer