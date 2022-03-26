/*::::::::::::::::::::::::::::::::::::::::
:  Importing CSS, Dependencies, Routes  ::
::::::::::::::::::::::::::::::::::::::::*/

import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Services from './components/Services/Services';
import Activities from './components/Activities/Activities';
import Careers from './components/Careers/Careers';
import Resources from './components/Resources/Resources';



/*::::::::::::::::::::::::::::::::::::::::
:::::::  Creating App Component  :::::::::
::::::::::::::::::::::::::::::::::::::::*/

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<LandingPage/>}
          />

          <Route path="/services" element={<Services/>}
          />

          <Route path="/activities" element={<Activities/>}
          />

          <Route path="/careers" element={<Careers/>}
          />

          <Route path="/resources" element={<Resources/>}
          />

        </Routes>
      
      </BrowserRouter>
    </div>
  );
}



/*::::::::::::::::::::::::::::::::::::::::
::::::  Exporting App Component  :::::::::
::::::::::::::::::::::::::::::::::::::::*/

export default App;