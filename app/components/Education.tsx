const educationItems = [
  {
    institution: "University of the West of Scotland",
    degree: "Bachelor of Science",
    fieldOfStudy: "Computer Science",
    years: "2021 - 2023",
  },
  {
    institution: "New College Lanarkshire",
    degree: "HND",
    fieldOfStudy: "Computer Software Development",
    years: "2019 - 2021",
  },
];

export function Education() {
  return (
    <div className="max-w-4xl mx-auto pt-15 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <div className="relative object-cover">
        <img src={"purple.png"} alt="Banner" className="w-full max-h-40 rounded-lg"/>
      </div>
      <div className="col-span-2">
        <h1 className="text-3xl text-white px-4 italic font-bold">Hi! I'm Laura</h1>
        <p className="text-lg text-white p-4">Recent Computer Science graduate based in UK. Currently working on personal projects
          and looking to join a team as a junior web developer!</p>
      </div>
      {/* <ul>
        {educationItems.map((item, index) => (
          <li key={index} className="mb-4">
            <div className="text-lg font-medium text-white">{item.institution}</div>
            <div className="text-md text-white">
              {item.degree} in {item.fieldOfStudy}
            </div>
            <div className="text-sm text-white">{item.years}</div>
          </li>
        ))}
      </ul> */}
      
    </div>
  );
}
