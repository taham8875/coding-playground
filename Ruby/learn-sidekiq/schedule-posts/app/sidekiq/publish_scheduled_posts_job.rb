class PublishScheduledPostsJob
  include Sidekiq::Job

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
