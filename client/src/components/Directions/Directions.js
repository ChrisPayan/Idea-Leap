import thinkingImg from "../../imgs/thinking (2).png";
import problemSolveImg from "../../imgs/problem-solving (1).png";
import puzzlePiecesImg from "../../imgs/puzzle-pieces.png";

export const Directions = () => {
	return (
		<div className="relative bg-gray-900">
			<div className="absolute inset-x-0 bottom-0">
				<svg
					viewBox="0 0 224 12"
					fill="currentColor"
					className="w-full -mb-1 text-white"
					preserveAspectRatio="none"
				>
					<path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
				</svg>
			</div>
			<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
				<div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
					<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
						<div className="grid max-w-2xl mx-auto">
							<div className="flex">
								<div className="flex flex-col items-center mr-6">
									<div className="w-px h-10 opacity-0 sm:h-full" />
									<div>
										<div className="text-gray-100 flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
											1
										</div>
									</div>
									<div className="w-px h-full bg-gray-300" />
								</div>
								<div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
									<div className="sm:mr-5">
										<div className="flex items-center justify-center w-16 h-16 my-3 rounded-full sm:w-24 sm:h-24">
											<img src={thinkingImg} alt="thinkingImg"></img> 

										</div>
									</div>
									<div>
										<p className="text-gray-100 text-xl font-semibold sm:text-base">
											Trouble Starting an Idea?
										</p>
										<p className="text-gray-400 text-sm text-gray-400">
											Click on the start a new idea button and we will give you a pool of
											random words to get thing started.
										</p>
									</div>
								</div>
							</div>
							<div className="flex">
								<div className="flex flex-col items-center mr-6">
									<div className="w-px h-10 bg-gray-300 sm:h-full" />
									<div>
										<div className="text-white flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
											2
										</div>
									</div>
									<div className="w-px h-full bg-gray-300" />
								</div>
								<div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
									<div className="sm:mr-5">
										<div className="flex items-center justify-center w-16 h-16 my-3 rounded-full sm:w-24 sm:h-24">
											<img src={problemSolveImg} alt="problemSolvingImg"></img>
											{/* <svg
                  className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg> */}
										</div>
									</div>
									<div>
										<p className="text-gray-100 text-xl font-semibold sm:text-base">
											Get Things Started.
										</p>
										<p className="text-sm text-gray-400">
											Pick the words that pop out to you. These words will be grouped
											together once you have finished.
										</p>
									</div>
								</div>
							</div>
							<div className="flex">
								<div className="flex flex-col items-center mr-6">
									<div className="w-px h-10 bg-gray-300 sm:h-full" />
									<div>
										<div className="text-white flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
											3
										</div>
									</div>
									<div className="w-px h-full opacity-0" />
								</div>
								<div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
									<div className="sm:mr-5">
										<div className="flex items-center justify-center w-16 h-16 my-3 rounded-full sm:w-24 sm:h-24">
											<img src={puzzlePiecesImg} alt="puzzlePiecesImg"></img>
										</div>
									</div>
									<div>
										<p className="text-gray-100 text-xl font-semibold sm:text-base">
											Creat Your Ideas.
										</p>
										<p className="text-sm text-gray-400">
											Your pool of words will populate in the idea map. Sort and align
											items in a fashion that makes sense to you. Feel free to add your own
											words or generate more!
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
