import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>HOME</div>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
