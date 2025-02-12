import React from 'react'
import HTMLFlipBook from 'react-pageflip'
import Page from './Page';
import Cover from '../pages/Cover';
import coverPic from "../assets/Untitled.png"
import lastPic from "../assets/last-page.png"
import FirstPage from '../pages/FirstPage';
import SkillsPage from '../pages/SkillsPage';
import ServicesPage from '../pages/ServicesPage';
import AboutPage from '../pages/AboutPage';
import ProjectsPage from '../pages/ProjectsPage';
import coin from "../assets/coin2.png"
import rest from "../assets/rest2.png"
import recipe from "../assets/gastro.jpg"
import travel from "../assets/tra2.png"
import stock from "../assets/stock.jpg"
import LastPage from '../pages/LastPage';



const ProjectData = [
  {
    name: "Crypto Coin Tracker",
    description: "Complete Responsive website using React js and Styled Component 💅",
    image: coin,
    previewLink: "https://seckin-cryptoapp.vercel.app/",
  },
  {
    name: "Restaurant Website",
    description: "Complete Responsive website using React js and Tailwind CSS",
    image: rest,
    previewLink: "https://seckin-restaurant.vercel.app/",
  },
];
const ProjectData2 = [
  {
    name: "Recipe Founder",
    description: "Complete Responsive website using React js and  Styled Component 💅",
    image: recipe,
    previewLink: "https://seckin-gastroapp.vercel.app/",
  },
  {
    name: "Travel Agency App",
    description: "Complete Responsive website using HTML and Bootstrap",
    image: travel,
    previewLink: "https://seckin-travel-agency.vercel.app/",
  }
];
const ProjectData3 = [
  {
    name: "Movie Founder",
    description: "Complete Responsive website using React js Firebase, TailwindCss",
    image: "",
    previewLink: "https://seckin-movie.vercel.app/login",
  },
  {
    name: "Stock App",
    description: "Complete Responsive website using Material UI, Formik & Yup, MUI X-Data Grid , Redux Tool Kit, React Tremor, Axios,",
    image: stock,
    previewLink: "https://seckin-stockapp.vercel.app/",
  }];
const ProjectData4 = [
  {
    name: "Recipe Founder",
    description: "Complete Responsive website using React js and  Styled Component 💅",
    image: recipe,
    previewLink: "https://seckin-gastroapp.vercel.app/",
  },
  {
    name: "Travel Agency App",
    description: "Complete Responsive website using HTML and Bootstrap",
    image: travel,
    previewLink: "https://seckin-travel-agency.vercel.app/",
  },
];


function MyBook(props) {
  return (
      <HTMLFlipBook width={600} height={700} showCover="true">

        <Page number={1}>
         <Cover coverImg={coverPic} />
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
        <Page number={8}>
      <ProjectsPage ProjectData={ProjectData3}/>
        </Page>
        <Page number={9}>
      <ProjectsPage ProjectData={ProjectData4}/>
        </Page>
         <Page number={10}>
      <Cover coverImg={lastPic} title="Thanks"/>
        </Page>
         
      </HTMLFlipBook>
  );
}

export default MyBook