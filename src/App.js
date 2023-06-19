import './App.css';
import { useEffect, useState } from 'react';
import { Routes , Route} from 'react-router-dom';
import NewOrderPage from './pages/NewOrderPage/NewOrderPage';
import AuthPage from './pages/AuthPage/AuthPage';
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage';
import NavBar from './components/NavBar/NavBar';
import { getUser } from './utilities/users-service';


function App() {
  //Ensureing the React Dev Server send AJAX calls to the Express Server
  //  async function testCall (){
  //   const res = await fetch("/test");
  //   const data = await res.json();
  //   console.log(data);
  //  }

  //  useEffect(()=>{
  //   testCall();

  //  }, [])

  const [user, setUser] = useState(getUser());
  //console.log("Current user", user);

  return (
    <main className="App">
    { user ?
      <>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/orders/new" element={<NewOrderPage />} />
        <Route path="/orders" element={<OrderHistoryPage />} />
      </Routes>
      </>
      :
      <AuthPage setUser={setUser}/>
    }
  </main>
  );
}

export default App;
