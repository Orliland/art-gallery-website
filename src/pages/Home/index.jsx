import "./home.css";

import Hero from "../../layout/Hero";
import Grid from "../../layout/Grid";
import Footer from "../../layout/Footer";

function Home() {
  return (
    <main className="main">
      <Hero />
      <Grid />
      <Footer isDark={true} />
    </main>
  );
}

export default Home;
