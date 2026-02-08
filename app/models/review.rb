class Review < ApplicationRecord
    belongs_to :user
    belongs_to :book

    validates :rating, presence: true
    validates :user_id, uniqueness: { scope: :book_id }
end
