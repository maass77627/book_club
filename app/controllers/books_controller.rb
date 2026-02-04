class BooksController < ApplicationController
    wrap_parameters format: []

    def index
       books = Book.all
       render json: books.as_json(except: [:created_at, :updated_at])

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

       def user_book_reviews
         user = User.find_by(id: params[:user_id])
         books = user.books
           bookreviews =  books.map {
           | book | { book: book.as_json(
         except: [:created_at, :updated_at]
        ), review: book.reviews.where(user_id: user.id)}
        }
       render json: bookreviews
        # debugger
       end

       def user_books
        user = User.find_by(id: params[:user_id])
        render json: user.books.as_json(include: [:user])
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
