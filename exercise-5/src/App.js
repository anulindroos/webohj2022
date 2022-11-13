import Country from "./components/Country.js"

//components are functions
const App = () => {
  //components return JSX code (looks like HTML)
  return (
    <div>
      <Country name={"Japan"} capital={"Tokyo"} />
      <Country name={"United Kingdom"} capital={"London"} />
      <Country name={"Finland"} capital={"Helsinki"} />
    </div>
  );
};

//export the component in the end
export default App;
