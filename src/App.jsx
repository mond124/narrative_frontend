import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Layoutindex, Layout2, Layoutabout } from "./layout";
import { Apapu, Home, About } from "./pages";

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
        <Route element={<Layoutabout />}>
          <Route path="/about" element={<About />}/>
          </Route>
          
      </Routes>
    </Router>
  );
}

export default App;