// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { dummyDateTimeData, dummyShowsData } from '../assets/assets'
// import BlurCicle from '../components/BlurCicle'
// import { StarsIcon } from 'lucide-react'
// import timeFormat from '../lib/timeFormat'


// const MovieDetails = () => {
  // const { id } = useParams()
  // const [show, setShow] = useState(null)

  // const getshow = async ()=>{
  //   const show = dummyShowsData.find(show => show._id === id)
  //   setShow({
  //     movie: show,
  //     dateTime: dummyDateTimeData
  //   })
  // }
// const getshow = () => {
//   const foundShow = dummyShowsData.find(show => show._id === id)
//   if (foundShow) {
//     setShow({
//       movie: foundShow,
//       dateTime: dummyDateTimeData
//     })
//   } else {
//     console.warn("Movie not found for id:", id)
//   }
// }

// useEffect(()=>{
//   getshow()
// },[id])
  //  return  (
//      <div className='px-6 md:px-16 lg:px-40 pt-30 md:pt-50'>
//       <div className='flex flex-col md:flex-row gap-8 max-w-6xl mx-auto'>
//          <img src={show.movie.poster_path} alt="" className='max-md:mx-auto rounded-xl h-104 max-w-70 object-cover'/>

//          <div className='relative flex flex-col gap-3'>
//            <BlurCicle top="-100px" left="-100px"/>
//            <p className='text-primary'>ENGLISH</p>
//            <h1 className='text-4xl font-semibold max-w-96 text-balance'>{show.movie.title}</h1>
//            <div className='flex items-center gap-2 text-gray-300'>
//              <StarsIcon className='w-5 h-5 text-primary fill-primary'/>
//              {show.movie.vote_average.toFixed(1)} User Rating

//            </div>
//            <p className='text-gray-400 mt-2 text-sm leading-tight max-w-xl'>{show.movie.overview}</p>

//            <p>
//              {timeFormat(show.movie.runtime)}.{show.movie.genres.map(genre =>genre.name).join(", ")}.{show.movie.release_date.split("-")[0]}
//            </p>
//         </div>
//        </div>
        
//      </div>
//    ) : (
//      <div>
//        Loading...
//      </div>

{/* <div>
  Hello
</div>
   )
}

export default MovieDetails; */}
// ------------------Sir

// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { dummyDateTimeData, dummyShowsData } from '../assets/assets'
// import BlurCicle from '../components/BlurCicle'
// import { StarsIcon } from 'lucide-react'
// import timeFormat from '../lib/timeFormat'


// const MovieDetails = () => {
//   const { id } = useParams()
//   const [show, setShow] = useState(null)
//   console.log("my id", id)
// console.log(dummyShowsData)

//   const getshow = async ()=>{
//     const show = dummyShowsData.find(show => show._id === id)
//     setShow({
//       movie: show,
//       dateTime: dummyDateTimeData
//     })
//   }
// console.log(show)

// useEffect(()=>{
//   getshow()
// },[id])
//    return <div>
//      show ? (
//      <div className='px-6 md:px-16 lg:px-40 pt-30 md:pt-50'>
//       <div className='flex flex-col md:flex-row gap-8 max-w-6xl mx-auto'>
//          <img src={show.movie.poster_path} alt="" className='max-md:mx-auto rounded-xl h-104 max-w-70 object-cover'/>

//          <div className='relative flex flex-col gap-3'>
//            <BlurCicle top="-100px" left="-100px"/>
//            <p className='text-primary'>ENGLISH</p>
//            <h1 className='text-4xl font-semibold max-w-96 text-balance'>{show.movie.title}</h1>
//            <div className='flex items-center gap-2 text-gray-300'>
//              <StarsIcon className='w-5 h-5 text-primary fill-primary'/>
//              {show.movie.vote_average.toFixed(1)} User Rating

//            </div>
//            <p className='text-gray-400 mt-2 text-sm leading-tight max-w-xl'>{show.movie.overview}</p>

//            <p>
//              {timeFormat(show.movie.runtime)}.{show.movie.genres.map(genre =>genre.name).join(", ")}.{show.movie.release_date.split("-")[0]}
//            </p>
//         </div>
//        </div>
        
//      </div>
//    ) : (
//      <div>
//        Loading...
//      </div>
//    )
//    </div>
// }

// export default MovieDetails











































import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dummyDateTimeData, dummyShowsData } from "../assets/assets";
import BlurCicle from "../components/BlurCicle";
import { Heart, PlayCircleIcon, StarIcon } from "lucide-react";
import timeFormat from "../lib/timeFormat";
import DateSelect from "../components/DateSelect";
import MovieCard from '../components/MovieCard'
import Loading from "../components/Loading";

const MovieDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [show, setShow] = useState(null);

  const getShow = () => {
    const foundShow = dummyShowsData.find((show) => show._id === id);
    if (foundShow) {
      setShow({
        movie: foundShow,
        dateTime: dummyDateTimeData,
      });
    } else {
      console.warn("Movie not found for id:", id);
    }
  };

  useEffect(() => {
    getShow();
  }, [id]);

  return show ? (
    <div className="px-6 md:px-16 lg:px-40 pt-30 md:pt-50">
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        <img
          src={show.movie.poster_path || show.movie.backdrop_path}
          alt={show.movie.title}
          className="max-md:mx-auto rounded-xl h-104 max-w-70 object-cover"
        />

        <div className="relative flex flex-col gap-3">
          <BlurCicle top="-100px" left="-100px" />
          <p className="text-primary">ENGLISH</p>
          <h1 className="text-4xl font-semibold max-w-96 text-balance">
            {show.movie.title}
          </h1>

          <div className="flex items-center gap-2 text-gray-300">
            <StarIcon className="w-5 h-5 text-primary fill-primary" />
            {show.movie.vote_average.toFixed(1)} User Rating
          </div>

          {show.movie.overview && (
            <p className="text-gray-400 mt-2 text-sm leading-tight max-w-xl">
              {show.movie.overview}
            </p>
          )}

          <p>
            {timeFormat(show.movie.runtime)} •{" "}
            {show.movie.genre.map((g) => g.name).join(", ")} •{" "}
            {show.movie.release_date.split("-")[0]}
          </p>

          <div className='flex items-center flex-wrap gap-4 mt-4'>
            <button className='flex items-center gap-2 px-7 py-3 text-sm bg-gray-800 hover:bg-gray-900 transition rounded-md font-medium cursor-pointer active:scale-95'>
              <PlayCircleIcon className={`w-5 h-5`}/>
              Watch Trailer</button>
            <a href="#dateSelect" className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer active:scale-95'>Buy Ticket</a>
            <button  className='bg-gray-700 p-2.5 rounded-full transition cursor-pointer active:scale-95'>
              <Heart className={`w-5 h-5`}/>
            </button>
          </div>

        </div>
      </div>

      <p className="text-lg font-medium mt-20">Your Favorite Cast</p>
      <div className='overflow-x-auto no-scrollbar mt-8 pb-4'>
        <div className="flex items-center gap-4 w-max px-4">
          {show.movie.casts.slice(0,12).map((cast, index)=> (
            <div key={index} className="flex flex-col items-center text-center">
              <img src={cast.profile_path} alt="" className="rounded-full h-20 md:h-20 aspect-square object-cover"/>
              <p className="font-mediom text-xs mt-3">{cast.name}</p>

            </div>
          ))}

        </div>

      </div>
      <DateSelect dateTime={show.dateTime} id={id}/>

      <p className='text-lg font-medium mt-20 mb-8'>You May Also Like</p>
      <div className='flex flex-wrap max-sm:justify-center gap-8'>
        {dummyShowsData.slice(0,4).map((movie, index)=> (
          <MovieCard key={index} movie={movie}/>
        ))}
      </div>
      <div className='flex justify-center mt-20'>
        <button onClick={()=> {navigate('/movies'); scrollTo(0,0)}} className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer'>Show More</button>

      </div>


    </div>
  ) : (
    <Loading />
  );
};

export default MovieDetails;





// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { dummyShowsData } from "../assets/assets"; // removed dummyDateTimeData
// import BlurCicle from "../components/BlurCicle";
// import { StarsIcon } from "lucide-react";
// import timeFormat from "../lib/timeFormat";

// const MovieDetails = () => {
//   const { id } = useParams();
//   const [show, setShow] = useState(null);

//   useEffect(() => {
//     const foundShow = dummyShowsData.find((s) => s._id === id);
//     if (foundShow) {
//       setShow(foundShow);
//     } else {
//       console.warn("Movie not found for id:", id);
//     }
//   }, [id]);

//   if (!show) {
//     return <div className="text-center text-gray-400 py-20">Loading...</div>;
//   }

//   return (
//     <div className="px-6 md:px-16 lg:px-40 pt-30 md:pt-50">
//       <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
//         {/* Poster */}
//         <img
//           src={show.poster_path || show.backdrop_path}
//           alt={show.title}
//           className="max-md:mx-auto rounded-xl h-104 max-w-70 object-cover"
//         />

//         {/* Details */}
//         <div className="relative flex flex-col gap-3">
//           <BlurCicle top="-100px" left="-100px" />
//           <p className="text-primary">ENGLISH</p>
//           <h1 className="text-4xl font-semibold max-w-96 text-balance">
//             {show.title}
//           </h1>

