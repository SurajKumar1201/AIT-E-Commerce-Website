import 'bootstrap/dist/css/bootstrap.min.css'
import Routing from './routes/Routing';
import NavBar from './components/navBar/NavBar';
import Footer from './components/Footer'
import Toaster from './components/loader/Toaster';



function App() {
  return (
    <>
      <Toaster/>
      <NavBar />
      <Routing />
      <Footer />
     
    </>

  );
}

export default App;
