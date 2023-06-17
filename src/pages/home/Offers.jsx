import React from "react";
import "./Offers.scss";
import { Card } from "antd";

const Offers = () => {
  return (
    <section className="offers">
      <h2>What We Offer</h2>
      <div className="cards-container">
        <Card title="Bedspace">
          Find your affordable and vibrant community in our student-centric
          bedspace. Reserve your spot today for a budget-friendly haven where
          connections thrive. Experience the perfect blend of affordability and
          camaraderie in our welcoming student bedspace.
        </Card>
        <Card title="Studio Apartment">
          Unlock the perfect blend of comfort, affordability, and community in
          our dedicated studio apartments. Study, connect, and thrive in a
          vibrant student-friendly environment. Reserve your spot today and
          embark on an unforgettable student living experience.
        </Card>
        <Card title="Condo - Empty">
          Make an empty condominium your own at an affordable price. Design it
          to your liking while enjoying top-notch security. Create your dream
          student home today in our customizable and secure empty condominiums.
        </Card>
        <Card title="Condo - Fully Furnished">
          Simplify your living experience with our fully furnished condominium
          units. Enjoy convenience and comfort as you focus on your studies.
          Reserve your spot today and embrace hassle-free student living in our
          furnished condos.
        </Card>
      </div>
    </section>
  );
};

export default Offers;
