import ideaLoaderImg from "../../imgs/idea-loader-Header-icon.png";

export const Hero = () => {
	return (
		<div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
			<div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
				<svg
					className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
					viewBox="0 0 100 100"
					fill="currentColor"
					preserveAspectRatio="none slice"
				>
					<path d="M50 0H100L50 100H0L50 0Z" />
				</svg>
				<img
					className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
					src="https://images.unsplash.com/photo-1594377157609-5c996118ac7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
					alt=""
				/>
			</div>
			<div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
				<div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
					<img src={ideaLoaderImg} alt="IdeaLoader"></img>
					{/* <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Idealoader
          </p> */}
					<h2 className="pt-8 mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
						Imagine <br className="hidden md:block" />
						the possiblities{" "}
						<span className="inline-block text-deep-purple-accent-400"></span>
					</h2>
					<p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
						IdeaLoader helps you start with a fresh clean concept. We get the ball
						rolling for you.
					</p>
					<div className="flex items-center">
						<a
							href="/"
							className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-gray-800 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
						>
							Start New Idea
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
