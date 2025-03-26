import { Fragment, useRef, useEffect } from 'react';
import LazyImage from '../lazy-image';
import { ga, skeleton } from '../../utils';
import { SanitizedExternalProject } from '../../interfaces/sanitized-config';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const ExternalProjectCard = ({
  externalProjects,
  header,
  loading,
}: {
  externalProjects: SanitizedExternalProject[];
  header: string;
  loading: boolean;
  googleAnalyticId?: string;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Debugging: Log externalProjects
  useEffect(() => {
    console.log('External Projects:', externalProjects);
  }, [externalProjects]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="card compact bg-base-100 shadow bg-opacity-40 p-0.5">
          <div className="card-body p-1">
            <div className="flex items-center justify-between mb-2">
              <h5 className="card-title text-sm font-medium">
                {loading ? (
                  skeleton({ widthCls: 'w-4', heightCls: 'h-4' })
                ) : (
                  <span className="text-base-content text-xl opacity-70">{header}</span>
                )}
              </h5>
            </div>

            <div className="relative p-0">
              <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 z-10"
              >
                <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
              </button>

              {/* Scrollable Projects Container */}
              <div ref={scrollRef} className="flex overflow-x-auto space-x-4 scrollbar-hide p-[8px] ">
                {loading ? (
                  Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="min-w-[200 px] bg-gray-100 p-1 rounded-sm">
                      {skeleton({ widthCls: 'w-full', heightCls: 'h-28' })}
                    </div>
                  ))
                ) : externalProjects.length > 0 ? (
                  externalProjects.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card shadow-lg compact bg-base-100 cursor-pointer min-w-[350px]"
                    >
                      <div className="p-4">
                        {/* <h2 className="font-medium opacity-60">{item.title}</h2> */}
                        <h2 className="text-center text-base-content font-semibold  opacity-80 text-sm mt-1 mb-4">{item.title}</h2>
                        {item.imageUrl && (
                          <div className="avatar opacity-90">
                            {item.imageUrl && (
                        <div className="w-[320px] h-60 mx-auto object-cover rounded-lg border border-gray-700 shadow-md">
                          <LazyImage src={item.imageUrl} alt="thumbnail" className="w-[320px] h-40 mx-auto object-cover rounded-lg" />
                        </div>
                      )}
                          </div>
                        )}
                        <p className="mt-4 text-center text-sm opacity-70">{item.description}</p>
                      </div>
                    </a>
                  ))
                ) : (
                  <p className="mt-2 text-center text-gray-500">No projects found</p>
                )}
              </div>

              {/* Right Scroll Button */}
              <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 z-10"
              >
                <ChevronRightIcon className="h-6 w-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ExternalProjectCard;

// import { Fragment } from 'react';
// import LazyImage from '../lazy-image';
// import { ga, skeleton } from '../../utils';
// import { SanitizedExternalProject } from '../../interfaces/sanitized-config';

// const ExternalProjectCard = ({
//   externalProjects,
//   header,
//   loading,
//   googleAnalyticId,
// }: {
//   externalProjects: SanitizedExternalProject[];
//   header: string;  
//   loading: boolean;
//   googleAnalyticId?: string;
// }) => {
//   const renderSkeleton = () => {
//     const array = [];
//     for (let index = 0; index < externalProjects.length; index++) {
//       array.push(
//         <div className="card shadow-lg compact bg-base-100" key={index}>
//           <div className="p-8 h-full w-full">
//             <div className="flex items-center flex-col">
//               <div className="w-full">
//                 <div className="flex items-start px-4">
//                   <div className="w-full">
//                     <h2>
//                       {skeleton({
//                         widthCls: 'w-32',
//                         heightCls: 'h-8',
//                         className: 'mb-2 mx-auto',
//                       })}
//                     </h2>
//                     <div className="avatar w-full h-full">
//                       <div className="w-24 h-24 mask mask-squircle mx-auto">
//                         {skeleton({
//                           widthCls: 'w-full',
//                           heightCls: 'h-full',
//                           shape: '',
//                         })}
//                       </div>
//                     </div>
//                     <div className="mt-2">
//                       {skeleton({
//                         widthCls: 'w-full',
//                         heightCls: 'h-4',
//                         className: 'mx-auto',
//                       })}
//                     </div>
//                     <div className="mt-2 flex items-center flex-wrap justify-center">
//                       {skeleton({
//                         widthCls: 'w-full',
//                         heightCls: 'h-4',
//                         className: 'mx-auto',
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

//   const renderExternalProjects = () => {
//     return externalProjects.map((item, index) => (
//       <a
//         className="card shadow-lg compact bg-base-100 cursor-pointer"
//         key={index}
//         href={item.link}
//         onClick={(e) => {
//           e.preventDefault();

//           try {
//             if (googleAnalyticId) {
//               ga.event('Click External Project', {
//                 post: item.title,
//               });
//             }
//           } catch (error) {
//             console.error(error);
//           }

//           window?.open(item.link, '_blank');
//         }}
//       >
//         <div className="p-8 h-full w-full">
//           <div className="flex items-center flex-col">
//             <div className="w-full">
//               <div className="px-4">
//                 <div className="text-center w-full">
//                   <h2 className="font-medium text-center opacity-60 mb-2">
//                     {item.title}
//                   </h2>
//                   {item.imageUrl && (
//                     <div className="avatar opacity-90">
//                       <div className="w-24 h-24 mask mask-squircle">
//                         <LazyImage
//                           src={item.imageUrl}
//                           alt={'thumbnail'}
//                           placeholder={skeleton({
//                             widthCls: 'w-full',
//                             heightCls: 'h-full',
//                             shape: '',
//                           })}
//                         />
//                       </div>
//                     </div>
//                   )}
//                   <p className="mt-2 text-base-content text-opacity-60 text-sm text-justify">
//                     {item.description}
//                   </p>
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
//                         {header}
//                       </span>
//                     )}
//                   </h5>
//                 </div>
//                 <div className="col-span-2">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {loading ? renderSkeleton() : renderExternalProjects()}
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

// export default ExternalProjectCard