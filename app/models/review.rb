class Review < ApplicationRecord
  belongs_to :user
  belongs_to :dog_walker

  validates :comment, presence: true
  validates :rating, presence: true

  #when you make the form to create a review on the front, come back here and add whatever validations
  #add validation for rating between 1-5
end
