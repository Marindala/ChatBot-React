import "./App.css";
import Data from "./components/Data/Data";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="chat">
        <Data />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
