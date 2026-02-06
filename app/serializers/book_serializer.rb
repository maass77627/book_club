class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :author, :genre, :image
 has_many :reviews

#  def user_reviews
#   object.reviews.where(user_id: object.user_id)

#  end
end
