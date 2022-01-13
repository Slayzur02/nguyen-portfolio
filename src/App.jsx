import React from "react";
// import "./App.css";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Name from "./components/Name";
import PageBorder from "./components/PageBorder";
import Header from "./components/Header";

import ContentWrapper from "./components/ContentWrapper";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Project";
import Resume from "./components/Resume";
import Misc from "./components/Misc";

export default function App() { 
  return (
  <>
    <BrowserRouter>
      {/* <div className="font-display"> */}
        <PageBorder>
          <Name />
          <Header />
          <ContentWrapper>
            <Routes>
              <Route path="about-me" element={<AboutMe />} />
              <Route path="projects" element={<Projects />} />
              <Route path="resume" element={<Resume />} />
              <Route path="miscellaneous" element={<Misc />} />
              <Route path="*" element={<Navigate to="about-me" />} />
            </Routes>
          </ContentWrapper>
        </PageBorder>
      {/* </div> */}
    </BrowserRouter>
  </>
)
};
