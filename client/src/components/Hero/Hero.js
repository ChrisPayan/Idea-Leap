export const Hero = () => {
  return (
    <section class="bg-coolGray-100 text-coolGray-800">
      <div class="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 class="text-4xl font-bold leading-none sm:text-5xl">IdeaLoader</h1>
        <p class="px-8 mt-8 mb-12 text-lg">
          Having trouble starting an idea? Click start, we can help.
        </p>
        <div class="flex flex-wrap justify-center">
          <button class="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-600 text-coolGray-50">
            Start Idea
          </button>
          <button class="px-8 py-3 m-2 text-lg border rounded text-coolGray-900 border-coolGray-300">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};
