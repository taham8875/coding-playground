module Visible
  extend ActiveSupport::Concern

  included do
    validates :status, inclusion: { in: ["public", "private", "archived"] }
  end

  class_methods do
    def public_count
      where(status: "public").count
    end
  end

  def archived?
    status == "archived"
  end
end
