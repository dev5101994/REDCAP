import React from 'react';
import {
    closeCircleOutline, globeOutline, schoolOutline, locationOutline, locateOutline, logoFacebook, logoInstagram, logoTwitter, logoLinkedin,
    addCircleOutline, mailOutline, logoWhatsapp, phonePortraitOutline, callOutline, arrowBackCircleOutline, businessOutline, personOutline
} from 'ionicons/icons';
import './AddNewCard.css';
import { IonIcon } from '@ionic/react'
import { IonInput } from '@ionic/react';
import { IonButton } from '@ionic/react';
import AddField from '../components/AddField';
import { isAbsolute } from 'path';
export default function AddNewCard() {
    return (
        <div style={{ marginTop: '40px' }}>
            <div style={{ display: 'flex' }}>
                <IonIcon style={{ height: '80px', width: '80px' }} size="large" icon={arrowBackCircleOutline} />
                <h1 style={{ color: 'red', fontSize: '39px', fontWeight: 'bold', marginLeft: '20px' }}>Add New Card</h1>

            </div>
            <p style={{ color: 'grey', marginLeft: '100px', marginTop: '-10px' }}>Fill in detail</p>
            <p style={{ color: 'grey', marginLeft: '100px', fontSize: '25px', }}>To change the order,</p>
            <p style={{ color: 'grey', marginLeft: '100px', fontSize: '25px', marginTop: '-20px' }}>tap and hold the field and then drag into position of order</p>

            <div className="card">
                {/* <IonInput placeholder="Custom input" class="custom">

                </IonInput> */}
                <input style={{ position: "relative", fontSize: "20px" }} type="text" placeholder="Company name" />
                <IonIcon style={{ color: "grey", marginLeft: "10px", marginTop: "10px", position: 'absolute', height: '30px', width: '30px' }} size="large" icon={businessOutline} />
                <IonIcon style={{ color: "grey", marginTop: "-40px", marginLeft: "365px", height: '30px', width: '30px' }} size="large" icon={closeCircleOutline} />
                <br />
                <input style={{ position: "relative", fontSize: "20px" }} type="text" placeholder="Tittle eg Dr,Prof,Mr,Mrs,Ms" />
                <IonIcon style={{ color: "grey", marginLeft: "10px", marginTop: "72px", position: 'absolute', height: '30px', width: '30px' }} size="large" icon={businessOutline} />
                <IonIcon style={{ color: "grey", marginTop: "-40px", marginLeft: "365px", height: '30px', width: '30px' }} size="large" icon={closeCircleOutline} />
                <br />
                <input style={{ position: "relative", fontSize: "20px" }} type="text" placeholder="John" />
                <IonIcon style={{ color: "grey", marginLeft: "10px", marginTop: "130px", position: 'absolute', height: '30px', width: '30px' }} size="large" icon={personOutline} />
                <IonIcon style={{ color: "grey", marginTop: "-40px", marginLeft: "365px", height: '30px', width: '30px' }} size="large" icon={closeCircleOutline} />
                <br />
                <input style={{ position: "relative", fontSize: "20px" }} type="text" placeholder="Blake" />
                <IonIcon style={{ color: "grey", marginTop: "190px", marginLeft: "10px", position: 'absolute', height: '30px', width: '30px' }} size="large" icon={personOutline} />
                <IonIcon style={{ color: "grey", marginTop: "-40px", marginLeft: "365px", height: '30px', width: '30px' }} size="large" icon={closeCircleOutline} />
                <br />
                <input style={{ fontSize: "20px" }} type="text" placeholder="Role eg CEO,Secretary,Manager" />
                <IonIcon style={{ color: "grey", marginTop: "245px", marginLeft: "10px", position: 'absolute', height: '30px', width: '30px' }} size="large" icon={schoolOutline} />
                <IonIcon style={{ color: "grey", marginTop: "-40px", marginLeft: "365px", height: '30px', width: '30px' }} size="large" icon={closeCircleOutline} />

                <br />
                <input style={{ position: "relative", fontSize: "20px" }} type="text" placeholder="Office Number" />
                <IonIcon style={{ color: "grey", marginTop: "305px", marginLeft: "10px", position: 'absolute', height: '30px', width: '30px' }} size="large" icon={callOutline} />
                <IonIcon style={{ color: "grey", marginTop: "-40px", marginLeft: "365px", height: '30px', width: '30px' }} size="large" icon={closeCircleOutline} />
                <br />
                <input style={{ fontSize: "20px" }} type="text" placeholder="+27 | XXXXXXXXXX" />
                <IonIcon style={{ color: "grey", marginTop: "360px", marginLeft: "10px", position: 'absolute', height: '30px', width: '30px' }} size="large" icon={phonePortraitOutline} />
                <IonIcon style={{ color: "grey", marginTop: "-40px", marginLeft: "365px", height: '30px', width: '30px' }} size="large" icon={closeCircleOutline} />
                <br />
                <input style={{ fontSize: "20px" }} type="text" placeholder="+27 | XXXXXXXXXX" />
                <IonIcon style={{ color: "grey", marginTop: "423px", marginLeft: "10px", position: 'absolute', height: '30px', width: '30px' }} size="large" icon={logoWhatsapp} />
                <IonIcon style={{ color: "grey", marginTop: "-40px", marginLeft: "365px", height: '30px', width: '30px' }} size="large" icon={closeCircleOutline} />
                <br />
                <input style={{ fontSize: "20px" }} type="text" placeholder="Email address" />
                <IonIcon style={{ color: "grey", marginTop: "480px", marginLeft: "10px", position: 'absolute', height: '30px', width: '30px' }} size="large" icon={mailOutline} />
                <IonIcon style={{ color: "grey", marginTop: "-40px", marginLeft: "365px", height: '30px', width: '30px' }} size="large" icon={closeCircleOutline} />
                <br />
                <input style={{ fontSize: "20px" }} type="text" placeholder="Website" />
                <IonIcon style={{ color: "grey", marginTop: "540px", marginLeft: "10px", position: 'absolute', height: '30px', width: '30px' }} size="large" icon={globeOutline} />
                <IonIcon style={{ color: "grey", marginTop: "-40px", marginLeft: "365px", height: '30px', width: '30px' }} size="large" icon={closeCircleOutline} />


                <br />
                <input style={{ fontSize: "20px" }} type="text" placeholder="Physical address" />
                <IonIcon style={{ color: "grey", marginTop: "600px", marginLeft: "10px", position: 'absolute', height: '30px', width: '30px' }} size="large" icon={locationOutline} />
                <IonIcon style={{ color: "grey", marginTop: "-40px", marginLeft: "365px", height: '30px', width: '30px' }} size="large" icon={closeCircleOutline} />
                <br />
                <input style={{ fontSize: "20px" }} type="text" placeholder="GPS Cordinates" />
                <IonIcon style={{ color: "grey", marginTop: "655px", marginLeft: "10px", position: 'absolute', height: '30px', width: '30px' }} size="large" icon={locateOutline} />
                <IonIcon style={{ color: "grey", marginTop: "-40px", marginLeft: "365px", height: '30px', width: '30px' }} size="large" icon={closeCircleOutline} />
                <br />
                <input style={{ fontSize: "20px" }} type="text" placeholder="facebook" />
                <IonIcon style={{ color: "grey", marginTop: "715px", marginLeft: "10px", position: 'absolute', height: '30px', width: '30px' }} size="large" icon={logoFacebook} />
                <IonIcon style={{ color: "grey", marginTop: "-40px", marginLeft: "365px", height: '30px', width: '30px' }} size="large" icon={closeCircleOutline} />
                <br />
                <input style={{ fontSize: "20px" }} type="text" placeholder="Instagram" />
                <IonIcon style={{ color: "grey", marginTop: "770px", marginLeft: "10px", position: 'absolute', height: '30px', width: '30px' }} size="large" icon={logoInstagram} />
                <IonIcon style={{ color: "grey", marginTop: "-40px", marginLeft: "365px", height: '30px', width: '30px' }} size="large" icon={closeCircleOutline} />
                <br />
                <input style={{ fontSize: "20px" }} type="text" placeholder="Twitter" />
                <IonIcon style={{ color: "grey", marginTop: "830px", marginLeft: "10px", position: 'absolute', height: '30px', width: '30px' }} size="large" icon={logoTwitter} />
                <IonIcon style={{ color: "grey", marginTop: "-40px", marginLeft: "365px", height: '30px', width: '30px' }} size="large" icon={closeCircleOutline} />
                <br />
                <input style={{ fontSize: "20px" }} type="text" placeholder="Linkdin" />
                <IonIcon style={{ color: "grey", marginTop: "890px", marginLeft: "10px", position: 'absolute', height: '30px', width: '30px' }} size="large" icon={logoLinkedin} />
                <IonIcon style={{ color: "grey", marginTop: "-40px", marginLeft: "365px", height: '30px', width: '30px' }} size="large" icon={closeCircleOutline} />
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", }} >
                <IonButton style={{ color: "grey", backgroundColor: "#f5aeb1", borderRadius: "18px", }} color="danger" shape="round" fill="outline">+   Add more field</IonButton>
            </div>

            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                <IonButton style={{ color: "grey", width: "400px", marginRight: "24px", height: "70px", fontSize: "40px" }} color="danger">Save Card</IonButton>
            </div>
            {/* <AddField /> */}
        </div>

    )
}
