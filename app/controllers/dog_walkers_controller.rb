class DogWalkersController < ApplicationController    
    
    def index
        render json: DogWalker.all
    end

    def get_walkers
        walkers = @current_user.walkers.all
        render json: walkers
    end

    def create
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
