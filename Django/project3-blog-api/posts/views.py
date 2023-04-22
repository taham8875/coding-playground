from rest_framework import generics
from .models import Post
from .serializers import PostSerializer
from .permissions import IsAuthorOrReadOnly

class PostListView(generics.ListCreateAPIView):
    permission_classes = (IsAuthorOrReadOnly,)
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    
class PostDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthorOrReadOnly,)
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    
# RetrieveUpdateDestroyAPIView vs RetrieveAPIView
#   RetrieveUpdateDestroyAPIView: GET, PUT, PATCH, DELETE
#   RetrieveAPIView: GET

# ListAPIView vs ListCreateAPIView
#   ListAPIView: GET
#   ListCreateAPIView: GET, POST