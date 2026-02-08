class Book < ApplicationRecord
    belongs_to :user
    has_many :reviews, dependent: :destroy
    has_many :reviewers, through: :reviews, source: :user
    validates :title, presence: true
    
  
    
end
