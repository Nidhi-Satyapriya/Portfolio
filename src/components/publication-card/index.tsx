// import { Fragment } from 'react';
// import { SanitizedPublication } from '../../interfaces/sanitized-config';
// import { skeleton } from '../../utils';

// const PublicationCard = ({
//   publications,
//   loading,
// }: {
//   publications: SanitizedPublication[];
//   loading: boolean;
// }) => {
//   const renderSkeleton = () => {
//     const array = [];
//     for (let index = 0; index < publications.length; index++) {
//       array.push(
//         <div className="card shadow-lg compact bg-base-100" key={index}>
//           <div className="p-8 h-full w-full">
//             <div className="flex items-center flex-col">
//               <div className="w-full">
//                 <div className="px-4">
//                   <div className="text-center w-full">
//                     <h2 className="mb-2">
//                       {skeleton({
//                         widthCls: 'w-32',
//                         heightCls: 'h-8',
//                         className: 'mb-2 mx-auto',
//                       })}
//                     </h2>
//                     <div>
//                       {skeleton({
//                         widthCls: 'w-20',
//                         heightCls: 'h-4',
//                         className: 'mb-2 mx-auto',
//                       })}
//                     </div>
//                     <div>
//                       {skeleton({
//                         widthCls: 'w-20',
//                         heightCls: 'h-4',
//                         className: 'mb-2 mx-auto',
//                       })}
//                     </div>
//                     <div>
//                       {skeleton({
//                         widthCls: 'w-full',
//                         heightCls: 'h-4',
//                         className: 'mb-2 mx-auto',
//                       })}
//                     </div>
//                     <div>
//                       {skeleton({
//                         widthCls: 'w-full',
//                         heightCls: 'h-4',
//                         className: 'mb-2 mx-auto',
//                       })}
//                     </div>
//                     <div>
//                       {skeleton({
//                         widthCls: 'w-full',
//                         heightCls: 'h-4',
//                         className: 'mb-2 mx-auto',
//                       })}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>,
//       );
//     }

//     return array;
//   };

//   const renderPublications = () => {
//     return publications.map((item, index) => (
//       <a
//         className="card shadow-lg compact bg-base-100 cursor-pointer"
//         key={index}
//         href={item.link}
//         target="_blank"
//         rel="noreferrer"
//       >
//         <div className="p-8 h-full w-full">
//           <div className="flex items-center flex-col">
//             <div className="w-full">
//               <div className="px-4">
//                 <div className="text-center w-full">
//                   <h2 className="font-medium opacity-60 mb-2">{item.title}</h2>
//                   {item.conferenceName && (
//                     <p className="text-base-content opacity-50 text-sm">
//                       {item.conferenceName}
//                     </p>
//                   )}
//                   {item.journalName && (
//                     <p className="text-base-content opacity-50 text-sm">
//                       {item.journalName}
//                     </p>
//                   )}
//                   {item.authors && (
//                     <p className="text-base-content opacity-50 text-sm">
//                       Author: {item.authors}
//                     </p>
//                   )}
//                   {item.description && (
//                     <p className="mt-2 text-base-content text-opacity-60 text-sm text-justify">
//                       {item.description}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </a>
//     ));
//   };

//   return (
//     <Fragment>
//       <div className="col-span-1 lg:col-span-2">
//         <div className="grid grid-cols-2 gap-6">
//           <div className="col-span-2">
//             <div className="card compact bg-base-100 shadow bg-opacity-40">
//               <div className="card-body">
//                 <div className="mx-3 flex items-center justify-between mb-2">
//                   <h5 className="card-title">
//                     {loading ? (
//                       skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
//                     ) : (
//                       <span className="text-base-content opacity-70">
//                         Achievements
//                       </span>
//                     )}
//                   </h5>
//                 </div>
//                 <div className="col-span-2">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {loading ? renderSkeleton() : renderPublications()}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default PublicationCard;


// //code-2
// import { Fragment, useRef } from "react";
// import { SanitizedPublication } from "../../interfaces/sanitized-config";
// import { skeleton } from "../../utils";
// import { ChevronRight } from "lucide-react";

// const PublicationCard = ({
//   publications,
//   loading,
// }: {
//   publications: SanitizedPublication[];
//   loading: boolean;
// }) => {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   const handleScrollRight = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
//     }
//   };

