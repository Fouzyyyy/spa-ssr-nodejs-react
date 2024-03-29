import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePageComponent } from './components/home';
import { PublicPage } from './components/publicPage';
import { PrivatePage } from './components/privatePage';
import { LoginPageComponent } from './components/loginPage';

const App = () =>  {
  return (
    <BrowserRouter>
     <Routes>
       <Route path="/:lang/login" element={<LoginPageComponent />} />
       <Route path="/login" element={<LoginPageComponent />} />
        <Route path="/:lang/spa/public" element={<PublicPage />} />
        <Route path="/spa/public" element={<PublicPage />} />
        <Route path="/:lang/spa/private" element={<PrivatePage />} />
        <Route path="/spa/private" element={<PrivatePage />} />
        <Route path="/:lang" element={<HomePageComponent />} />
        <Route path="/" element={<HomePageComponent />} />
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
