/*::::::::::::::::::::::::::::::::::::::::
:  Importing CSS, Dependencies, Routes  ::
::::::::::::::::::::::::::::::::::::::::*/

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      <Router>

        <Switch>

          <Route path="/" exact component={
            () => <LandingPage/>
          }
          />

          <Route path="/services" exact component={
            () => <Services/>
          }
          />

          <Route path="/activities" exact component={
            () => <Activities/>
          }
          />

          <Route path="/careers" exact component={
            () => <Careers/>
          }
          />

          <Route path="/resources" exact component={
            () => <Resources/>
          }
          />

        </Switch>
      
      </Router>
    </div>
  );
}



/*::::::::::::::::::::::::::::::::::::::::
::::::  Exporting App Component  :::::::::
::::::::::::::::::::::::::::::::::::::::*/

export default App;