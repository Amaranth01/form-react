import './App.css';
import {Category} from "../Category/Category";
import {Connexion} from "../Connexion/Connexion";
import {Product} from "../Product/Product";
import {Register} from "../Register/Register";

function App() {
  return (
    <div className="App">
      <Category/>
      <Connexion/>
      <Product/>
      <Register/>
    </div>
  );
}
export default App;