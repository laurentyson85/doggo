class DogWalkersController < ApplicationController
    #when you make the form to create a dog walker on the front, come back here and rescues and error handling

    def index
        render json: DogWalker.all
    end

    def show #add error handling
        walker = DogWalker.find(params[:id])
        render json: walker, serializer: DogWalkerWithReviewsSerializer
      end

    #create
    

end
