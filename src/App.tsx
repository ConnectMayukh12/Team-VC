import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { ScrollToHash } from "./components";
import { LoadingPage } from "./pages/LoadingPage";

// Lazy load pages for better performance
const LandingPage = lazy(() =>
  import("./pages/LandingPage").then((module) => ({
    default: module.LandingPage,
  }))
);
const MeetTeamPage = lazy(() =>
  import("./pages/MeetTeamPage").then((module) => ({
    default: module.MeetTeamPage,
  }))
);
const DashboardPage = lazy(() =>
  import("./pages/DashboardPage").then((module) => ({
    default: module.DashboardPage,
  }))
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage").then((module) => ({
    default: module.NotFoundPage,
  }))
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToHash />
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/team" element={<MeetTeamPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
