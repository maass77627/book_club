class BooksController < ApplicationController

    def index
       books = Book.all
       render json: books

    end    

    def create
     book = Book.create(book_params)
        if book.valid?
            render json: book
        else
        render json: {errors: book.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        book = Book.find_by(id: params[:id])
        render json: book
    end

    def destroy
        book = Book.find(params[:id])
        book.destroy
        head :no_content
    end

 private

 def book_params
    params.permit(:title, :description, :author, :genre, :image, :user_id)
 end

end
