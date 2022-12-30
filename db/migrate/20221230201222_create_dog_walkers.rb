class CreateDogWalkers < ActiveRecord::Migration[6.1]
  def change
    create_table :dog_walkers do |t|
      t.string :name
      t.string :phone
      t.string :favorite_dog_breed
      t.string :image_url

      t.timestamps
    end
  end
end
