class DogWalker < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    #when you make the form to create a dog walker on the front, come back here and add whatever validations
end
