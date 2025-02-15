import './App.css';
import Container from './Components/container/Container';
import HomeContainer from './Components/home/HomeContainer';
import LoginContainer from './Components/Login/LoginContainer';
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
      <Routes>
        
        {/* <Route path="/home" Component={HomeContainer}/> */}
        <Route path='/' Component={Container}/>
        <Route path='/login' Component={LoginContainer}/>
      </Routes>
  );
}

export default App;
