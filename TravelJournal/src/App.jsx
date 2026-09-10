import Footer from "./components/Footer";
import Header from "./components/Header";
import Journals from "./components/Journals";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Journals />
      </main>

      <Footer />
    </>
  );
}

export default App;
