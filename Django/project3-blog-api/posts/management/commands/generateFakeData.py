from django.contrib.auth.models import User
from django.utils import timezone
from faker import Faker
from posts.models import Post
from django.core.management.base import BaseCommand


class Command(BaseCommand):
    help = "Generates fake posts and users for testing purposes."

    def handle(self, *args, **options):
        # Create a Faker instance
        fake = Faker()

        # Create 10 fake users
        for i in range(10):
            username = fake.user_name()
            email = fake.email()
            password = fake.password()
            user = User.objects.create_user(
                username=username, email=email, password=password
            )

        # Get all users from the database
        users = User.objects.all()

        # Create 10 fake posts
        for i in range(10):
            author = fake.random_element(users)
            title = fake.sentence()
            content = fake.paragraphs(5)
            date_posted = fake.date_time_between(
                start_date="-1y", end_date="now", tzinfo=timezone.get_current_timezone()
            )
            post = Post.objects.create(
                title=title, content=content, author=author, date_posted=date_posted
            )
