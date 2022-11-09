import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import styles from "../src/styles/App.module.css";
function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Navbar />
        <Home />
      </Router>
    </div>
  );
}

export default App;
