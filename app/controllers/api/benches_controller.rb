class Api::BenchesController < ApplicationController

    def index
        @benches = Bench.in_bounds(params[:bounds])
        render :index
    end

    def create
        @bench = Bench.new(bench_params)
        
        if @user.save
            render :show
        else
            render json: @bench.errors.full_messages, status: 404
        end
    end

    private
    def bench_params
        params.require(:bench).permit(:description, :lat, :lng)
    end

end
