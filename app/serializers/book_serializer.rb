class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :author, :genre, :image, :user_id
 has_many :reviews


end
