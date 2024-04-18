require "sidekiq-scheduler"

class PostPublishScheduler
  # check the published_at field of the post and if it is less than the current time, then publish the post.
  include Sidekiq::Worker

  def perform
    puts "Checking for posts to publish..."
    Post
      .where("published_at <= ?", Time.now)
      .where(published: false)
      .where(scheduled: true)
      .each do |post|
      post.publish
    end
  end
end
