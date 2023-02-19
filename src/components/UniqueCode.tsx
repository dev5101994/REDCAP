import React from 'react';
import { IonInput } from '@ionic/react';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import './UniqueCode.css';
import { IonIcon } from '@ionic/react'
import { arrowBackCircleOutline } from 'ionicons/icons';
import { IonButton } from '@ionic/react';

function UniqueCode() {

    return (

        <>


            <IonContent className="ion-padding">
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <IonIcon style={{ height: '50px', width: '50px' }} size="large" icon={arrowBackCircleOutline} />
                    <h1 style={{ color: 'red', fontSize: '40px', fontWeight: 'bold', fontFamily: 'serif', marginLeft: '30px', marginTop: '2px' }}>Add New Card</h1>

                </div>
                <p style={{ color: '#70706e', display: 'flex', justifyContent: 'center', marginRight: '315px', fontSize: '20px', marginTop: '-10px' }}>Enter your card Unique Code</p>
                <h1 style={{ color: 'red', display: 'flex', fontSize: '40px', justifyContent: 'center', marginTop: '200px', marginBottom: '50px', fontWeight: 'bold', fontFamily: 'serif' }}>Enter your OTP</h1>
                {/* // <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }} > */}
                <div style={{ display: 'flex', justifyContent: 'space-around', marginLeft: '20px', marginRight: '20px' }}>
                    <IonInput style={{ height: '60px', width: '20px', marginRight: '20px' }} class="custom"></IonInput>
                    <br></br>
                    <IonInput style={{ height: '60px', width: '20px', marginRight: '20px' }} class="custom"></IonInput>
                    <br></br>
                    <IonInput style={{ height: '60px', width: '20px', marginRight: '20px' }} class="custom"></IonInput>
                    <br></br>
                    <IonInput style={{ height: '60px', width: '20px', marginRight: '20px' }} class="custom"></IonInput>
                    <br></br>
                    <IonInput style={{ height: '60px', width: '20px', marginRight: '20px' }} class="custom"></IonInput>
                </div>

                {/* <div style={{ display: 'flex', justifyContent: 'center', }}>

                </div> */}

                <IonButton routerLink="/addNewCard" style={{ marginTop: '200px', height: '60px', marginLeft: '20px', marginRight: '20px' }} expand="block" color="danger"><p style={{ fontSize: '30px' }}>Next</p></IonButton>
            </IonContent>

        </>



    );
}
export default UniqueCode;