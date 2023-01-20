class UserWithReviewsWalkersSerializer < ActiveModel::Serializer
  attributes :id, :username 

  has_many :dog_walkers
  has_many :reviews, serializer: ReviewSerializer
end
