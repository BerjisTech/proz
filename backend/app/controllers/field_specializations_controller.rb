class FieldSpecializationsController < ApplicationController
  before_action :set_field_specialization, only: [:show, :update, :destroy]

  # GET /field_specializations
  def index
    @field_specializations = FieldSpecialization.all

    render json: @field_specializations
  end

  # GET /field_specializations/1
  def show
    render json: @field_specialization
  end

  # POST /field_specializations
  def create
    @field_specialization = FieldSpecialization.new(field_specialization_params)

    if @field_specialization.save
      render json: @field_specialization, status: :created, location: @field_specialization
    else
      render json: @field_specialization.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /field_specializations/1
  def update
    if @field_specialization.update(field_specialization_params)
      render json: @field_specialization
    else
      render json: @field_specialization.errors, status: :unprocessable_entity
    end
  end

  # DELETE /field_specializations/1
  def destroy
    @field_specialization.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_field_specialization
      @field_specialization = FieldSpecialization.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def field_specialization_params
      params.require(:field_specialization).permit(:name, :job_field_id)
    end
end
