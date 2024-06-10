import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Layoutindex, Layout2 } from "./layout";
import { Apapu, Home } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main page Start */}
        <Route element={<Layoutindex />}>
          <Route path="/" element={<Home />} />
        </Route>
        {/* Main page End */}
        <Route element={<Layout2 />}>
          <Route path="/Layout2" element={<Apapu />}/>
          </Route>
      </Routes>
    </Router>
  );
}

export default App;