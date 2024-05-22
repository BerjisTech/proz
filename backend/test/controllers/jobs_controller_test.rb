require "test_helper"

class JobsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @job = jobs(:one)
  end

  test "should get index" do
    get jobs_url, as: :json
    assert_response :success
  end

  test "should create job" do
    assert_difference('Job.count') do
      post jobs_url, params: { job: { actual: @job.actual, description: @job.description, document: @job.document, excerpt: @job.excerpt, field_specialization_id: @job.field_specialization_id, fixed_price: @job.fixed_price, job_field_id: @job.job_field_id, language_id: @job.language_id, language_variant_id: @job.language_variant_id, potential: @job.potential, price: @job.price, quoting_deadline: @job.quoting_deadline, sample_translation_required: @job.sample_translation_required, submission_deadline: @job.submission_deadline, title: @job.title, user_id: @job.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show job" do
    get job_url(@job), as: :json
    assert_response :success
  end

  test "should update job" do
    patch job_url(@job), params: { job: { actual: @job.actual, description: @job.description, document: @job.document, excerpt: @job.excerpt, field_specialization_id: @job.field_specialization_id, fixed_price: @job.fixed_price, job_field_id: @job.job_field_id, language_id: @job.language_id, language_variant_id: @job.language_variant_id, potential: @job.potential, price: @job.price, quoting_deadline: @job.quoting_deadline, sample_translation_required: @job.sample_translation_required, submission_deadline: @job.submission_deadline, title: @job.title, user_id: @job.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy job" do
    assert_difference('Job.count', -1) do
      delete job_url(@job), as: :json
    end

    assert_response 204
  end
end
