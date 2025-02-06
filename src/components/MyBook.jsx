import React from 'react'
import HTMLFlipBook from 'react-pageflip'
import Page from './Page';
import Cover from '../pages/Cover';
import coverPic from "../assets/cover.png"
import FirstPage from '../pages/FirstPage';
import SkillsPage from '../pages/SkillsPage';
import ServicesPage from '../pages/ServicesPage';
import AboutPage from '../pages/AboutPage';

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
          <div className="demoPage text-white text-3xl">Page 6</div>
        </Page>
         
      </HTMLFlipBook>
  );
}

export default MyBook