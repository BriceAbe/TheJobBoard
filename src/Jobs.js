import Job from "./Job";

function Jobs(props) {
  return (
    <div className={props.className}>
      <Job
        className="rouge"
        title="Full Time Sales Associate - Sydney Boutique"
        contractType="CDI"
        country="Australie"
        city="Sydney"
      ></Job>
      <Job
        className="vert"
        title="Agent de Sécurité - Pantin"
        contractType="CDI"
        country="France"
        city="Pantin"
      ></Job>
      <Job
        className="jaune"
        title="Responsable d'Atelier (H/F)"
        contractType="CDD"
        country="France"
        city="Paris"
      ></Job>
      <Job
        className="bleu"
        title="Chef de Projets"
        contractType="CDD"
        country="France"
        city="Paris"
      ></Job>
      <Job
        className="rose"
        title="Développeur React.js"
        contractType="CDI"
        country="France"
        city="Paris"
      ></Job>
      <Job
        className="rouge"
        title="Sales Associate Stockholm"
        contractType="CDI"
        country="Suède"
        city="Stockholm"
      ></Job>
      <Job
        className="vert"
        title="Vendeur/se - Crans Montana"
        contractType="CDI"
        country="Suisse"
        city="Crans-Montana"
      ></Job>
      <Job
        className="jaune"
        title="CRM & Data Quality Analyst"
        contractType="CDI"
        country="USA"
        city="New York"
      ></Job>
      <Job
        className="bleu"
        title="Infirmier (H/F)"
        contractType="CDI"
        country="France"
        city="Pantin"
      ></Job>
    </div>
  );
}

export default Jobs;
