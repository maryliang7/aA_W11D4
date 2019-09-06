# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bench.destroy_all

benches = Bench.create([
    { description: 'Mt. Davidson', lat: 37.738750, lng: -122.455345 },
    { description: 'App Academy', lat: 37.798936, lng: -122.401359 },
    { description: 'Lafayette Park', lat: 37.791319, lng: -122.427538 },
    { description: 'Dolores Park', lat: 37.760211, lng: -122.426904 },
    { description: 'Alamo Square', lat: 37.776643, lng: -122.432555 }
])
