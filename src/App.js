import './App.scss';
import Header from './components/Header';
import Comic from './components/Comic';
import Footer from './components/Footer';

function App() {
  return (
    <div className="page-container">
      <Header />
      <Comic />
      <Footer />
    </div>
  );
}

export default App;
