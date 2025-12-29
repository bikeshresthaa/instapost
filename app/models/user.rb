class User < ApplicationRecord
  has_many :posts
  has_many :comments
  has_one_attached :photo
  has_secure_password
  validates :email, presence: true, uniqueness: true
  acts_as_voter
end
