from django.db import models

# Create your models here.


class Book(models.Model):
    title = models.CharField(max_length=250)
    author = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=5, decimal_places=2)
    isbn = models.CharField(max_length=13)
    published = models.DateField()

    def __str__(self):
        return self.title
