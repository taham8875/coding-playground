class Post < ApplicationRecord
  def publish
    update!(published: true, scheduled: false)
  end
end
