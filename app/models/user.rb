class User < ApplicationRecord
    has_secure_password
    has_many :books
    has_one :profile
    validates :username, presence: true
    
end
