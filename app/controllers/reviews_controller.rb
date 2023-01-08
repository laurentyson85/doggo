class ReviewsController < ApplicationController
    #still needs rescues and error handling

    def index
        reviews = @current_user.reviews.all
        render json: reviews
    end
    
    def create
        review = @current_user.reviews.create!(review_params)
        render json: review, status: :created
    end

    def update
        review = find_review
        review = Review.update!(review_params)
        render json: review
    end

    def destroy
        review = find_review
        review.destroy
        head :no_content
    end

    private

    def review_params
        params.permit(:dog_walker_id, :comment, :rating)
    end

    def find_review
        Review.find(params[:id])
    end
    
end
