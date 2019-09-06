Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, default: { format: JSON } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :benches, only: [:index, :create]
  end

  root to: 'static_pages#root'
end