//           {/* Rating */}
//           <div className="flex items-center gap-2 text-gray-300">
//             <StarsIcon className="w-5 h-5 text-primary fill-primary" />
//             {show.vote_average
//               ? `${show.vote_average.toFixed(1)} User Rating`
//               : "No Ratings"}
//           </div>

//           {/* Overview */}
//           {show.overview && (
//             <p className="text-gray-400 mt-2 text-sm leading-tight max-w-xl">
//               {show.overview}
//             </p>
//           )}

//           {/* Extra info */}
//           <p className="text-gray-300">
//             {timeFormat(show.runtime)} •{" "}
//             {show.genre?.map((g) => g.name).join(", ")} •{" "}
//           {show.release_date ? show.release_date.split("-")[0] : "N/A"}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieDetails;



// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { dummyShowsData } from "../assets/assets";
// import { StarsIcon, Clock, CalendarDays } from "lucide-react";
// import BlurCicle from "../components/BlurCicle";
// import timeFormat from "../lib/timeFormat";

// const MovieDetails = () => {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     // find movie by id (string compare because useParams returns string)
//     const foundMovie = dummyShowsData.find((m) => m._id === id);
//     setMovie(foundMovie || null);
//   }, [id]);

//   if (!movie) {
//     return <div className="text-center text-lg py-10">Loading...</div>;
//   }

//   return (
//     <div className="px-6 md:px-16 lg:px-40 pt-10">
//       <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
//         {/* Poster */}
//         <img
//           src={movie.poster_path || movie.backdrop_path}
//           alt={movie.title}
//           className="max-md:mx-auto rounded-2xl h-[420px] w-[280px] object-cover shadow-lg"
//         />

//         {/* Details */}
//         <div className="relative flex flex-col gap-4">
//           <BlurCicle top="-100px" left="-100px" />
//           <p className="text-primary uppercase tracking-wide">English</p>

//           {/* Title */}
//           <h1 className="text-4xl font-bold text-balance">{movie.title}</h1>

//           {/* Rating */}
//           <div className="flex items-center gap-2 text-gray-300">
//             <StarsIcon className="w-5 h-5 text-yellow-400 fill-yellow-400" />
//             {movie.vote_average
//               ? `${movie.vote_average.toFixed(1)} / 10 User Rating`
//               : "No Rating"}
//           </div>

//           {/* Overview */}
//           {movie.overview && (
//             <p className="text-gray-400 mt-2 text-sm leading-relaxed max-w-xl">
//               {movie.overview}
//             </p>
//           )}

//           {/* Runtime, Genre, Release Date */}
//           <div className="flex flex-wrap gap-4 text-sm text-gray-300 mt-4">
//             <div className="flex items-center gap-1">
//               <Clock className="w-4 h-4" />
//               {movie.runtime ? timeFormat(movie.runtime) : "N/A"}
//             </div>
//             <div>
//               {movie.genre?.map((g) => g.name).join(", ")}
//             </div>
//             <div className="flex items-center gap-1">
//               <CalendarDays className="w-4 h-4" />
//               {movie.release_date?.split("-")[0]}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieDetails;



// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { dummyShowsData } from "../assets/assets";

// const MovieDetails = () => {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     console.log("ID from URL:", id); // ✅ Debug log
//     const foundMovie = dummyShowsData.find((m) => m._id === id);
//     console.log("Found movie:", foundMovie); // ✅ Debug log
//     setMovie(foundMovie || null);
//   }, [id]);

//   if (!movie) {
//     return <div className="text-center text-lg py-10">Movie not found...</div>;
//   }

//   return (
//     <div className="px-6 md:px-16 lg:px-40 pt-10">
//       <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
//         {/* Poster */}
//         <img
//           src={movie.poster_path || movie.backdrop_path}
//           alt={movie.title}
//           className="max-md:mx-auto rounded-2xl h-[420px] w-[280px] object-cover shadow-lg"
//         />

//         {/* Details */}
//         <div className="flex flex-col gap-4">
//           <h1 className="text-4xl font-bold">{movie.title}</h1>
//           <p className="text-gray-400">{movie.overview}</p>

//           <p className="text-gray-300">
//             <strong>Rating:</strong> {movie.vote_average}/10
//           </p>
//           <p className="text-gray-300">
//             <strong>Runtime:</strong> {movie.runtime} mins
//           </p>
//           <p className="text-gray-300">
//             <strong>Genres:</strong> {movie.genre.map((g) => g.name).join(", ")}
//           </p>
//           <p className="text-gray-300">
//             <strong>Release:</strong> {movie.release_date}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieDetails;
