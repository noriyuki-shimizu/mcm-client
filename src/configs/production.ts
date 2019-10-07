export default {
    server: {
        protocolHost: 'http://localhost:8080/mcm'
    },
    firebase: {
        apiKey: 'AIzaSyCSAxcqVOgM_XdTIJTOv4mckREJEcnivsc',
        authDomain: 'mcm-client.firebaseapp.com',
        databaseURL: 'https://mcm-client.firebaseio.com',
        projectId: 'mcm-client',
        storageBucket: 'mcm-client.appspot.com',
        messagingSenderId: '1013848755479'
    },
    leaflet: {
        initZoom: 15,
        tileLayer: {
            png: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            params: {
                attribution:
                    'Map data &copy; <a href="http://openstreetmap.org/">OpenStreetMap</a>',
                maxZoom: 18
            }
        }
    }
};
