require "test_helper"

class AdminSquashesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @admin_squash = admin_squashes(:one)
  end

  test "should get index" do
    get admin_squashes_url, as: :json
    assert_response :success
  end

  test "should create admin_squash" do
    assert_difference('AdminSquash.count') do
      post admin_squashes_url, params: { admin_squash: { job_id: @admin_squash.job_id, reason: @admin_squash.reason } }, as: :json
    end

    assert_response 201
  end

  test "should show admin_squash" do
    get admin_squash_url(@admin_squash), as: :json
    assert_response :success
  end

  test "should update admin_squash" do
    patch admin_squash_url(@admin_squash), params: { admin_squash: { job_id: @admin_squash.job_id, reason: @admin_squash.reason } }, as: :json
    assert_response 200
  end

  test "should destroy admin_squash" do
    assert_difference('AdminSquash.count', -1) do
      delete admin_squash_url(@admin_squash), as: :json
    end

    assert_response 204
  end
end
