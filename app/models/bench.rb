class Bench < ApplicationRecord
    validates :description, :lng, :lat, :seating, presence: true

    def self.in_bounds(bound) 
        Bench.where("lat < ?",  bound[:northEast][:lat].to_f)
            .where("lng < ?",  bound[:northEast][:lng].to_f)
            .where("lat > ?",  bound[:southWest][:lat].to_f)
            .where("lng > ?",  bound[:southWest][:lng].to_f)
    end
end
