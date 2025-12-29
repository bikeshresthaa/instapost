class RemoveCommenterFromComments < ActiveRecord::Migration[8.1]
  def change
    remove_column :comments, :commenter, :string
  end
end
