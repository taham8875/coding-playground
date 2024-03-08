class Comment < ApplicationRecord
  belongs_to :article
  include Visible
  # validates :commentor, inclusion: { in: ["public", "private", "archived"] }

  # def archived?
  #   status == "archived"
  # end
end
