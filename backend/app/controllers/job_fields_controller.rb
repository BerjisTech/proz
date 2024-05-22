class JobFieldsController < ApplicationController
  before_action :set_job_field, only: [:show, :update, :destroy]

  # GET /job_fields
  def index
    @job_fields = JobField.all

    render json: @job_fields
  end

  # GET /job_fields/1
  def show
    render json: @job_field
  end

  # POST /job_fields
  def create
    @job_field = JobField.new(job_field_params)

    if @job_field.save
      render json: @job_field, status: :created, location: @job_field
    else
      render json: @job_field.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /job_fields/1
  def update
    if @job_field.update(job_field_params)
      render json: @job_field
    else
      render json: @job_field.errors, status: :unprocessable_entity
    end
  end

  # DELETE /job_fields/1
  def destroy
    @job_field.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_job_field
      @job_field = JobField.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def job_field_params
      params.require(:job_field).permit(:name)
    end
end
