require "test_helper"

class CheckboxControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get checkbox_index_url
    assert_response :success
  end
end
