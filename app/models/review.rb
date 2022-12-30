class Review < ApplicationRecord
  belongs_to :user
  belongs_to :dog_walker
end
