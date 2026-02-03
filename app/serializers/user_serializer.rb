class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image
  has_many :books
  has_many :reviews
end
