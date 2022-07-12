import './styles/App.css';
import NavBar from "./components/NavBar/NavBar";
import AppRoute, {useRoutes} from "./AppRoute";

function App() {

    const routes = useRoutes();

  return (
    <div className="App">
        <NavBar />
        {routes}
    </div>
  );
}

export default App;
