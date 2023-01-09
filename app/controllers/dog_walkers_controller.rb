class DogWalkersController < ApplicationController
    #when you make the form to create a dog walker on the front, come back here and rescues and error handling

    def index
        render json: DogWalker.all
    end

    def create #add some validations in model
        walker = DogWalker.create!(walker_params)
        render json: walker, status: :created
    end

    def show
        walker = DogWalker.find(params[:id])
        render json: walker, serializer: DogWalkerWithReviewsSerializer
    end

    private
  
    def walker_params
        params.permit(:name, :phone, :favorite_dog_breed, :image_url)
    end    

end
