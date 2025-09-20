// import React, { useState } from 'react'
// import { dummyTrailers } from '../assets/assets'
// import ReactPlayer from 'react-player'
// import BlurCicle from './BlurCicle'

// const TrailersSection = () => {

//     const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0])
//   return (
//     <div className="mx-auto max-w-full" width="960px" height="540px">
//         <p className='text-gray-300 font-medium text-lg max-w-[960px] mx-auto'>Trailers</p>


//         {/* <div className='relative mt-6'>
//             <BlurCicle top='-100px' right='-100px'/>
//             <ReactPlayer url={currentTrailer.videoUrl} controls={false} className="mx-auto max-w-full" width="960px" height="540px" playing={true}/>
//         </div> */}

//         <div>
//             <BlurCicle top='-100px' right='-100px'/>
//             <ReactPlayer
//               url="https://www.youtube.com/embed/YoHD9XEInc0?si=k6Po8SbgaEOZoYGA"
//               controls={true}
//               playing={false}
//               muted={true}
//               width="960px"
//               height="540px"
//               className="mx-auto"

//               />

//         </div>

//     </div>
//   )
// }

// export default TrailersSection





// import React, { useState } from "react";
// import { dummyTrailers } from "../assets/assets";
// import ReactPlayer from "react-player";
// import BlurCicle from "./BlurCicle";

// const TrailersSection = () => {
//   const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

//   return (
//     <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
//       <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto mb-6">
//         Trailers
//       </p>

//       {/* Main Video Player */}
//       <div className="relative">
//         <BlurCicle top="-100px" right="-100px" />
//         <ReactPlayer
//           url={currentTrailer.videoUrl}
//           controls={true}
//           playing={true}
//           muted={true}  // 🔑 Needed for autoplay
//           width="960px"
//           height="540px"
//           className="mx-auto rounded-xl overflow-hidden shadow-lg"
//         />
//         <p className="text-center text-gray-400 mt-3">
//           🎬 {currentTrailer.title}
//         </p>
//       </div>

//  {/* Thumbnails */}
//       <div className="mt-10 flex justify-center gap-6 flex-wrap">
//         {dummyTrailers.map((trailer) => (
//           <div
//             key={trailer.id}
//             onClick={() => setCurrentTrailer(trailer)}
//             className={`cursor-pointer p-2 rounded-lg transition-all duration-300 ${
//               currentTrailer.id === trailer.id
//                 ? "border-2 border-red-500 scale-105"
//                 : "border border-gray-700 hover:scale-105"
//             }`}
//           >
//             <img
//               src={`https://img.youtube.com/vi/${
//                 new URL(trailer.videoUrl).searchParams.get("v")
//               }/mqdefault.jpg`}
//               alt={trailer.title}
//               className="w-40 h-24 object-cover rounded-lg"
//             />
//             <p className="text-gray-300 text-sm mt-2 text-center">
//               {trailer.title}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TrailersSection;








import React, { useState } from "react";
import { dummyTrailers } from "../assets/assets";
import BlurCicle from "./BlurCicle";

const TrailersSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  // Extract YouTube Video ID from URL
  const getYouTubeId = (url) => {
    const urlObj = new URL(url);
    return urlObj.searchParams.get("v"); // works for ?v=VIDEO_ID
  };

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
      <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto mb-6">
        Trailers
      </p>

      {/* Main Video Player */}
      <div className="relative flex flex-col items-center">
        <BlurCicle top="-100px" right="-100px" />
        <iframe
          width="960"
          height="540"
          src={`https://www.youtube.com/embed/${getYouTubeId(
            currentTrailer.videoUrl
          )}?autoplay=0&mute=1&controls=1`}
          title={currentTrailer.title}
          className="mx-auto rounded-xl overflow-hidden shadow-lg"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
        <p className="text-center text-gray-400 mt-3">
          🎬 {currentTrailer.title}
        </p>
      </div>

      {/* Thumbnails */}
      <div className="mt-10 flex justify-center gap-6 flex-wrap">
        {dummyTrailers.map((trailer) => (
          <div
            key={trailer.id}
            onClick={() => setCurrentTrailer(trailer)}
            className={`cursor-pointer p-2 rounded-lg transition-all duration-300 ${
              currentTrailer.id === trailer.id
                ? "border-2 border-red-500 scale-105"
                : "border border-gray-700 hover:scale-105"
            }`}
          >
            <img
              src={`https://img.youtube.com/vi/${getYouTubeId(
                trailer.videoUrl
              )}/mqdefault.jpg`}
              alt={trailer.title}
              className="w-40 h-24 object-cover rounded-lg"
            />
            <p className="text-gray-300 text-sm mt-2 text-center">
              {trailer.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrailersSection;
