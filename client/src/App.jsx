import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import NavContextProvider from "./NavContext";
function App() {
  return (
    <div className="min-h-screen bg-primary">
      <NavContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </NavContextProvider>
    </div>
  );
}

export default App;
