import './ExploreContainer.css';
import { IonIcon } from '@ionic/react'
import { createOutline } from 'ionicons/icons';
interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      {/* <strong>Ready to create an app?</strong>
<p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p> */}
      <div className="welcome">
        <h4 style={{ color: 'blue' }}>Welcome</h4>
        <h2>Akshay Pratap</h2>
      </div>
      <div className="account">
        <h3>Account Setting</h3>

      </div>
      {/* <div className="Edit"> */}
      <div className="createOutlinee">
        <div className="createOutline">
          {/* <ion-icon name="person-outline"></ion-icon> */}
          <IonIcon size="large" icon={createOutline} />
          {/* <h1>Edit</h1> */}
          {/* </div> */}


        </div>
      </div>
      <h1>Edit</h1>
      <h2>Change Password</h2>
      <div className="other">
        <h1>Other</h1>
        <h2>Term of use</h2>
        <h2>Delete Account</h2>
      </div>
    </div>
  );
};

export default ExploreContainer;
