import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { MeetTeamPage } from "./pages/MeetTeamPage";
import { ThemeProvider } from "./context/ThemeContext";
import { ScrollToHash } from "./components";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/team" element={<MeetTeamPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
