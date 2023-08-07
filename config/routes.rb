Rails.application.routes.draw do
  devise_for :users, 
  path: '', 
  path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get '/referral', to: 'homepage#referral'
  # Defines the root path route ("/")
  root "homepage#index"
  get '/*path' => 'homepage#index'

end
