class AdminSquashesController < ApplicationController
  before_action :set_admin_squash, only: [:show, :update, :destroy]

  # GET /admin_squashes
  def index
    @admin_squashes = AdminSquash.all

    render json: @admin_squashes
  end

  # GET /admin_squashes/1
  def show
    render json: @admin_squash
  end

  # POST /admin_squashes
  def create
    @admin_squash = AdminSquash.new(admin_squash_params)

    if @admin_squash.save
      render json: @admin_squash, status: :created, location: @admin_squash
    else
      render json: @admin_squash.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /admin_squashes/1
  def update
    if @admin_squash.update(admin_squash_params)
      render json: @admin_squash
    else
      render json: @admin_squash.errors, status: :unprocessable_entity
    end
  end

  # DELETE /admin_squashes/1
  def destroy
    @admin_squash.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_admin_squash
      @admin_squash = AdminSquash.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def admin_squash_params
      params.require(:admin_squash).permit(:job_id, :reason)
    end
end
