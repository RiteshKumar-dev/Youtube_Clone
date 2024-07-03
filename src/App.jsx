import react from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./Pages/Search";
import WatchVideos from "./Pages/WatchVideos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/watch/:id" element={<WatchVideos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
