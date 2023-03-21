require "test_helper"

class EnabledisableControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get enabledisable_index_url
    assert_response :success
  end
end
