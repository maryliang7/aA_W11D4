export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(benches) {
        console.log("time to update");
        let tempBenches = {};

        benches.forEach((bench) => {
            this.createMarkerFromBench(bench);
            tempBenches[bench.id] = bench;
        });

        for (let bench in this.markers) {
            if (!tempBenches[bench.id]) {
                this.removeMarker(bench)
            }
        }
    }

    createMarkerFromBench(bench) {
        if (!this.markers[bench.id]) {
            let newMark = new google.maps.Marker({
                position: {lat: bench.lat, lng: bench.lng},
                map: this.map,
                title: bench.description
            })
            this.markers[bench.id] = newMark;
        }
    }

    removeMarker(bench) {
        delete this.markers[bench.id];
    }

    render() {
    
    }
}