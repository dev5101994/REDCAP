import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { IonIcon } from '@ionic/react'
import './CreateNewCard.css';
import { addOutline, addCircleOutline, cardOutline } from 'ionicons/icons';
import { IonButton } from '@ionic/react';
{/* <ion-icon name="add-circle-outline"></ion-icon> */ }
{/* <ion-icon name="card-outline"></ion-icon> */ }
function CreateNewCard() {
    return (
        <>
            {/* <div style={{ marginLeft: '30px', marginRight: '30px', height: '245px' }}> */}

            <h1>Welcome</h1>

            <div className='create'>
                <IonCard color="danger">

                    <IonCardContent >
                        <div style={{ display: 'flex', justifyContent: 'center', height: '150px' }}>
                            <IonIcon style={{ height: '100px', width: '100px' }} size="large" icon={addCircleOutline} />
                        </div>
                        <IonButton routerLink="/cardList" style={{ display: 'flex', justifyContent: 'center', fontSize: '40px', color: "white" }} fill="clear">Create New Card</IonButton>
                        {/* <h1 style={{ display: 'flex', justifyContent: 'center', fontSize: '40px' }}>Create New Card</h1> */}
                    </IonCardContent>
                </IonCard>



                <IonCard color="danger">

                    <IonCardContent>
                        <div style={{ display: 'flex', justifyContent: 'center', height: '150px' }}>
                            <IonIcon style={{ height: '100px', width: '100px' }} size="large" icon={cardOutline} />
                        </div>
                        <IonButton routerLink="/cardList" style={{ display: 'flex', justifyContent: 'center', fontSize: '40px', color: "white" }} fill="clear">View Card</IonButton>
                    </IonCardContent>
                </IonCard>

            </div>

        </>


    );
}
export default CreateNewCard;