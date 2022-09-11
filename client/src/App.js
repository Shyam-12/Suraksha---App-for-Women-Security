import { Navbar, About, Front, Awareness, Laws } from './components/import';

const App = () => {
  return (
     <div className="min-h-screen">
       <div>
          <Navbar />
          <Front />
          <About />
       </div>
      <Laws />
      <Awareness />
     </div>
  );
}

export default App;
