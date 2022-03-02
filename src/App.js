import { render } from "react-dom";
// import Pet from "./Pet";
import SearchParams from './SearchParams'
const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <SearchParams /> 
      {/* <Pet name={"Luna"} animal={"Dog"} breed={"Havanese"} />
      <Pet name={"Woody"} animal={"Bird"} breed={"Cockatiel"} />
      <Pet name={"Oreo"} animal={"Cat"} breed={"Scottish Fold"} /> */}
    </div>
  );
};

render(<App />, document.getElementById("root"));
