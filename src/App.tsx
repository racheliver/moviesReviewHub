import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Auth } from "./pages/auth";
import { Home } from "./pages/home";
import { Container } from "semantic-ui-react";
import { Movie } from "./pages/movie";
import { TvShow } from "./pages/tvshow";
function App() {
  return (
    <div>
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Container style={{ margin: 20 }}><Home/></Container>}/>
          <Route path="/auth" element={<Auth/>} />
          <Route path="/rated" element={<h1>Rated</h1>} />
          <Route path="/movie/:id" element={<Movie/>}/>
          <Route path="/tvshows/:id" element={<TvShow/>}/>
        </Routes>
    </Router>
    </div>

  );
}

export default App;
