class User < ApplicationRecord
    has_secure_password
    has_many :books, dependent: :destroy
    has_many :reviews, dependent: :destroy
    has_one :profile
    has_many :reviewed_books, through: :reviews, source: :book
    validates :username, presence: true, uniqueness: true
    
end
