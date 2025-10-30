"use client";
import Image from "next/image";

export default function ThemeLanding() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily: "system-ui, sans-serif",
        color: "#2E3944",
        background: "#F6F7F8",
        display: "flex",
        flexDirection: "column",
        flex: "1"
      }}
    >
      <div style={{ marginBottom: "24px" }}>
        <div
          style={{
            display: "inline-block",
            background: "#fff",
            padding: "6px 12px",
            borderRadius: "999px",
            border: "1px solid #E5E7EB",
            fontSize: "13px",
            color: "#2E3944"
          }}
        >
          • Nowa odsłona już wkrótce
        </div>
      </div>

      {/* Optional secondary logo below the main header logo */}
      {/* <Image src="/images/logo1.png" alt="meblelazienkowe.com.pl" width={160} height={60} style={{ marginBottom: "20px" }} /> */}

      <h1
        style={{
          fontSize: "36px",
          lineHeight: "1.1",
          fontWeight: 700,
          marginBottom: "16px"
        }}
        itemProp="name"
      >
        Wkrótce uruchomimy
        <br />
        stronę z meblami łazienkowymi <span style={{ color: "#B89A6B" }}>premium</span>
      </h1>

      <p
        style={{
          maxWidth: "600px",
          color: "#6B7280",
          marginBottom: "20px"
        }}
      >
        Z pasją projektujemy i produkujemy szafki łazienkowe na wymiar z materiałów klasy premium. Nasz zespół pracuje nad nową platformą, dzięki której łatwo zaplanujesz wymarzoną łazienkę.
      </p>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          marginBottom: "20px",
          color: "#374151"
        }}
      >
        <li style={{ marginBottom: "8px" }}>• Meble na wymiar z materiałów premium</li>
        <li style={{ marginBottom: "8px" }}>• Od projektu po montaż w całej Polsce</li>
        <li>• Gwarancja jakości i opieka posprzedażowa</li>
      </ul>

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "30px"
        }}
      >
        <a
          href="tel:+48786886819"
          style={{
            background: "#2E3944",
            color: "#fff",
            padding: "12px 18px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: 600
          }}
          itemProp="telephone"
          aria-label="Zadzwoń: 786 886 819"
        >
          Zadzwoń: 786 886 819
        </a>

        <a
          href="mailto:kontakt@meblelazienkowe.com.pl"
          style={{
            background: "#fff",
            color: "#2E3944",
            padding: "12px 18px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: 600,
            border: "1px solid #D1D5DB"
          }}
          itemProp="email"
          aria-label="Email: kontakt@meblelazienkowe.com.pl"
        >
          kontakt@meblelazienkowe.com.pl
        </a>
      </div>

      <section
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(17,24,39,0.08)"
        }}
        aria-labelledby="offerings-heading"
      >
        <h2 id="offerings-heading" style={{ marginTop: 0 }}>Co przygotowujemy?</h2>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            color: "#374151"
          }}
        >
          <li style={{ marginBottom: "8px" }}>• Zabudowy pod umywalki, toaletki, słupki i szafy</li>
          <li style={{ marginBottom: "8px" }}>• Rozwiązania na wymiar dla wymagających wnętrz</li>
          <li>• Montaż i serwis wykonywany przez nasz zespół</li>
        </ul>
      </section>

      {/* <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Dziękujemy! Powiadomimy Cię o starcie strony.");
        }}
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "16px",
          marginTop: "30px",
          border: "1px solid #EAECEF",
          boxShadow: "0 4px 12px rgba(17,24,39,0.08)"
        }}
      >
        <label style={{ display: "block", fontWeight: 600, marginBottom: "8px" }}>
          Powiadom mnie o starcie
        </label>
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            type="email"
            placeholder="Twój e-mail"
            required
            style={{
              flex: 1,
              padding: "12px 14px",
              borderRadius: "10px",
              border: "1px solid #D1D5DB"
            }}
          />
          <button
            type="submit"
            style={{
              background: "#2E3944",
              color: "#fff",
              padding: "12px 18px",
              borderRadius: "10px",
              fontWeight: 600,
              border: "none"
            }}
          >
            Zapisz się
          </button>
        </div>
      </form> */}

      <footer
        style={{
          marginTop: "auto",
          paddingTop: "40px",
          color: "#6B7280",
          fontSize: "14px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "10px"
        }}
      >
        <div>© {new Date().getFullYear()} meblelazienkowe.com.pl. Wszystkie prawa zastrzeżone.</div>
        <nav aria-label="Footer navigation">
          <a
            href="mailto:kontakt@meblelazienkowe.com.pl"
            style={{ color: "#2E3944", textDecoration: "none" }}
          >
            Kontakt
          </a>
        </nav>
      </footer>
    </main>
  );
}


