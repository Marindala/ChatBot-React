import "./App.css";
import DataChat from "./components/Data/DataChat";
import Footer from "./components/Footer/Footer"; 

function App() {
  return (
    <>
      <div className="chat">
        <DataChat />
      </div>
      <div>
        <Footer /> 
      </div>
    </>
  );
}

export default App;
