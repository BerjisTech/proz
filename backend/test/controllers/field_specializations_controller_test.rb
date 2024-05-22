require "test_helper"

class FieldSpecializationsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @field_specialization = field_specializations(:one)
  end

  test "should get index" do
    get field_specializations_url, as: :json
    assert_response :success
  end

  test "should create field_specialization" do
    assert_difference('FieldSpecialization.count') do
      post field_specializations_url, params: { field_specialization: { job_field_id: @field_specialization.job_field_id, name: @field_specialization.name } }, as: :json
    end

    assert_response 201
  end

  test "should show field_specialization" do
    get field_specialization_url(@field_specialization), as: :json
    assert_response :success
  end

  test "should update field_specialization" do
    patch field_specialization_url(@field_specialization), params: { field_specialization: { job_field_id: @field_specialization.job_field_id, name: @field_specialization.name } }, as: :json
    assert_response 200
  end

  test "should destroy field_specialization" do
    assert_difference('FieldSpecialization.count', -1) do
      delete field_specialization_url(@field_specialization), as: :json
    end

    assert_response 204
  end
end
