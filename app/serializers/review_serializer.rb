class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :dog_walker_id, :rating, :comment

  has_one :user
  has_one :dog_walker
end
