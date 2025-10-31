import logo from './logo.svg'
import marvelLogo from './marvelLogo.svg'
 import googlePlay from './googlePlay.svg'
import appStore from './appStore.svg'
import screenImage from './screenImage.svg'
import profile from './profile.png'

export const assets = {
    logo,
    marvelLogo,
    googlePlay,
    appStore,
    screenImage,
    profile,
    
}

export const dummyTrailers = [
  {
    id: "1",
    title: "Fast X Trailer",
    videoUrl: "https://www.youtube.com/watch?v=1fvzVMmARqY"
  },
  {
    id: "2",
    title: "Predator Trailer",
    videoUrl: "https://www.youtube.com/watch?v=43R9l7EkJwE"
  },
  {
    id: "3",
    title: "The Dark Knight Trailer",
    videoUrl: "https://www.youtube.com/watch?v=EXeTwQWrcwY"
  },
  {
    id: "4",
    title: "Avatar: Fire and Ash",
    videoUrl: "https://www.youtube.com/watch?v=nb_fFj_0rq8"
  }
]
const dummyCastsData = [
    { "name": "Milla Jovovich", "profile_path": "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg", },
    { "name": "Dave Bautista", "profile_path": "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg", },
    { "name": "Arly Jover", "profile_path": "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg", },
    { "name": "Amara Okereke", "profile_path": "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg", },
    { "name": "Fraser James", "profile_path": "https://image.tmdb.org/t/p/original/mGAPQG2OKTgdKFkp9YpvCSqcbgY.jpg", },
    { "name": "Deirdre Mullins", "profile_path": "https://image.tmdb.org/t/p/original/lJm89neuiVlYISEqNpGZA5kTAnP.jpg", },
    { "name": "Sebastian Stankiewicz", "profile_path": "https://image.tmdb.org/t/p/original/hLN0Ca09KwQOFLZLPIEzgTIbqqg.jpg", },
    { "name": "Tue Lunding", "profile_path": "https://image.tmdb.org/t/p/original/qY4W0zfGBYzlCyCC0QDJS1Muoa0.jpg", },
    { "name": "Jacek Dzisiewicz", "profile_path": "https://image.tmdb.org/t/p/original/6Ksb8ANhhoWWGnlM6O1qrySd7e1.jpg", },
    { "name": "Ian Hanmore", "profile_path": "https://image.tmdb.org/t/p/original/yhI4MK5atavKBD9wiJtaO1say1p.jpg", },
    { "name": "Eveline Hall", "profile_path": "https://image.tmdb.org/t/p/original/uPq4xUPiJIMW5rXF9AT0GrRqgJY.jpg", },
    { "name": "Kamila Klamut", "profile_path": "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg", },
    { "name": "Caoilinn Springall", "profile_path": "https://image.tmdb.org/t/p/original/uZNtbPHowlBYo74U1qlTaRlrdiY.jpg", },
    { "name": "Jan Kowalewski", "profile_path": "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg", },
    { "name": "Pawel Wysocki", "profile_path": "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg", },
    { "name": "Simon Lööf", "profile_path": "https://image.tmdb.org/t/p/original/cbZrB8crWlLEDjVUoak8Liak6s.jpg", },
    { "name": "Tomasz Cymerman", "profile_path": "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg", }
]
export const dummyShowsData = [
  {
    _id: "1",
    id: 1,
    title: "In the Lost Lands",
    poster_path: "https://image.tmdb.org/t/p/original/dDlfjR7gllmr8HTeN6rfrYhTdwX.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/op3qmNhvwEvyT7UFyPbIfQmKriB.jpg",
    release_date: "2025-02-27",
    genre: [{ name: "Action" }, { name: "Sci-Fi" }],
    runtime: 148,
    "tagline": "Everyone deserves a second shot.",
    "original_language": "en",
    casts: dummyCastsData,
    "vote_count": 23569,
    overview: "A queen sends the powerful and feared sorceress Gray Alys to the ghostly wilderness of the Lost Lands in search of a magical power, where she and her guide, the drifter Boyce, must outwit and outfight both man and demon.",
    vote_average: 6.4
  },
  {
    _id: "2",
    id: 2,
    title: "Until Dawn",
    poster_path: "https://image.tmdb.org/t/p/original/juA4IWO52Fecx8lhAsxmDgy3M3.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/icFWIk1KfkWLZnugZAJEDauNZ94.jpg",
    release_date: "2014-11-07",
    genre: [{ name: "Horror" }, { name: "Mystery" }, { name: "Sci-Fi" }],
    runtime: 103,
    overview: "One year after her sister Melanie mysteriously disappeared, Clover and her friends head into the remote valley where she vanished in search of answers. Exploring an abandoned visitor center, they find themselves stalked by a masked killer and horrifically murdered one by one...only to wake up and find themselves back at the beginning of the same evening.",
    "original_language": "en",
    "tagline": "Every night a different nightmare.",
    "casts": dummyCastsData,
    "vote_count": 18000,
    vote_average: 8.6,
  },
  {
    _id: "3",
    id: 3,
    title: "The Dark Knight",
    poster_path: "https://image.tmdb.org/t/p/original/mKKqV23MQ0uakJS8OCE2TfV5jNS.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
    release_date: "2008-07-18",
    genre: [{ name: "Action" }, { name: "Crime" }, { name: "Drama" }],
    runtime: 152,
    overview: "The wildly funny and touching story of a lonely Hawaiian girl and the fugitive alien who helps to mend her broken family.",
    "original_language": "en",
    "tagline": "Every night a different nightmare.",
    "casts": dummyCastsData,
    "vote_count": 18000,
    vote_average: 9.0,
  },
  {
    _id: "4",
    id: 4,
    title: "Avatar",
    poster_path: "https://image.tmdb.org/t/p/original/ubP2OsF3GlfqYPvXyLw9d78djGX.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg",
    release_date: "2009-12-18",
    genre: [{ name: "Action" }, { name: "Adventure" }, { name: "Fantasy" }],
    runtime: 162,
    overview: "When a drug heist swerves lethally out of control, a jaded cop fights his way through a corrupt city's criminal underworld to save a politician's son.",
    "original_language": "en",
    "tagline": "Every night a different nightmare.",
    "casts": dummyCastsData,
    "vote_count": 18000,
    vote_average: 7.9,
  },
  {
    _id: "5",
    id: 5,
    title: "Titanic",
    poster_path: "https://image.tmdb.org/t/p/original/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    release_date: "1997-12-19",
    genre: [{ name: "Drama" }, { name: "Romance" }],
    runtime: 195,
    overview: "Four misfits find themselves struggling with ordinary problems when they are suddenly pulled through a mysterious portal into the Overworld: a bizarre, cubic wonderland that thrives on imagination. To get back home, they'll have to master this world while embarking on a magical quest with an unexpected, expert crafter, Steve.",
    "original_language": "en",
    "tagline": "Every night a different nightmare.",
    "casts": dummyCastsData,
    "vote_count": 18000,
    vote_average: 8.2,
  }
]


