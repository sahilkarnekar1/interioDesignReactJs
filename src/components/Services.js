import React from 'react';

const Services = () => {
  const servicesData = [
    {
      icon: "fas fa-palette",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex unde assumenda odio sint voluptatibus sed, quae deserunt fugit voluptates nisi!",
    },
    {
      icon: "fas fa-couch",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex unde assumenda odio sint voluptatibus sed, quae deserunt fugit voluptates nisi!",
    },
    {
      icon: "fas fa-tools",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex unde assumenda odio sint voluptatibus sed, quae deserunt fugit voluptates nisi!",
    },
    {
      icon: "fas fa-house-user",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex unde assumenda odio sint voluptatibus sed, quae deserunt fugit voluptates nisi!",
    },
    {
      icon: "fas fa-bath",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex unde assumenda odio sint voluptatibus sed, quae deserunt fugit voluptates nisi!",
    },
    {
      icon: "fas fa-bed",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex unde assumenda odio sint voluptatibus sed, quae deserunt fugit voluptates nisi!",
    },
  ];

  return (
    <>
      <section id="service" className="service">
        <h1 className="heading">our services</h1>
        <div className="box-container mx-auto">
          {servicesData.map((service, index) => (
            <div key={index} className="box">
              <div className={service.icon} />
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
