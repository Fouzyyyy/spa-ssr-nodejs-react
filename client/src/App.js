import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { RootComponent } from './components/root';

const App = () =>  {

  return (
    <BrowserRouter>
     <Routes>
        <Route path="/:lang/spa/public" element={<div>Public</div>} />
        <Route path="/:lang/spa/private" element={<div>Private</div>} />
        <Route path="/:lang" element={<RootComponent />} />
        <Route path="/" element={<RootComponent />} />
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
