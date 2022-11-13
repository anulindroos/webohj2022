import GenreList from "./components/GenreList";

const thrillers = [
  {
    title: "Psycho",
    director: "Alfred Hitchcock",
    year: "1960",
  },
  {
    title: "Silence of the Lambs",
    director: "Jonathan Demme",
    year: "1991",
  },
  {
    title: "Eyes Wide Shut",
    director: "Stanley Kubrick",
    year: "1999",
  },
];

const scifi = [
  {
    title: "Metropolis",
    director: "Fritz Lang",
    year: "1927",
  },
  {
    title: "2001: A Space Odyssey",
    director: "Stanley Kubrick",
    year: "1968",
  },
  {
    title: "Robocop",
    director: "Paul Verhoeven",
    year: "1987",
  },
];

const romance = [
  {
    title: "Casablanca",
    director: "Michael Curtiz",
    year: "1942",
  },
  {
    title: "Call Me By Your Name",
    director: "Luca Guadagnino",
    year: "2017",
  },
  {
    title: "Phantom Thread",
    director: "Paul Thomas Anderson",
    year: "2017",
  },
];

const App = () => {
  
  return (
    <div>
      <h1>Movies</h1>
      <GenreList movies ={thrillers} genreName="Thriller"/>
      <GenreList movies ={scifi} genreName="Scifi"/>
      <GenreList movies ={romance} genreName="Romance"/>
    </div>
  );
};

export default App;