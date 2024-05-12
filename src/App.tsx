
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Separator from './components/Separator';
import About from './components/About';
import Products from './components/Products';

function App() {
  return (
    <div className=" bg-[#111827] w-screen h-screen">
      <Navbar />
      <Hero />
      <Separator />
      <About />
      <Products />

    </div>
  );
}

export default App;
