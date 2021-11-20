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
        <Route path='/' exact component={Header} />
        <Route path='/home' component={Header} />
        <Route path='/about' component={About} />
        <Route path='/service' component={Service} />
        <Route path='/agency' component={Agency} />
        <Route path='/contact' component={Contacts} />
        <Route path='/statistic' component={Statistics} />
      </Switch>
        <Footer />
    </div>
  );
}

export default App;
