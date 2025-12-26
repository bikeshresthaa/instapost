class Post < ApplicationRecord
  has_one_attached :photo

  belongs_to :user

  validates :photo, :description, presence: true
end
