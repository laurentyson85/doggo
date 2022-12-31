class Review < ApplicationRecord
  belongs_to :user
  belongs_to :dog_walker

  #when you make the form to create a review on the front, come back here and add whatever validations
end
