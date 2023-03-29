import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';

function App() {
  return (
    <>
      <MyNav brand="Epibooks" />
      <Welcome heading="Welcome to Epibooks" subtitle="La librearia di Epicode" />
      <AllTheBooks />
      <MyFooter footerContent="La Nina,La Pinta e La Santa Maria" />
    </>

  );
}

export default App;
