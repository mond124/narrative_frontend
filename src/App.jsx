import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Layoutindex } from "./layout";
import { Home } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main page Start */}
        <Route element={<Layoutindex />}>
          <Route path="/" element={<Home />} />
        </Route>
        {/* Main page End */}
      </Routes>
    </Router>
  );
}

export default App;
