
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import Separator from './components/Separator';
import About from './pages/About';

function App() {
  return (
    <div className=" bg-[#111827] w-screen h-screen">
      <Navbar />
      <Hero />
      <Separator />
      <About />

    </div>
  );
}

export default App;
