type Feature = {
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    title: "Personalisowane projekty",
    description:
      "Tworzymy zabudowy dopasowane do milimetra, z dbałością o ergonomię oraz funkcjonalne przechowywanie."
  },
  {
    title: "Materiały odporne na wilgoć",
    description:
      "Stawiamy na szlachetne forniry, powierzchnie Ultra Matt oraz płyty z certyfikatem wodoodporności."
  },
  {
    title: "Szybka realizacja",
    description:
      "Standardowy czas produkcji wynosi do 6 tygodni, łącznie z transportem i profesjonalnym montażem."
  },
  {
    title: "Kompleksowa obsługa",
    description:
      "Zapewniamy pomiary, wizualizacje 3D, doradztwo w doborze armatury oraz opiekę posprzedażową."
  }
];

const FeatureGrid = () => {
  return (
    <section className="section" id="oferta">
      <div className="container">
        <h2 className="section-title">Dlaczego klienci wybierają nasze meble?</h2>
        <p className="section-subtitle">
          Od ponad 15 lat realizujemy projekty łazienek dla klientów indywidualnych,
          architektów oraz deweloperów. Każdy projekt tworzymy ręcznie w naszej
          stolarni pod Warszawą.
        </p>
        <div className="feature-grid">
          {FEATURES.map((feature) => (
            <article key={feature.title} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;