export const dummyDateTimeData = {
    "2025-07-24": [
        { "time": "2025-07-24T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd1" },
        { "time": "2025-07-24T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd2" },
        { "time": "2025-07-24T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd3" }
    ],
    "2025-07-25": [
        { "time": "2025-07-25T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd4" },
        { "time": "2025-07-25T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd5" },
        { "time": "2025-07-25T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd6" }
    ],
    "2025-07-26": [
        { "time": "2025-07-26T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd7" },
        { "time": "2025-07-26T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd8" },
        { "time": "2025-07-26T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd9" }
    ],
    "2025-07-27": [
        { "time": "2025-07-27T01:00:00.000Z", "showId": "68395b407f6329be2bb45bda" },
        { "time": "2025-07-27T03:00:00.000Z", "showId": "68395b407f6329be2bb45bdb" },
        { "time": "2025-07-27T05:00:00.000Z", "showId": "68395b407f6329be2bb45bdc" }
    ]
}

export const dummyDashboardData = {
    "totalBookings": 14,
    "totalRevenue": 1517,
    "totalUser": 5,
    "activeShows": [
        {
            "_id": "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            "showDateTime": "2025-06-30T02:30:00.000Z",
            "showPrice": 59,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "C1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "6835238fe96d99513e4221a8",
            movie: dummyShowsData[1],
            "showDateTime": "2025-06-30T15:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221a9",
            movie: dummyShowsData[2],
            "showDateTime": "2025-06-30T03:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221aa",
            movie: dummyShowsData[3],
            "showDateTime": "2025-07-15T16:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A4": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "683682072b5989c29fc6dc0d",
            movie: dummyShowsData[4],
            "showDateTime": "2025-06-05T15:30:00.000Z",
            "showPrice": 49,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
            "__v": 0
        },
        {
            "_id": "68380044686d454f2116b39a",
            movie: dummyShowsData[5],
            "showDateTime": "2025-06-20T16:00:00.000Z",
            "showPrice": 79,
            "occupiedSeats": {
                "A1": "user_2xl7eCSUHddibk5lRxfOtw9RMwX",
                "A2": "user_2xl7eCSUHddibk5lRxfOtw9RMwX"
            }
        }
    ]
}


export const dummyBookingData = [
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 98,
        "bookedSeats": ["D1", "D2"],
        "isPaid": false,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 49,
        "bookedSeats": ["A1"],
        "isPaid": true,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 147,
        "bookedSeats": ["A1", "A2","A3"],
        "isPaid": true,
    },
]