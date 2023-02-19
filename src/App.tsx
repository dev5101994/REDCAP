import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
// import card from './components/card1';
import Verify from './components/Verify';
// import VCard from './components/VCard';
import SignUp from './components/SignUp'
import CardList from './components/CardList'
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import UniqueCode from './components/UniqueCode';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
// import card2 from './components/card2';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
// import card1 
import AddNewCard from './components/AddNewCard';
/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
          {/* <card1/> */}
          <Route path="/login" component={Login} />
          <Route path="/forgotPassword" component={ForgotPassword} />
          <Route path="/verify" component={Verify} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/cardList" component={CardList} />
          <Route path="/uniqueCode" component={UniqueCode} />
          <Route path="/addNewCard" component={AddNewCard} />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />

        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
