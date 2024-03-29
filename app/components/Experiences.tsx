interface IExperience {
  title: string;
  backgroundImageUrl: string;
  URL: string;
}

type ExperiencesType = IExperience[];

const experiences:ExperiencesType = [
  {
    title: "Portfolio Website",
    backgroundImageUrl: "purple.png",
    URL: "https://github.com/zuikeviciute",
  },
  {
    title: "Website with DB",
    backgroundImageUrl: "purple.png",
    URL: "https://github.com/zuikeviciute",
  },
  {
    title: "3D Unity Game Prototype",
    backgroundImageUrl: "purple.png",
    URL: "https://github.com/zuikeviciute",
  },
];

export function Experiences() {
  return (
    <div className="px-8 pb-10">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {experiences.map((experience, index) => (
          <a key={index} href={experience.URL}>
            <div className="relative shadow-md hover:outline hover:outline-8 hover:outline-offset-0 outline-[#6F569E] rounded-lg">
              <img src={experience.backgroundImageUrl} alt="Banner" className="w-full max-h-40 object-cover rounded-lg"/>
              <h3 className="absolute left-7 bottom-1 text-white text-xl font-semibold mb-2">{experience.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
