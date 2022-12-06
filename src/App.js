import logo from './logo.svg';
import './App.scss';
import Header from './components/Header'
import About from './components/About';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <WorkExperience />
      <Blog />
      <Footer />

    </div>
  );
}

export default App;
