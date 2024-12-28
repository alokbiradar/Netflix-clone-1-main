import "./App.css";
import Row from "./Row";
import request from "./Request";
import Banner from "./Banner";
import Nav from "./Nav"

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row
        title="NETTFLIX ORIGINAL"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      ></Row>
      <Row title="Trending Now" fetchUrl={request.fetchTrending}></Row>
      <Row title="Top Rated" fetchUrl={request.fetchTopRated}></Row>
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies}></Row>
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies}></Row>
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies}></Row>
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;
