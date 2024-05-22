class LanguageVariantsController < ApplicationController
  before_action :set_language_variant, only: [:show, :update, :destroy]

  # GET /language_variants
  def index
    @language_variants = LanguageVariant.all

    render json: @language_variants
  end

  # GET /language_variants/1
  def show
    render json: @language_variant
  end

  # POST /language_variants
  def create
    @language_variant = LanguageVariant.new(language_variant_params)

    if @language_variant.save
      render json: @language_variant, status: :created, location: @language_variant
    else
      render json: @language_variant.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /language_variants/1
  def update
    if @language_variant.update(language_variant_params)
      render json: @language_variant
    else
      render json: @language_variant.errors, status: :unprocessable_entity
    end
  end

  # DELETE /language_variants/1
  def destroy
    @language_variant.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_language_variant
      @language_variant = LanguageVariant.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def language_variant_params
      params.require(:language_variant).permit(:name, :language_id)
    end
end
