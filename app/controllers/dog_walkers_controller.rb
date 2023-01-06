class DogWalkersController < ApplicationController
    #when you make the form to create a dog walker on the front, come back here and rescues and error handling

    def index
        render json: DogWalker.all
    end

    #make show and create

end
