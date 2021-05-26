export const Directions = () => {
  return (
    <section className="min-h-screen p-6 bg-coolGray-100 text-coolGray-800">
      <div className="container mx-auto">
        <span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase text-violet-600">
          How it works
        </span>
        <h2 className="text-5xl font-bold text-center text-coolGray-900">
          Using IdeaLoader is simple
        </h2>
        <div className="grid gap-6 my-16 lg:grid-cols-3">
          <div className="flex flex-col p-8 space-y-4 rounded-md bg-coolGray-50">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-600 text-coolGray-50">
              1
            </div>
            <p className="text-2xl font-semibold">
              <b>Random Word.</b> Generate random words to get an idea in
              motion.
            </p>
          </div>
          <div className="flex flex-col p-8 space-y-4 rounded-md bg-coolGray-50">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-600 text-coolGray-50">
              2
            </div>
            <p className="text-2xl font-semibold">
              <b>Map.</b> Drag and drop words into idea board.
            </p>
          </div>
          <div className="flex flex-col p-8 space-y-4 rounded-md bg-coolGray-50">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-600 text-coolGray-50">
              3
            </div>
            <p className="text-2xl font-semibold">
              <b>Edit and Note.</b> Edit your ideas and make notes to come back
              too.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
