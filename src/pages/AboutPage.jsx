import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import Header from "../components/Header";

const AboutPage = () => {
  return (
    <div className="h-full page-shadow bg-gradient-to-r from-gray-100 to-neutral-400 p-10 font-special">
  <div>
        <div className="relative ">
          <div className="text-center text-4xl xl:text-7xl font-bold text-black/5 font-special">
            ABOUT ME
          </div>
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl md:text-3xl font-special">
            About
          </h1>
        </div>
      </div>

      <div className="mt-10 text-gray-600 text-sm flex flex-col justify-center text-center items-center">
        <p>
          With a background in Economics, over 11 years of
          experience in the Banking industry and a passion
          for creativity through Photography, I made a
          radical career transition to pursue my passion for
          coding.{" "}
        </p>
        <br />
        <p>
          After completing an intensive Bootcamp program, I
          am now focused on building my career as a
          Front-End Developer. I am also in the process of
          improving myself in the UI/UX design field.
        </p>
        <br />
        <p>
          My diverse experiences, from working in a
          fast-paced financial environment to expressing
          creativity through photography, have honed my
          ability to adapt quickly, think critically, and
          approach challenges with unseen perspective. I am
          enthusiastic about leveraging these skills in a
          Front End Developer role.
        </p>
        <br />
        <p>
          I am eager to combine my technical skills with my
          creative background to build visually appealing,
          user-friendly, and high-performance web
          applications.
        </p>
        <div className="flex space-x-4 mt-10">
          <a
            href="https://github.com/Franseck"
            target="_blank"
          >
            <AiFillGithub className="social-btn" />
          </a>
          <a
            href="https://www.instagram.com/Franseck_/"
            target="_blank"
          >
            <AiFillInstagram className="social-btn" />
          </a>
          <a
            href="https://www.linkedin.com/in/seckin-ozturk/"
            target="_blank"
          >
            <AiFillLinkedin className="social-btn" />
          </a>
        </div>

        < div className="mt-4 font-special">
    <a href="mailto:seco102@hotmail.com" className=''>
      <button className="relative border hover:border-gray-600 duration-500 group cursor-pointer text-gray-50  overflow-hidden h-12 w-52 rounded-xl bg-gray-800 p-2 flex justify-center items-center font-extrabold">
  <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-gray-900 delay-150 group-hover:delay-75"></div>
  <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-gray-800 delay-150 group-hover:delay-100"></div>
  <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-gray-700 delay-150 group-hover:delay-150"></div>
  <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-gray-600 delay-150 group-hover:delay-200"></div>
  <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-gray-500 delay-150 group-hover:delay-300"></div>
  <p className="z-10">Contact me</p>
</button>
      </a>
         </div>
      </div>
    </div>
  );
};

export default AboutPage;
