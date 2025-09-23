import React from "react";
import Navbar from "../navbar/Navbar";
import ContactCard from "./ContactCard";

const Contacts = () => {
  const data = [
    {
      title: "L’équipe The MICE Experts & Sassy Events",
      content1: "Hervé : +33 6 45 24 42 20",
      content2: "Aurore : +357 99 587 503",
    },
    {
      title: "City of Dream Mediterranean (nuit du 26 septembre)",
      content1: "Adresse : Nikou Kavvadia, Limassol 3150, Chypre",
      content2: "Tél : +357 25 088888",
    },
    {
      title: "Cap St Georges hotel & resort (nuit du 27 septembre)",
      content1: "Adresse : Maniki Street 3, Peyia 8570, Chypre",
      content2: "Tél : +357 26 000000",
    },
    {
      title:
        "Parklane, a Luxury Collection Resort & Spa (nuit du 28 septembre)",
      content1: "Adresse : Giannou Kranidioti 11, Street 4534, Chypre",
      content2: "Tél : +357 25 862000",
    },
  ];
  return (
    <div>
      <Navbar text="Contacts Utiles" />
      {data.map((item, index) => (
        <ContactCard key={index} {...item} />
      ))}
    </div>
  );
};

export default Contacts;
