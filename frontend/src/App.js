import "./App.css";
import SigninPage from "./components/SigninPage/SigninPage";
import SignupPage from "./components/SignupPage/SignupPage";
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
