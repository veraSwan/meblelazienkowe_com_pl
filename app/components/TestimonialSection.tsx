type Testimonial = {
  content: string;
  author: string;
  position: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    content:
      "Zespół przygotował dla nas kompleksową zabudowę dwóch łazienek. Każdy detal został dopracowany, a montaż przebiegł bez najmniejszych problemów.",
    author: "Anna i Marek, Warszawa",
    position: "Właściciele mieszkania w kamienicy"
  },
  {
    content:
      "Realizacja dla naszego showroomu przekroczyła oczekiwania. Klienci codziennie chwalą jakość wykończenia i funkcjonalność ekspozycji.",
    author: "Marta, Studio Projektowe Dot Design",
    position: "Architekt prowadząca"
  }
];

const TestimonialSection = () => {
  return (
    <section className="section" id="opinie">
      <div className="container">
        <h2 className="section-title">Opinie klientów</h2>
        <p className="section-subtitle">
          Nasze meble montowane są w apartamentach, domach jednorodzinnych oraz
          przestrzeniach komercyjnych w całej Polsce.
        </p>
        <div className="testimonials">
          {TESTIMONIALS.map((testimonial) => (
            <blockquote key={testimonial.author} className="testimonial-card">
              “{testimonial.content}”
              <footer className="testimonial-author">
                <div>
                  <strong>{testimonial.author}</strong>
                  <small>{testimonial.position}</small>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

