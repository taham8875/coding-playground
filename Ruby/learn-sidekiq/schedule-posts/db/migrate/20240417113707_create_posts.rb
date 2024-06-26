class CreatePosts < ActiveRecord::Migration[7.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :body
      t.boolean :published
      t.boolean :scheduled
      t.datetime :published_at, default: -> { "CURRENT_TIMESTAMP" }

      t.timestamps
    end
  end
end
