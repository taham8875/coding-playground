json.extract! post, :id, :title, :body, :published, :scheduled, :published_at, :created_at, :updated_at
json.url post_url(post, format: :json)
