# Sidekiq Post Scheduler

A simple blog app where users can create posts and schedule them to be published at a later date. Every minute, Sidekiq checks if there are any posts that are scheduled to be published and publishes them if the time has come.

Also when the user hits the `/published` endpoint, sidekiq job runs to publish all the posts that are scheduled to be published.

This app is made to practice using Sidekiq to schedule jobs.

## Features

- Users can create posts
- Users can schedule posts to be published at a later date
- Users can view all posts
- Users can view published posts
- Users can view a certain post and see if it is published or not

## Technologies Used

- Ruby on Rails
- Sidekiq
- Sidekiq scheduler
- Redis in docker
- Tailwind CSS

## Views

- `/posts` - View all posts
- `/posts/new` - Create a new post
- `/posts/:id` - View a certain post
- `/posts/:id/edit` - Edit a certain post
- `/published` - View all published posts
