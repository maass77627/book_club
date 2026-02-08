class ReviewsController < ApplicationController
    
     wrap_parameters format: []


    def index
        book = Book.find(params[:book_id])
        reviews = book.reviews.includes(:user)
        render json: reviews

    end

    def create
        
        review = Review.new(review_params)
        review.user_id = session[:user_id]
        review.book_id = params[:book_id]
        # debugger
     if review.save 
            render json: review
        else
            render json: {errors: review.errors.full_messages}, status: :unprocessable_entity
        end
    end

        # def destroy
        #     review = Review.find_by(id: params[:id])
        #     review.destroy
        #     head :no_content
        # end






    private

    def review_params
        params.permit(:comment, :rating, :user_id, :book_id)

    end
end
