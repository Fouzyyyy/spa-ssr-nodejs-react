import { BrowserRouter } from "react-router-dom";

import logo from './logo.svg';

function App() {
  return (
    <BrowserRouter>
        <img src={logo} className="App-logo" alt="logo" />
    </BrowserRouter>  
  );
}

export default App;
