import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/HomeComponent';
import Splash from '../pages/splash/Splash';
import Education from '../pages/education/EducationComponent';
import Experience from '../pages/experience/Experience';
import Contact from '../pages/contact/ContactComponent';
import Projects from '../pages/projects/Projects';
import { settings } from '../portfolio.js';

export default function Main({ theme, setTheme }) {
  if (settings.isSplash) {
    return (
      <div>
        <Routes>
          <Route
            path='/'
            exact
            element={<Splash theme={theme} setTheme={setTheme} />}
          />
          <Route
            path='/home'
            element={<Home theme={theme} setTheme={setTheme} />}
          />
          {/* <Route */}
          {/*   path='/experience' */}
          {/*   exact */}
          {/*   element={<Experience theme={theme} setTheme={setTheme} />} */}
          {/* /> */}
          {/* <Route */}
          {/*   path='/education' */}
          {/*   element={<Education theme={theme} setTheme={setTheme} />} */}
          {/* /> */}
          <Route
            path='/contact'
            element={<Contact theme={theme} setTheme={setTheme} />}
          />
          <Route
            path='/splash'
            element={<Splash theme={theme} setTheme={setTheme} />}
          />
          {/* <Route */}
          {/*   path='/projects' */}
          {/*   element={<Projects theme={theme} setTheme={setTheme} />} */}
          {/* /> */}
        </Routes>
      </div>
    );
  } else {
    return (
      <div>
        <Routes>
          <Route
            path='/'
            exact
            element={<Home theme={theme} setTheme={setTheme} />}
          />
          <Route
            path='/home'
            element={<Home theme={theme} setTheme={setTheme} />}
          />
          {/* <Route */}
          {/*   path='/experience' */}
          {/*   exact */}
          {/*   element={<Experience theme={theme} setTheme={setTheme} />} */}
          {/* /> */}
          {/* <Route */}
          {/*   path='/education' */}
          {/*   element={<Education theme={theme} setTheme={setTheme} />} */}
          {/* /> */}
          <Route
            path='/contact'
            element={<Contact theme={theme} setTheme={setTheme} />}
          />
          {/* <Route */}
          {/*   path='/projects' */}
          {/*   element={<Projects theme={theme} setTheme={setTheme} />} */}
          {/* /> */}
        </Routes>
      </div>
    );
  }
}
