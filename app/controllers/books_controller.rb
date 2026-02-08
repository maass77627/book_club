class BooksController < ApplicationController
    wrap_parameters format: []

    def index
       books = Book.all
       render json: books
    
    end    

    def create
      book = Book.new(book_params)
      book.user_id = session[:user_id]
        if book.save
       render json: book, status: :created
      else
       render json: { errors: book.errors.full_messages }, status: :unprocessable_entity
       end
       end

 

       def update
        book = Book.find_by(id: params[:id])
        if book.update(book_params)
        render json: book
        else 
            render json: {errors: book.errors.full_messages}, status: :unprocessable_entity
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
