import React, { useEffect, useState } from 'react';

import { aboutData, contactData, footerData, heroData, projectsData } from '../mock/data';
import PortfolioContext from './context';

const PortfolioProvider = (props) => {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioContext.Provider value={{ hero, about, projects, contact, footer }}>
      {props.children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioProvider;
