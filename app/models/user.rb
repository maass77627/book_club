class User < ApplicationRecord
    has_secure_password
    has_many :books, dependent: :destroy
    has_many :reviews, dependent: :destroy
    has_one :profile
    validates :username, presence: true
    
end
