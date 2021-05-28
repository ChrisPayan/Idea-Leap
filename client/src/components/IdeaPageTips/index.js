// import { useState } from 'react';

const IdeaPageTips = ({ title, children }) => {
    // const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Inspiration
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            {/* <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="9a29985a-fc16-419b-ae53-1670f5ca4491"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#9a29985a-fc16-419b-ae53-1670f5ca4491)"
                width="52"
                height="24"
              />
            </svg> */}
            <span className="relative">Random</span>
          </span>{' '}
          pictures inspiration.
        </h2>
      </div>
      <div className="grid max-w-screen-lg gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto">
        <img
          className="object-cover w-full h-56 rounded shadow-lg"
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
        <img
          className="object-cover w-full h-56 rounded shadow-lg"
          src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
        <img
          className="object-cover w-full h-56 rounded shadow-lg"
          src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
          alt=""
        />
        <img
          className="object-cover w-full h-56 rounded shadow-lg"
          src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
      </div>
      <div className="flex items-center sm:justify-center">
        <a
          href="/"
          className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-grey-900 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
          More Pictures
        </a>
      </div>
    </div>
    );
  };

  export default IdeaPageTips;

  // <div className="border rounded shadow-sm">
  //       <button
  //         type="button"
  //         aria-label="Open item"
  //         title="Open item"
  //         className="flex items-center justify-between w-full p-4 focus:outline-none"
  //         onClick={() => setIsOpen(!isOpen)}
  //       >
  //         <p className="text-lg font-medium">{title}</p>
  //         <div className="flex items-center justify-center w-8 h-8 border rounded-full">
  //           <svg
  //             viewBox="0 0 24 24"
  //             className={`w-3 text-gray-600 transition-transform duration-200 ${
  //               isOpen ? 'transform rotate-180' : ''
  //             }`}
  //           >
  //             <polyline
  //               fill="none"
  //               stroke="currentColor"
  //               strokeWidth="2"
  //               strokeLinecap="round"
  //               strokeMiterlimit="10"
  //               points="2,7 12,17 22,7"
  //               strokeLinejoin="round"
  //             />
  //           </svg>
  //         </div>
  //       </button>
  //       {isOpen && (
  //         <div className="p-4 pt-0">
  //           <p className="text-gray-700">{children}</p>
  //         </div>
  //       )}
  //     </div>
  //   );
  // };
  
  // function IdeaPageTips(){
  //   return (
  //     <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  //       <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
  //         <div class="flex flex-col mb-16 sm:text-center">
  //           <a href="/" class="mb-6 sm:mx-auto">
  //             <div class="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
  //               <svg
  //                 class="w-10 h-10 text-deep-purple-accent-400"
  //                 stroke="currentColor"
  //                 viewBox="0 0 52 52"
  //               >
  //                 <polygon
  //                   strokeWidth="3"
  //                   strokeLinecap="round"
  //                   strokeLinejoin="round"
  //                   fill="none"
  //                   points="29 13 14 29 25 29 23 39 38 23 27 23"
  //                 />
  //               </svg>
  //             </div>
  //           </a>
  //           <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
  //             <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
  //               <span class="relative inline-block">
  //                 <svg
  //                   viewBox="0 0 52 24"
  //                   fill="currentColor"
  //                   class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
  //                 >
  //                   <defs>
  //                     <pattern
  //                       id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
  //                       x="0"
  //                       y="0"
  //                       width=".135"
  //                       height=".30"
  //                     >
  //                       <circle cx="1" cy="1" r=".7" />
  //                     </pattern>
  //                   </defs>
  //                   <rect
  //                     fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
  //                     width="52"
  //                     height="24"
  //                   />
  //                 </svg>
  //                 <span class="relative">The</span>
  //               </span>{' '}
  //               quick, brown fox jumps over a lazy dog
  //             </h2>
  //             <p class="text-base text-gray-700 md:text-lg">
  //               Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  //               accusantium doloremque rem aperiam, eaque ipsa quae.
  //             </p>
  //           </div>
  //         </div>
  //         <div class="space-y-4">
  //           <Item title="The quick, brown fox jumps over a lazy dog?">
  //             Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  //             accusantium doloremque rem aperiam, eaque ipsa quae.
  //           </Item>
  //           <Item title="The first mate and his Skipper too will do?">
  //             Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  //             accusantium doloremque rem aperiam, eaque ipsa quae.
  //           </Item>
  //           <Item title="Is the Space Pope reptilian!?">
  //             Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  //             accusantium doloremque rem aperiam, eaque ipsa quae.
  //           </Item>
  //           <Item title="How much money you got on you?">
  //             Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  //             accusantium doloremque rem aperiam, eaque ipsa quae.
  //           </Item>
  //         </div>
  //       </div>
  //     </div>
  
