// import logo from './logo.svg';
import './App.css';
import Test from "./pages/Test";
import Home from "./pages/Home/Home";
import Contact from './pages/Home/Components/Contact';
function App() {
  return (
    <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Test/> */}
        <Home/>
        <Contact/>
    </div>
  );
}

export default App;
