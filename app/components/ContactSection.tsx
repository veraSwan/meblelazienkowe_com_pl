import Link from "next/link";

const ContactSection = () => {
  return (
    <section className="section" id="kontakt">
      <div className="container" style={{ textAlign: "center" }}>
        <div className="cta">
          <h2>Zaproś nas do swojej łazienki</h2>
          <p>
            Opowiedz nam o swoim projekcie, a my przygotujemy bezpłatną wycenę i
            wizualizację. Wspólnie stworzymy łazienkę, która zachwyci domowników
            i gości.
          </p>
          <div className="cta-group" style={{ justifyContent: "center" }}>
            <Link href="tel:+48786886819" className="btn btn-secondary">
              Zadzwoń: +48 786 886 819
            </Link>
            <Link href="mailto:kontakt@meblelazienkowe.com.pl" className="btn btn-primary">
              kontakt@meblelazienkowe.com.pl
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

