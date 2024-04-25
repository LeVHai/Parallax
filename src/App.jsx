import React from 'react';
import { ParallaxProvider, Parallax, useParallax } from 'react-scroll-parallax';
import './App.css';
import SectionWithObserver from './SectionWithObserver';
import Home from './Home';
import Contact from './Contact';
import News from './News';
import PageScroll from './PageScroll ';

const App = () => {
  const sections =[{
    id:"home",
    content: <Home/>
  },{
    id:"lienhe",
    content: <Contact/>
  },{
    id:"news",
    content: <News/>
  },]
  return (
    <div>
      <PageScroll  sections={sections}></PageScroll>
    {/* <SectionWithObserver id="home" content={<Home/>}  />
    <SectionWithObserver id="lienhe" content={<Contact/>}  />
    <SectionWithObserver id="tintuc" content={<News/>} /> */}
  </div>
  );
};

export default App;