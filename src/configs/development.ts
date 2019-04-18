export default {
    server: {
        app: {
            url: {
                local: 'http://localhost:8080',
            },
        },
    },
    leaflet: {
        initZoom: 15,
        tileLayer: {
            png: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            params: {
                attribution: 'Map data &copy; <a href="http://openstreetmap.org/">OpenStreetMap</a>',
                maxZoom: 18,
            },
        },
    },
};
