var json =
    [
        {
            song: 'Channa Mereya',
            artist: 'Arijit Singh',
            movie: 'Ae Dil Hai Mushkil',
            release_year: '2016',
            img: 'https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/ae-dil-hai-mushkil-et00032168-30-08-2016-10-50-16.jpg',
            audio_track: "channa-mereya.mp3"
        },
        {
            song: 'Galliyaan',
            artist: 'Ankit Tiwari',
            movie: 'Ek Villain',
            release_year: '2014',
            img: 'ek-villain.jpg',
            audio_track: "galliyaan.mp3"
        },
        {
            song: 'Janam Janam',
            artist: 'Arijit Singh',
            movie: 'Dilwale',
            release_year: '2015',
            img: 'https://www.koimoi.com/wp-content/new-galleries/2020/04/dilwale-box-office-heres-the-daily-breakdown-of-shah-rukh-khan-kajol-varun-dhawan-kriti-sanons-2015-romantic-comedy-drama-001.jpg',
            audio_track: "janam-janam.mp3"
        },
        {
            song: 'Jeena Jeena',
            artist: 'Ankit Tiwari',
            movie: 'Badlapur',
            release_year: '2015',
            img: 'badlapur.jpeg',
            audio_track: "jeena-jeena.mp3"
        },
        {
            song: 'Kaun Tujhe',
            artist: 'Palak Mucchal',
            movie: 'M.S. Dhoni The Untold Story',
            release_year: '2016',
            img: 'https://upload.wikimedia.org/wikipedia/en/3/33/M.S._Dhoni_-_The_Untold_Story_poster.jpg',
            audio_track: "kaun-tujhe.mp3"
        },
        {
            song: 'Qaafiraana',
            artist: 'Arijit Singh & Nikita Gandhi',
            movie: 'Kedarnath',
            release_year: '2018',
            img: 'https://akamaividz2.zee5.com/image/upload/w_599,h_337,c_scale,f_auto,q_auto/resources/0-0-27132/list/1170x658withlog_1361541728.jpg',
            audio_track: "qaafirana.mp3"
        },
        {
            song: 'Sanam Re',
            artist: 'Arijit Singh & Mithoon',
            movie: 'Sanam Re',
            release_year: '2016',
            img: 'https://m.media-amazon.com/images/M/MV5BODA1ZTJjODQtNzZmYi00YThmLTg5N2MtODUwNGFiYjRkNzBlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
            audio_track: "sanam-re.mp3"
        },
        {
            song: 'Sunn Raha Hai Na To',
            artist: 'Arijit Singh',
            movie: 'Aashique 2',
            release_year: '2013',
            img: 'https://images-na.ssl-images-amazon.com/images/I/91BVSK0hMlL._SX679_.jpg',
            audio_track: "sunn-raha-hai-na-tu.mp3"
        },
        {
            song: 'Tum Hi Ho',
            artist: 'Ankit Tiwari',
            movie: 'Aashique 2',
            release_year: '2013',
            img: 'https://images-na.ssl-images-amazon.com/images/I/91BVSK0hMlL._SX679_.jpg',
            audio_track: "tum-hi-ho.mp3"
        },
        {
            song: 'Vaaste',
            artist: "Dhvani Bhanushali & Nikhil D' Souza",
            movie: 'Vaaste',
            release_year: '2020',
            img: 'https://upload.wikimedia.org/wikipedia/en/5/56/Vaaste_song_cover.jpeg',
            audio_track: "vaaste.mp3"
        }
    ];

var i = 1;
var audio = document.getElementById('audio');

audio.onanimationend = next()

console.log(json);

function preload() { }

function setup() {
    canvas = createCanvas(600, 400);
    canvas.parent("cam_div");
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 400);
    fill('#fff');
    stroke('#0f0');
    strokeWeight(10)
    line(100, 0, 100, 400);
    stroke('#00f');
    line(500, 0, 500, 400);
    stroke('orange');
    line(0, 150, 600, 150);
}

function modelLoaded() {
    console.log('Model initialized.');
}

function gotPoses(results) {
    console.log(results)
    if (results.length > 0) {
        if (results[0].pose.rightWrist.x <= 100) {
            console.log('previous');
            prev();
        } else if (results[0].pose.rightWrist.x >= 500) {
            console.log('next');
            next();
        } else if (results[0].pose.nose.y <= 150) {
            audio.pause()
        }
    }
}

function prev() {
    if (i != 1) {
        i -= 1;
        document.getElementById('name').innerHTML = json[i].song;
        document.getElementById('movie').innerHTML = json[i].movie;
        document.getElementById('artist').innerHTML = json[i].artist;
        document.getElementById('image').innerHTML = json[i].img;
        document.getElementById('year').innerHTML = json[i].release_year;
        document.getElementById('audio').src = json[i].audio_track;
    }
}

function next() {
    if (i != 9) {
        i++;
        document.getElementById('name').innerHTML = json[i].song;
        document.getElementById('movie').innerHTML = json[i].movie;
        document.getElementById('artist').innerHTML = json[i].artist;
        document.getElementById('image').innerHTML = json[i].img;
        document.getElementById('year').innerHTML = json[i].release_year;
        document.getElementById('audio').src = json[i].audio_track;

    }
}

