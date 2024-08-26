import React from "react";
import { useParams, Navigate } from "react-router-dom";
//import FicheLogementDisplay from "../../components/ficheLogement/FicheLogementDisplay";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import DataFichLogement from "../../datas/logement.json";
import Collapse from "../../components/collapse/Collapse";
import Carrousel from "../../components/carrousel/Carrousel";
import Tag from "../../components/tag/Tag";
import Rate from "../../components/rate/Rate";
import Host from "../../components/host/Host";

const FichLogment = () => {

  /* Récupère la bonne fiche */
  const { id } = useParams();
  const ficheLogement = DataFichLogement.find((logement) => logement.id === id);

  /* Tags */
  const tagsLogement = ficheLogement?.tags.map((tags, i) => {
    return <Tag key={i} nom={tags} />;
  });

  
  
  /* Équipements */
  const equipements = ficheLogement?.equipments.map((equipment, i) => {
    return (
      <ul key={i}>
        <li>{equipment}</li>
      </ul>
    );
  });

  return (
    <div className="logement">
      <Header />
      <main>
    
      {ficheLogement ? (
      <div className="fiche-container">
        {/*   Carrousel   */} 
        <Carrousel slides={ficheLogement?.pictures} />
          {/*   Détails du milieu   */} 
          <section className="Fiche-logement">
            <div className="description-info">
              <div className="description-info__titletags">
                <div className="description-info__titletags__title">
                  <span className="titre-logement">{ficheLogement?.title}</span>
                  <span className="location-logement">
                    {ficheLogement?.location}
                  </span>
                </div>
                {/* Tags */}
                <div className="tags">
                  {tagsLogement}
                </div>
              </div>

              <div className="host">
                {/* Host */}
                <div className="host__name-prop">
                  <Host
                    name={ficheLogement?.host.name}
                    picture={ficheLogement?.host.picture}
                  />
                </div>
                {/* Rate */}
                <div className="description-info__host__rate">
                  <Rate rate={ficheLogement.rating} />
                </div>
              </div>
            </div>
          </section>
          <div className="description-centent">
            <div className="description-centent__description">
              {/* Collapse  : Description*/}  
              <Collapse title="Description" content={ficheLogement?.description}/>
            </div>
            <div className="description-centent__equipement">
               {/* Collapse  : Équipements*/} 
              <Collapse title="Équipements" content={equipements} />
            </div>
          </div>
        </div>
      ) : (
        <Navigate replace to="/Error" />
      )};
    
    </main>

      <Footer />
    </div>
  );
};

export default FichLogment;
