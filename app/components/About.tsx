export function About() {
    return (
      <div className="max-w-3xl mx-auto py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 items-end">
        <div className="col-span-1"></div>
        <img src={"laura.png"} alt="Photo" className="object-cover w-full h-48 right-2 rounded-lg col-span-2"/>
        <div className="col-span-4">
          <h1 className="text-3xl text-white px-4 italic font-bold">Hi! I'm Laura</h1>
          <p className="text-lg text-white p-4">Recent Computer Science graduate based in UK. Currently working on personal projects
            and looking to join a team as a junior web developer!</p>
        </div>
      </div>
    );
  }
  