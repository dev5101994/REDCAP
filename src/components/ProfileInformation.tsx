import React from 'react';
import { IonItem, IonLabel, IonList } from '@ionic/react';
import { IonIcon } from '@ionic/react';
import {
    business, call, phonePortrait, mailOpen, logoWhatsapp, logoDribbble, pin, locate, logoFacebook,
    logoInstagram, logoTwitter, logoLinkedin, arrowBackCircleOutline
} from 'ionicons/icons';


function ProfileInformation() {
    // <IonIcon style={{ height: '50px', width: '50px' }} size="large" icon={arrowBackCircleOutline} />

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <IonIcon style={{ height: '50px', width: '50px' }} size="large" icon={arrowBackCircleOutline} />

                <div style={{ height: '200px', width: '200px', marginLeft: '240px', }}>
                    <img style={{ borderRadius: '115px' }} alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                </div>
            </div>
            <div style={{ marginLeft: '211px' }}>
                <h1 style={{ fontSize: '40px' }}>Mr.Warren Abrahams</h1>
                {/* <br /> */}
                <h2 style={{ fontSize: '35px', marginLeft: '47px' }}>Creative Director</h2>
            </div>
            <IonList lines="none">
                <IonItem >
                    <IonIcon size="large" icon={business} />
                    <IonLabel style={{ marginLeft: '30px', fontSize: '20px', }}>RedCapeTech</IonLabel>
                </IonItem>
                <IonItem>
                    <IonIcon size="large" icon={call} />
                    <IonLabel style={{ marginLeft: '30px', fontSize: '20px', }}>+27876508796</IonLabel>
                </IonItem>
                <IonItem>
                    <IonIcon size="large" icon={phonePortrait} />
                    <IonLabel style={{ marginLeft: '30px', fontSize: '20px', }}>+27876508796</IonLabel>
                </IonItem>
                <IonItem>
                    <IonIcon size="large" icon={mailOpen} />
                    <IonLabel style={{ marginLeft: '30px', fontSize: '20px', }}>warren@redCape.co.za</IonLabel>
                </IonItem>
                <IonItem>
                    <IonIcon size="large" icon={logoWhatsapp} />
                    <IonLabel style={{ marginLeft: '30px', fontSize: '20px', }}>+27876508796</IonLabel>
                </IonItem>
                <IonItem>
                    <IonIcon size="large" icon={logoDribbble} />
                    <IonLabel style={{ marginLeft: '30px', fontSize: '20px', }}>warren@redCape.co.za</IonLabel>
                </IonItem>
                <IonItem>
                    <IonIcon size="large" icon={pin} />
                    <IonLabel style={{ marginLeft: '30px', fontSize: '20px', }}>Unit 262,Anfield Villege,Forest Drive Ext</IonLabel>
                </IonItem>
                <IonItem>
                    <IonIcon size="large" icon={locate} />
                    <IonLabel style={{ marginLeft: '30px', fontSize: '20px', }}>26.245.2635.20</IonLabel>
                </IonItem>
                <IonItem>
                    <IonIcon size="large" icon={logoFacebook} />
                    <IonLabel style={{ marginLeft: '30px', fontSize: '20px', }}>www.johnblank.com</IonLabel>
                </IonItem>
                <IonItem>
                    <IonIcon size="large" icon={logoInstagram} />
                    <IonLabel style={{ marginLeft: '30px', fontSize: '20px', }}>RedCapeTech</IonLabel>
                </IonItem>
                <IonItem>
                    <IonIcon size="large" icon={logoTwitter} />
                    <IonLabel style={{ marginLeft: '30px', fontSize: '20px', }}>RCT_Twite</IonLabel>
                </IonItem>
                <IonItem>
                    <IonIcon size="large" icon={logoLinkedin} />
                    <IonLabel style={{ marginLeft: '30px', fontSize: '20px', }}>RedCapeTech</IonLabel>
                </IonItem>
            </IonList>
        </>
    );
}
export default ProfileInformation;