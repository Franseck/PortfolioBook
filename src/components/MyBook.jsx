import React from 'react'
import HTMLFlipBook from 'react-pageflip'
import Page from './Page';
import Cover from '../pages/Cover';
import coverPic from "../assets/cover.png"

function MyBook(props) {
  return (
      <HTMLFlipBook width={600} height={700} showCover="true">

        <Page number={1}>
         <Cover coverImg={coverPic} title="My Portfolio"/>
        </Page>
        <Page number={2}>
          <div className="demoPage text-white text-3xl">Page 2</div>
        </Page>
        <Page number={3}>
          <div className="demoPage text-white text-3xl">Page 3</div>
        </Page>
        <Page number={4}>
          <div className="demoPage text-white text-3xl">Page 4</div>
        </Page>
        <Page number={5}>
          <div className="demoPage text-white text-3xl">Page 5</div>
        </Page>
        <Page number={6}>
          <div className="demoPage text-white text-3xl">Page 6</div>
        </Page>
         
      </HTMLFlipBook>
  );
}

export default MyBook