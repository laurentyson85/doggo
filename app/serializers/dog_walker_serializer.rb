class DogWalkerSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone, :favorite_dog_breed, :image_url
end
