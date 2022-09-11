import { Navbar, Footer, Front Awareness, Laws } from './components/import';

const App = () => {
  return (
     <div className="min-h-screen">
       <div>
          <Navbar />
          <Front />
       </div>
    <Laws />
      <Awareness />
        <Footer />
     </div>
  );
}

export default App;
