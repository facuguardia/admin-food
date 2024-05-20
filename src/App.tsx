
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Separator from './components/Separator';
import About from './components/About';
import Products from './components/Products';
import { AreaChartUsageExample } from './pages/AreaChartUsageExample';


function App() {
  return (
    <div className=" bg-[#111827] w-[50%] h-screen">
      {/* <Navbar />
      <Hero />
      <Separator />
      <About />
      <Products /> */}
      <AreaChartUsageExample />

    </div>
  );
}

export default App;
