import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import { userContext } from './context/userContext';

function App() {
  const [user, setUser] = useState("Guess");

  const login = (name) => setUser(name);
  const logout = () => setUser("Guess");

  const data = {
    user,
    login,
    logout
  }

  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={data}>
          <Header />
          <Main />
        </userContext.Provider>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
