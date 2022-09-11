import { Navbar, Footer, Front } from './components/import';

const App = () => {
  return (
     <div className="min-h-screen">
       <div>
          <Navbar />
          <Front />
       </div>
        <Footer />
     </div>
  );
}

export default App;
