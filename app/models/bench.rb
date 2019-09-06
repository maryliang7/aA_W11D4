class Bench < ApplicationRecord
    validates :description, :lng, :lat, presence: true

    def self.in_bounds(bound) {
        self.where("lat < ?",  bound[:northEast][:lat])
            .where("lng < ?",  bound[:northEast][:lng])
            .where("lat > ?",  bound[:southWest][:lat])
            .where("lat > ?",  bound[:southWest][:lng])
    };
end
