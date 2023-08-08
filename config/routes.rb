Rails.application.routes.draw do
  devise_for :users, 
  path: 'auth', 
  path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  namespace :api do
    namespace :v1 do
      get 'referral', to: 'referral#index'
      post 'invite', to: 'referral#invite'
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  # Defines the root path route ("/")
  root "homepage#index"
  get '/*path' => 'homepage#index'

end
