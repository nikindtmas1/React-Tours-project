import { Route, Switch } from 'react-router-dom';


import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Agency from "./components/Agency/Agency";
import Statistics from "./components/Statistics/Statistics";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
        <Navigation />
       
          <Switch>
              <Route exact path="/"><Header /></Route>
              <Route path="/home"><Header/></Route>
              <Route path="/about"><About /></Route>
              <Route path="/service"><Service /></Route>
              <Route path="/agency"><Agency /></Route>
              <Route path="/contact"><Contacts /></Route>
              <Route path="/statistic"><Statistics /></Route>
        </Switch>
     
        <Footer />
    </div>
  );
}

export default App;
