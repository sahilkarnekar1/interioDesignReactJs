import React, { useEffect, useState } from 'react';


const Home = () => {
  const [counts, setCounts] = useState({
    services: 0,
    awards: 0,
    clients: 0,
    projects: 0,
  });

  const targetCounts = {
    services: 100,
    awards: 26,
    clients: 1234,
    projects: 964,
  };

  useEffect(() => {
    const intervalTime = 50; // interval time in ms
    const totalDuration = 2000; // total duration in ms
    const steps = totalDuration / intervalTime;

    const incrementValues = {
      services: targetCounts.services / steps,
      awards: targetCounts.awards / steps,
      clients: targetCounts.clients / steps,
      projects: targetCounts.projects / steps,
    };

    const interval = setInterval(() => {
      setCounts((prevCounts) => {
        const newCounts = {
          services: Math.min(prevCounts.services + incrementValues.services, targetCounts.services),
          awards: Math.min(prevCounts.awards + incrementValues.awards, targetCounts.awards),
          clients: Math.min(prevCounts.clients + incrementValues.clients, targetCounts.clients),
          projects: Math.min(prevCounts.projects + incrementValues.projects, targetCounts.projects),
        };

        if (
          newCounts.services === targetCounts.services &&
          newCounts.awards === targetCounts.awards &&
          newCounts.clients === targetCounts.clients &&
          newCounts.projects === targetCounts.projects
        ) {
          clearInterval(interval);
        }

        return newCounts;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  });

  const itemsData = [
    {
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoVlw6fyzXzUly7bEMylUmhAMKwF-Ypxi6PBZhGyDRD8CHkhm4j1LGDpmgam85r-Mq5fM&usqp=CAU",
      description: "Item 1  with description",
      price: "$2,004",
    },
    {
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoVlw6fyzXzUly7bEMylUmhAMKwF-Ypxi6PBZhGyDRD8CHkhm4j1LGDpmgam85r-Mq5fM&usqp=CAU",
      description: "Item 2 with description",
      price: "$3,004",
    },
    {
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPBUlJeTHNEh3vZcyn9tla2k81GFOV9zbj-A&s",
      description: "Item 3 with description",
      price: "$3,674",
    },
    {
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQHBTStxPkNMlT88qxCXwVCNiNkCObmPydU8fxOnwiyAgQA6fK6W8T5VSIIsd_VuFAJOo&usqp=CAU",
      description: "Item 4 with description",
      price: "$3,594",
    },
  ];

  return (
    <>
      <section id="home" className="home container-fluid p-0">
        <div className="row hero">
          <div className="col pl-3 ml-sm-5 p-0">
            <h1 className="text1">Home Makers</h1>
            <h3 className="text2">Interior services</h3>
          </div>
        </div>
        <div className="counting">
          <div className="box">
            <h1 className="count">{Math.floor(counts.services)}+</h1>
            <h3>Services</h3>
          </div>
          <div className="box">
            <h1 className="count">{Math.floor(counts.awards)}+</h1>
            <h3>awards</h3>
          </div>
          <div className="box">
            <h1 className="count">{Math.floor(counts.clients)}+</h1>
            <h3>clients</h3>
          </div>
          <div className="box">
            <h1 className="count">{Math.floor(counts.projects)}+</h1>
            <h3>projects</h3>
          </div>
        </div>
      </section>

      <div className="itemsSection">
        {itemsData.map((item, index) => (
          <div key={index} className='listItems'>
            <img src={item.imgSrc} alt='img' />
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
