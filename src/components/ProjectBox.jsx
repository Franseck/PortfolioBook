import React from "react";

const ProjectBox = ({ ProjectData }) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 mt-10">
        {ProjectData.map((project, index) => {
          return (
            <div key={index} className="h-[160px] rounded-xl">
              <img
                src={project.image}
                alt=""
                className="w-full h-full object-cover rounded-xl"
              />
              {/* details section */}
              <div className="pt-3">
                <h1 className="text-2xl font-semibold">{project.name}</h1>
                <p className="line-clamp-2 text-gray-500">
                  {project.description}
                </p>
                < div className="mt-4 font-special">
    <a   href={project.previewLink}
                  target="_blank" >
      <button className="relative border hover:border-gray-600 duration-500 group cursor-pointer text-gray-50  overflow-hidden h-12 w-52 rounded-xl bg-gray-800 p-2 flex justify-center items-center font-extrabold">
  <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-gray-900 delay-150 group-hover:delay-75"></div>
  <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-gray-800 delay-150 group-hover:delay-100"></div>
  <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-gray-700 delay-150 group-hover:delay-150"></div>
  <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-gray-600 delay-150 group-hover:delay-200"></div>
  <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-gray-500 delay-150 group-hover:delay-300"></div>
  <p className="z-10">View Project</p>
</button>
      </a>
         </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectBox;