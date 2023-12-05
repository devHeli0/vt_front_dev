import { Route, Routes } from 'react-router-dom';
import Register from './pages/Cadastro';
import Login from './pages/Login';
import Account from './pages/Account';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import Transactions from './pages/Transactions';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route
          path="/account"
          element={
            <RequireAuth>
              <Account />
            </RequireAuth>
          }
        />
               <Route
          path="/transaction"
          element={
            <RequireAuth>
              <Transactions />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
