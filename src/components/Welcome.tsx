import React from 'react';
import { IonItem, IonLabel, IonList } from '@ionic/react';
import { IonIcon } from '@ionic/react'
import './Welcome.css';
import { trashOutline, personCircleOutline, lockClosedOutline, receiptOutline, addCircleOutline, addOutline } from 'ionicons/icons';
// import { createOutline } from 'ionicons/icons';
{/* <ion-icon name="receipt-outline"></ion-icon> */ }
{/* <ion-icon name="add-circle-outline"></ion-icon> */ }
{/* <ion-icon name="add-outline"></ion-icon> */ }
function Example() {
    return (
        <IonList>
            <IonItem>
                <IonLabel style={{ color: 'red', fontSize: '38px' }}>Welcome</IonLabel>
            </IonItem>
            <IonItem>
                <IonLabel style={{ color: 'red', fontSize: '34px', marginTop: '30px' }}>Akshay Pratap Singh</IonLabel>
            </IonItem>
            <IonItem>
                <IonLabel style={{ fontSize: '34px', marginTop: '40px' }}>Account Setting</IonLabel>
            </IonItem>
            <div style={{ marginTop: '20px', marginLeft: '10px' }}>
                <IonItem>
                    <div style={{ backgroundColor: 'red', height: '60px', width: '60px', borderRadius: '40px', marginBottom: '20px' }}>
                        <IonIcon style={{ marginTop: '15px', marginLeft: '14px', color: 'white' }} size="large" icon={personCircleOutline} />
                    </div>
                    <IonLabel style={{ fontSize: '30px', marginLeft: "50px" }}>Edit Profile</IonLabel>
                </IonItem>
                <IonItem>
                    <div style={{ backgroundColor: 'red', height: '60px', width: '60px', borderRadius: '40px', }}>
                        <IonIcon style={{ marginTop: '12px', color: 'white', marginLeft: '14px' }} size="large" icon={lockClosedOutline} />
                    </div>
                    <IonLabel style={{ fontSize: '30px', marginTop: '30px', marginLeft: "50px" }}>Change Password</IonLabel>
                </IonItem>
            </div>
            <h1 style={{ fontSize: '34px', marginTop: '40px', marginLeft: '20px' }}>Other</h1>



            <div style={{ marginTop: '20px', marginLeft: '10px' }}>
                <IonItem>
                    <div style={{ backgroundColor: 'red', height: '60px', width: '60px', borderRadius: '40px', marginBottom: '20px' }}>
                        <IonIcon style={{ marginTop: '15px', marginLeft: '10px', color: 'white' }} size="large" icon={receiptOutline} />
                    </div>
                    <IonLabel style={{ fontSize: '30px', marginLeft: "50px" }}>Terms of use</IonLabel>
                </IonItem>
                <IonItem>
                    <div style={{ backgroundColor: 'red', height: '60px', width: '60px', borderRadius: '40px', }}>
                        <IonIcon style={{ marginTop: '14px', color: 'white', marginLeft: '13px', }} size="large" icon={trashOutline} />
                    </div>
                    <IonLabel style={{ fontSize: '30px', marginTop: '30px', marginLeft: "50px" }}>Delete Account</IonLabel>
                </IonItem>
            </div>

            <div className='pluss'>
                <div className="plus">
                    {/* <div style={{ backgroundColor: 'red', height: '60px', width: '60px', borderRadius: '40px', }}> */}
                    <IonIcon style={{ marginTop: '-14px', color: 'white', height: '90px', width: '90px' }} icon={addOutline} />
                    {/* </div> */}
                </div>
            </div>
        </IonList>


    );
}
export default Example;