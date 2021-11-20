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
      <Switch>
        <Route path='/' component={Navigation} />
        <Header />
        <About />
        <Service />
        <Agency />
        <Statistics />
        <Contacts />
        <Footer />
      </Switch>
    </div>
  );
}

export default App;
