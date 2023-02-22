import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Adduser from "./Components/Adduser";
import Crudhome from "./Components/Crudhome";
import Edituser from "./Components/Edituser";
import View from "./Components/view";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Crudhome />} />
          <Route path="view/:id" element={<View />} />
          <Route path="add" element={<Adduser />} />
          <Route path="edit/:id" element={<Edituser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
