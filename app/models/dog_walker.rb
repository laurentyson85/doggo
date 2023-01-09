class DogWalker < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    validates :name, presence: true
    validates :phone, presence: true
    validates :favorite_dog_breed, presence: true
    validates :image_url, presence: true

end