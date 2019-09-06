export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(benches) {
        console.log("time to update");
        benches.forEach((bench) => {
            this.createMarkerFromBench(bench);
        });
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

    render() {
    
    }
}