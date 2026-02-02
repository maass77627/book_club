class SessionsController < ApplicationController
   
 wrap_parameters format: []

   def create
    #  debugger
     user = User.find_by(username: params[:username].downcase)
    if user && user.authenticate(params[:password])
     session[:user_id] = user.id
     render json: user, status: :created
     else
        render json: { error: "Invalid username or password"}, status: :unauthorized
     end
   end


   def destroy
      session.delete :user_id
      head :no_content
    end
   
   
private

  



end









