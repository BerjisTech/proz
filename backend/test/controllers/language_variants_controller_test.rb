require "test_helper"

class LanguageVariantsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @language_variant = language_variants(:one)
  end

  test "should get index" do
    get language_variants_url, as: :json
    assert_response :success
  end

  test "should create language_variant" do
    assert_difference('LanguageVariant.count') do
      post language_variants_url, params: { language_variant: { language_id: @language_variant.language_id, name: @language_variant.name } }, as: :json
    end

    assert_response 201
  end

  test "should show language_variant" do
    get language_variant_url(@language_variant), as: :json
    assert_response :success
  end

  test "should update language_variant" do
    patch language_variant_url(@language_variant), params: { language_variant: { language_id: @language_variant.language_id, name: @language_variant.name } }, as: :json
    assert_response 200
  end

  test "should destroy language_variant" do
    assert_difference('LanguageVariant.count', -1) do
      delete language_variant_url(@language_variant), as: :json
    end

    assert_response 204
  end
end
