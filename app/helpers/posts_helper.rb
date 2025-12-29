module PostsHelper
  def username(user_email)
    user_email.split("@").first
  end
end
