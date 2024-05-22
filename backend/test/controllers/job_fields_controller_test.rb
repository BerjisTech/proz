require "test_helper"

class JobFieldsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @job_field = job_fields(:one)
  end

  test "should get index" do
    get job_fields_url, as: :json
    assert_response :success
  end

  test "should create job_field" do
    assert_difference('JobField.count') do
      post job_fields_url, params: { job_field: { name: @job_field.name } }, as: :json
    end

    assert_response 201
  end

  test "should show job_field" do
    get job_field_url(@job_field), as: :json
    assert_response :success
  end

  test "should update job_field" do
    patch job_field_url(@job_field), params: { job_field: { name: @job_field.name } }, as: :json
    assert_response 200
  end

  test "should destroy job_field" do
    assert_difference('JobField.count', -1) do
      delete job_field_url(@job_field), as: :json
    end

    assert_response 204
  end
end
