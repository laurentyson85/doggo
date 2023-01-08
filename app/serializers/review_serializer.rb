class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :dog_walker_id, :rating, :comment
end

#don't think I need this serializer
