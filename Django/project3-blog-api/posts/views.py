from rest_framework import generics
from .models import Post
from .serializers import PostSerializer

class PostListView(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    
class PostDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    
# RetrieveUpdateDestroyAPIView vs RetrieveAPIView
#   RetrieveUpdateDestroyAPIView: GET, PUT, PATCH, DELETE
#   RetrieveAPIView: GET

# ListAPIView vs ListCreateAPIView
#   ListAPIView: GET
#   ListCreateAPIView: GET, POST