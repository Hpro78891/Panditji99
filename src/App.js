import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./Layout/RootLayout";
import HelpLayout from "./Layout/HelpLayout";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import NotFound from "./pages/NotFound";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
