import React from 'react'
import HTMLFlipBook from 'react-pageflip'
import Page from './Page';
import Cover from '../pages/Cover';
import coverPic from "../assets/cover.png"
import FirstPage from '../pages/FirstPage';
import SkillsPage from '../pages/SkillsPage';
import ServicesPage from '../pages/ServicesPage';
import AboutPage from '../pages/AboutPage';
import ProjectsPage from '../pages/ProjectsPage';


const ProjectData = [
  {
    name: "Car Rental website",
    description: "Complete Responsive website using React js and Tailwind CSS",
    image: "",
    previewLink: "https://car-rental-tcj.netlify.app/",
  },
  {
    name: "Restaurant website",
    description: "Complete Responsive website using React js and Tailwind CSS",
    image: "",
    previewLink: "https://foodies-zone.netlify.app/",
  },
];
const ProjectData2 = [
  {
    name: "Ecommerce website",
    description: "Complete Responsive website using React js and Tailwind CSS",
    image: "",
    previewLink: "https://shopsy-tcj.netlify.app/",
  },
  {
    name: "Travel website",
    description: "Complete Responsive website using React js and Tailwind CSS",
    image: "",
    previewLink: "https://travel-tcj.netlify.app/",
  },
];


function MyBook(props) {
  return (
      <HTMLFlipBook width={600} height={700} showCover="true">

        <Page number={1}>
         <Cover coverImg={coverPic} title="My Portfolio"/>
        </Page>
        <Page number={2}>
         <FirstPage/>
        </Page>
        <Page number={3}>
   <SkillsPage/>
        </Page>
        <Page number={4}>
    <ServicesPage/>
        </Page>
        <Page number={5}>
    <AboutPage/>
        </Page>
        <Page number={6}>
      <ProjectsPage ProjectData={ProjectData}/>
        </Page>
        <Page number={7}>
      <ProjectsPage ProjectData={ProjectData2}/>
        </Page>
         
      </HTMLFlipBook>
  );
}

export default MyBook