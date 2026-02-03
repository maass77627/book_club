class User < ApplicationRecord
    has_secure_password
    has_many :books
    has_many :reviews
    has_one :profile
    validates :username, presence: true
    
end
