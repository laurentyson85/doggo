class Review < ApplicationRecord
  belongs_to :user
  belongs_to :dog_walker

  validates :comment, presence: true
  validates :rating, presence: true

  validates :rating, numericality: {only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 5}

  end
