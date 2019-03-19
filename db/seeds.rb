10.times do
  department = Department.create(
    name: Faker::TvShows::RickAndMorty.location
  )

  10.times do
    Item.create(
      name: Faker::Cannabis.strain,
      description: Faker::TvShows::DumbAndDumber.quote,
      price: Faker::Commerce.price.to_f,
      department_id: department.id
    )
  end
end
