class Post < ApplicationRecord
  has_many :comments, dependent: :destroy
  has_one_attached :photo

  belongs_to :user

  validates :photo, :description, presence: true

  acts_as_votable
end
