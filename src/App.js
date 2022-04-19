import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Header from './components/common/header/Header';
import LoginView from './pages/LoginView';
import ProcessView from './pages/ProcessView';
import EndProcessView from './pages/EndProcessView';

import UserContext from './providers/UserContext';

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>            
            <Route path="/" element={<LoginView />} />
            <Route path="cotizar/*" element={<ProcessView />} />
            <Route path="/finalizar" element={<EndProcessView />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
