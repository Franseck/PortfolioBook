import React from 'react'
import { AiFillLayout } from "react-icons/ai";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { MdSecurity } from "react-icons/md";

const ServicesData = [
    {
      name: "Web Development",
      description: "Lorem ipsum dolor sit amet.",
      icon: <AiFillLayout className="text-4xl" />,
      bgColor: "bg-gray-400",
    },
    {
      name: "UI UX Design",
      description: "Lorem ipsum dolor sit.",
      icon: <MdOutlinePhoneAndroid className="text-4xl" />,
      bgColor: "bg-gray-500",
    },
    {
      name: "Freelance Photography & Videography",
      description: "Lorem ipsum dolor sit amet.",
      icon: <HiMiniComputerDesktop className="text-4xl" />,
      bgColor: "bg-gray-600",
    },
    {
      name: "Financial Advisor",
      description: "Lorem ipsum dolor sit amet consectetur.",
      icon: <MdSecurity className="text-4xl" />,
      bgColor: "bg-gray-700",
    },
  ];
  const ServicesBox = () => {
    return (
      <div className="h-full mt-12 text-white ">
        <div className="grid grid-cols-2 gap-6">
          {ServicesData.map(({ name, description, icon, bgColor }) => (
            <div className={`p-3 ${bgColor} min-h-[180px] rounded-xl `}>
              <div className="p-3 space-y-3 ">
                {icon}
                <h1 className='font-fred text-xl'>{name}</h1>
                <p className='pt-7 font-handle'>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ServicesBox;