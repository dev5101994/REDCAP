import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import Welcome from '../components/Welcome';
import './Home.css';
import ForgotPassword from '../components/ForgotPassword';
import AddNewCard from '../components/AddNewCard';
import CreateNewCard from '../components/CreateNewCard'
import CardList from '../components/CardList'
import UniqueCode from '../components/UniqueCode'
import ProfileInformation from '../components/ProfileInformation'
import OptionRegisterLogin from '../components/OptionRegisterLogin'
import Login from '../components/Login'
import Verify from '../components/Verify'
import AddField from '../components/AddField';
// import VCard from '../components/VCard'
import SignUp from '../components/SignUp';
// import BottomTab from '../components/BottomTab';
// import { BottomTab } from '../components/BottomTab';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            {/* <IonTitle size="large">Blank</IonTitle> */}
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer /> */}
        {/* <AddNewCard /> */}
        <CreateNewCard />
        {/* <Welcome /> */}
        {/* <BottomTab /> */}
        {/* <CardList /> */}
        {/* <UniqueCode /> */}
        {/* <ProfileInformation /> */}
        {/* <OptionRegisterLogin /> */}
        {/* <ForgotPassword /> */}
        {/* <Login /> */}
        {/* <Verify /> */}
        {/* <VCard /> */}
        {/* <SignUp /> */}
        {/* <AddField /> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
