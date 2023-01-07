class DogWalkerWithReviewsSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone, :favorite_dog_breed, :image_url
  has_many :reviews
end
