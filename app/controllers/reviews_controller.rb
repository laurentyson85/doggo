class ReviewsController < ApplicationController    

    def index
        reviews = @current_user.reviews.all
        render json: reviews, serializer: UserWithReviewsWalkersSerializer
    end
    
    def create
        review = @current_user.reviews.create!(review_params)
        render json: review, status: :created
    end

    def update
        review = find_review
        review.update!(review_params)
        render json: review
    end

    def destroy
        review = find_review
        review.destroy
        head :no_content
    end

    private

    def review_params        
        params.require(:review).permit(:rating, :dog_walker_id, :comment)
    end

    def find_review
        Review.find(params[:id])
    end  
    
end