//   const renderSkeleton = () => {
//     return Array.from({ length: publications.length }).map((_, index) => (
//       <div className="min-w-[350px] card shadow-lg compact bg-base-400" key={index}>
//         <div className="p-8 h-full w-full flex flex-col items-center">
//           {skeleton({ widthCls: "w-full", heightCls: "h-48", className: "mb-4" })}
//           {skeleton({ widthCls: "w-32", heightCls: "h-6", className: "mb-2" })}
//           {skeleton({ widthCls: "w-48", heightCls: "h-4", className: "mb-2" })}
//         </div>
//       </div>
//     ));
//   };

//   const renderPublications = () => {
//     return publications.map((item, index) => (
//       <a
//         className="min-w-[300px] card shadow-lg compact bg-base-100 cursor-pointer"
//         key={index}
//         href={item.link}
//         target="_blank"
//         rel="noreferrer"
//       >
//         <div className="p-6 h-full w-full flex flex-col items-center">
//           <img
//             src={item.image || "/default-placeholder.png"}
//             alt=""
//             className="w-full h-48 object-cover rounded-lg mb-4"
//           />
//           <h2 className="font-medium opacity-80 text-lg text-center mb-2">
//             {item.title}
//           </h2>
//           {item.description && (
//             <p className="text-base-content opacity-70 text-sm text-center">
//               {item.description}
//             </p>
//           )}
//         </div>
//       </a>
//     ));
//   };

//   return (
//     <Fragment>
//       <div className="relative w-full max-w-16xl mx-auto p-4">
//         <div className="card compact w-full bg-base-100 shadow bg-opacity-40">
//           <div className="card-body">
//             <div className="mx-3 flex items-center justify-between mb-2">
//               <h5 className="card-title">
//                 {loading ? skeleton({ widthCls: "w-40", heightCls: "h-8" }) : (
//                   <span className="text-base-content opacity-70">Achievements</span>
//                 )}
//               </h5>
//             </div>

            // {/* Horizontal Scrollable Container */}
            // <div className="overflow-hidden relative">
            //   <div
            //     ref={scrollRef}
            //     className="flex space-x-4 overflow-x-auto scrollbar-hide snap-x p-2"
            //   >
            //     {loading ? renderSkeleton() : renderPublications()}
            //   </div>
             

              /* Right Scroll Button */
                // <button
                //   onClick={handleScrollRight}
                //   className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md"
                // >
                //   <ChevronRight size={24} />
                // </button>


//             </div>
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default PublicationCard;


//c3
import { Fragment, useRef, useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const PublicationCard = ({ publications, loading }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        // Check scroll position
        setShowLeftButton(scrollLeft > 0);
        setShowRightButton(scrollLeft + clientWidth < scrollWidth - 10);
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      handleScroll(); // Initialize button visibility
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <Fragment>
      <div className="relative w-full max-w-9xl mx-auto p-4">
        <div className="card compact bg-base-100 shadow bg-opacity-40 relative">
          <div className="card-body">
            <div className="flex items-center justify-between mb-2">
              <h5 className="card-title text-base-content opacity-70">
                Achievements
              </h5>
            </div>

            {/* Scrollable Container */}
            <div className="overflow-hidden relative">
              {/* Left Scroll Button (Appears After Scrolling Right) */}
              {showLeftButton && (
                <button
                  onClick={handleScrollLeft}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md z-10"
                >
                  <ChevronLeft size={24} />
                </button>
              )}

              {/* Right Scroll Button (Disappears at End) */}
              {showRightButton && (
                <button
                  onClick={handleScrollRight}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md z-10"
                >
                  <ChevronRight size={24} />
                </button>
              )}

              {/* Cards Container */}
              <div
                ref={scrollRef}
                className="flex space-x-4 overflow-x-auto scrollbar-hide snap-x p-2 w-full scroll-smooth relative"
              >
                {loading ? (
                  Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="min-w-[350px] h-40 bg-gray-200 rounded-lg"></div>
                  ))
                ) : (
                  publications.map((item, index) => (
                    <a
                      className="min-w-[350px] card shadow-lg compact bg-base-100 cursor-pointer"
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="p-6 h-full w-full flex flex-col items-center">
                        <img
                          src={item.image || "/default-placeholder.png"}
                          alt=""
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h2 className="font-medium opacity-80 text-lg text-center mb-2">
                          {item.title}
                        </h2>
                        {item.description && (
                          <p className="text-base-content opacity-70 text-sm text-center">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </a>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PublicationCard;
