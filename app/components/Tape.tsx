export function Tape() {
  return (
    <div className="relative">
      <div className="relative min-h-96 max-w-3xl mx-auto px-4 "></div>

      {/* whole screen tape*/}
      {/* <div className="absolute h-[98px] w-[140rem] -left-24 flex justify-left bg-[url('/static/images/about.png')] rotate-[8deg] border-4 border-[#191919]">
      </div>

      <div className="absolute h-[98px] w-[140rem] -left-24 flex justify-left bg-[url('/static/images/about2.png')] rotate-[-8deg] border-4 border-[#191919]">
      </div> */}

      {/* mini tape (within block)*/}
      {/* <div className="absolute h-[98px] w-[160rem] left-[-740px] lg:left-[-240px] bottom-44 flex justify-left bg-[url('/static/images/about.png')] rotate-[-6deg] border-4 border-[#191919]">
      </div> */}
      <div className="absolute h-[40px] w-[160rem] left-[-740px] lg:left-[-240px] bottom-44 flex justify-left bg-[url('/static/images/tape1.png')] rotate-[6deg]">
      </div>
    </div>
  );
}
