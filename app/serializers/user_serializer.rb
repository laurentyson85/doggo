class UserSerializer < ActiveModel::Serializer
  attributes :id, :username 

  has_many :dog_walkers
end
