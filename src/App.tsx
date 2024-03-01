import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { Feed } from "./Pages/Feed";
import { AuthContextProvider } from "./Context/auth";


function App() {
  return (
    <Router>
      <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed/>} />

      </Routes>
    </AuthContextProvider>
    </Router>
  );
}

export default App;