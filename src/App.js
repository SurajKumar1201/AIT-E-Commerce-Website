import 'bootstrap/dist/css/bootstrap.min.css'
import Routing from './routes/Routing';
import Home from './components/home/Home';
import NavBar from './components/navBar/NavBar';
import Footer from './components/Footer'



function App() {
  return (
    <>
      <NavBar/>
      <Routing/>
      
      <Footer/>
      
      </>
    
  );
}

export default App;
