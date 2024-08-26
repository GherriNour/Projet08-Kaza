import React from "react";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import imgHomeBanner from "../../assets/images/banner/homeBanner.png";
import { Link } from "react-router-dom";
import logements from "../../datas/logement.json";
import Card from "../../components/cards/Card";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <Banner texte="Chez vous, partout et ailleurs" image={imgHomeBanner} />
        <div className="home_gallery">
      {logements.map((logement) => {
        return (
          <article key={logement.id}>
            <Link to={`/logement/${logement.id}`}>
              <Card image={logement.cover} title={logement.title} />
            </Link>
          </article>
        );
      })}
    </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
