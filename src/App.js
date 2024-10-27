import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import WorkPage from "./pages/WorkPage";
import TopPage from "./pages/TopPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import MainLayout from "./layouts/MainLayout";
import Error404 from "./pages/Error404";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<TopPage />} />
            <Route path="workPage" element={<WorkPage />} />
            <Route path="portfolioPage" element={<PortfolioPage />} />
            <Route path="contactPage" element={<ContactPage />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
