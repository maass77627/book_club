class BooksController < ApplicationController

    def index
       books = Book.all
       render json: books

    end

    def destroy
        book = Book.find(params[:id])
        book.destroy
        head: no_content
 end

 private

 def book_params
    params.permit()

 end
end
