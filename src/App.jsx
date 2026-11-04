import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';

import Navbar from './myportfolio/Navbar';
import CoverPage from './myportfolio/CoverPage';
import ProfilePage from './myportfolio/ProfilePage';
import HobbiesPage from './myportfolio/HobbiesPage';
import SkillsPage from './myportfolio/SkillsPage';
import ProjectsPage from './myportfolio/ProjectsPage';
import EducationPage from './myportfolio/EducationPage';
import ContactPage from './myportfolio/ContactPage';
import BackCoverPage from './myportfolio/BackCoverPage';

import './App.css';

function App() {
  const bookRef = useRef(null);

  return (
    <div className="portfolio-wrapper">
      <Navbar bookRef={bookRef} />

      <div className="book-container">
        <HTMLFlipBook
          width={480}
          height={650}
          size="fixed"
          minWidth={300}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1530}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          ref={bookRef}
        >
          {/* Page Index 0 */}
          <div className="page">
            <CoverPage />
          </div>

          {/* Page Index 1 */}
          <div className="page">
            <ProfilePage />
          </div>

          {/* Page Index 2: Personal Passions / Hobbies */}
          <div className="page">
            <HobbiesPage />
          </div>

          {/* Page Index 3 */}
          <div className="page">
            <SkillsPage />
          </div>

          {/* Page Index 4: Projects */}
          <div className="page">
            <ProjectsPage />
          </div>

          {/* Page Index 5: Education */}
          <div className="page">
            <EducationPage />
          </div>

          {/* Page Index 6: Contact */}
          <div className="page">
            <ContactPage />
          </div>

          {/* Page Index 7 */}
          <div className="page">
            <BackCoverPage />
          </div>
        </HTMLFlipBook>
      </div>
    </div>
  );
}

export default App;