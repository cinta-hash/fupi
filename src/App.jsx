import "./App.css";
import NavBar from "./NavBar";
import UrlShortener from "./UrlShortener";
function App() {
  return (
    <div className="bg-gradient-to-r from-cyan-800 via-cyan-500 to-cyan-300 h-screen items-center justify-center">
      <NavBar />
      <UrlShortener />
    </div>
  );
}

export default App;
