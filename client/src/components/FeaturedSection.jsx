import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import BlurCicle from './BlurCicle'
import MovieCard from './MovieCard'
import { useAppContext } from '../context/AppContext'

const FeaturedSection = () => {
    const navigate = useNavigate()
    const {shows, loading  } = useAppContext()

    if (loading) {
  return (
    <div className="text-gray-400 text-center py-10">
      Loading movies...
    </div>
  );
}


    const movies = Array.isArray(shows) ? shows : shows ? [shows] : [];
  return (
    
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden'>
        <div className='relative flex items-center justify-between pt-20 pb-10'>
            <BlurCicle top='0' right='-80' />
            <p className='text-gray-300 font-medium text-lg'>Now Showing</p>
            <button onClick={()=> navigate('/movies')} className='group flex items-center gap-2 text-sm text-gray-300 cursor-pointer'>View All 
                <ArrowRight className='group-hover:translate-x-0.5 transition w-4.5 h-4.5'/></button>
        </div>

         <div className='flex flex-wrap max-sm:justify-center gap-8 mt-8'>
            {movies.slice(0, 4).map((show)=>(
                <MovieCard  key={show._id} movie={show} />
            ))} 
        </div> 

        <div className='flex justify-center mt-20'>
            <button onClick={()=> {navigate('/movies'); scrollTo(0,0)}}
            className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer'>show More</button>
        </div>

    </div>
  )
}
export default FeaturedSection


// import React, { useEffect, useState } from "react";
// import { useAppContext } from "../context/AppContext";
// import Loading from '../components/Loading';
// // import Title from "../admin/Title";
// import { dateFormat } from "../lib/dateFormat";
// import MovieCard from "./MovieCard";

// const FeaturedSection = () => {
//   const { shows, loading } = useAppContext();
//   const [nowPlaying, setNowPlaying] = useState([]);

//   useEffect(() => {
//     if (shows && shows.length > 0) {
//       const today = new Date();

//       // 🔹 Some APIs use releaseDate instead of release_date — handle both
//       const activeShows = shows.filter((show) => {
//         const releaseDate =
//           new Date(show.release_date || show.releaseDate || show.date);
//         return releaseDate <= today;
//       });

//       // Sort newest first
//       const sortedShows = activeShows.sort(
//         (a, b) =>
//           new Date(b.release_date || b.releaseDate) -
//           new Date(a.release_date || a.releaseDate)
//       );

//       setNowPlaying(sortedShows);
//     }
//   }, [shows]);

//   if (loading) return <Loading />;

//   return (
//     <div className="featured-section my-10 px-4 md:px-8">
//       {/* <Title title="🎬 Now Playing Movies" /> */}
//       {nowPlaying.length === 0 ? (
//         <p className="text-gray-500 text-center mt-6">
//           No movies are currently playing.
//         </p>
//       ) : (
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
//           {nowPlaying.map((movie) => (
//             <div
//               key={movie._id || movie.id}
//               className="bg-gray-900 text-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
//               >
//               <img
//                 src={movie.image}
//                 alt={movie.title}
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold mb-1">{movie.title}</h3>
//                 <p className="text-sm text-gray-400 mb-2">
//                   Release Date: {dateFormat(movie.release_date || movie.releaseDate)}
//                 </p>
//                 <p className="text-yellow-400">⭐ {movie.rating || "N/A"}</p>
//               </div>
//             </div>

            
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FeaturedSection;
