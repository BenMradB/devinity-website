import React from "react";

const TeammateCard = ({ icon, title, position, subTitle }) => {
  return (
    <div className="flex flex-col  gap-4 min-h-[200px] w-[300px] max-w-1/3 rounded-md shadow-sm border-b md:border-l border-input hover:scale-[1.1] hover:bg-blue-900 group transition ease-in-out duration-300 p-4">
      <div className="flex items-center justify-center   ">
        <img
          src={icon}
          alt="teammate"
          className="h-44 w-44 object-cover rounded-full"
        />
      </div>
      <div className="flex flex-col gap-4 flex-1">
        <div className="w-full flex flex-col ga-2 items-center">
          <h2 className="text-2xl font-bold group-hover:text-white transition ease-in-out duration-300">
            {title}
          </h2>
          <p className="text-[14px] text-slate-500 font-semibold group-hover:text-slate-400 transition ease-in-out duration-300">
            {position}
          </p>
        </div>
        <span className="text-[13px] font-normal tracking-wider text-center  group-hover:text-white transition ease-in-out duration-300">
          {subTitle}
        </span>
      </div>
    </div>
  );
};

export default TeammateCard;
