class ReviewsController < ApplicationController

    def index
        reviews = Review.all
        render json: reviews

    end

    def create
        review = Review.create(review_params)
        review.user_id = session[:user_id]
        review.book_id = params[:book_id]
     if review.save 
            render json: review
        else
            render json: {errors: review.errors.full_messages}, status: :unprocessable_entity
        end
    end

        def destroy
            review = Review.find_by(id: params[:id])
            head :no_content
        end






    private

    def review_params
        params.permit(:comment, :rating, :user_id, :book_id)

    end
end
