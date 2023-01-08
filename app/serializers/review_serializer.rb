class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :dog_walker_id, :rating, :comment

  belongs_to :dog_walker
end


