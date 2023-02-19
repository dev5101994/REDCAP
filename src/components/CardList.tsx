import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonFab, IonFabButton } from '@ionic/react';
import { IonIcon } from '@ionic/react'
import { createOutline, add } from 'ionicons/icons';

import './CardList.css';
{/* <ion-icon name="create-outline"></ion-icon> */ }
function CardList() {
    return (
        <div style={{ marginLeft: '20px', marginRight: '20px' }}>
            <IonCard color="danger">
                <IonCardHeader>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <IonCardTitle style={{ marginTop: '10px' }}>Card 1</IonCardTitle>
                        <IonIcon style={{ height: '50px', width: '50px' }} size="large" icon={createOutline} />
                    </div>
                </IonCardHeader>

            </IonCard>

            <IonCard color="danger">
                <IonCardHeader>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <IonCardTitle style={{ marginTop: '10px' }}>Nitesh Biswas</IonCardTitle>
                        <IonIcon style={{ height: '50px', width: '50px' }} size="large" icon={createOutline} />
                    </div>
                </IonCardHeader>

            </IonCard>
            <IonCard color="danger">
                <IonCardHeader>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <IonCardTitle style={{ marginTop: '10px' }}>Card 2</IonCardTitle>
                        <IonIcon style={{ height: '50px', width: '50px' }} size="large" icon={createOutline} />
                    </div>
                </IonCardHeader>

            </IonCard>
            <div style={{}}>
                {/* uniqueCode */}
                <IonFab slot="fixed" horizontal="end" vertical="bottom" >
                    <IonFabButton routerLink="/uniqueCode" color="danger">
                        <IonIcon icon={add}></IonIcon>
                    </IonFabButton>
                </IonFab>
            </div>
        </div>
    );
}
export default CardList;