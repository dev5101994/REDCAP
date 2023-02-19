import React from 'react'
// import './Login.css';
// import Login from ''

import './Verify.css';
import { mailOpenOutline, keyOutline } from 'ionicons/icons';


import { IonImg } from '@ionic/react';
import { IonButton, IonIcon } from '@ionic/react';
export default function Verify() {
    return (
        <div>

            {/* <div style={{ display: 'flex', justifyContent: 'center', width: '939px' }}> */}
            <div>
                {/* <IonImg style={{ position: 'relative', width: '760px', height: '409px' }} src="assets/image/a.png" ></IonImg> */}
                <IonImg style={{ position: 'relative', width: "auto", textAlign: "center" }} src="assets/image/a.png" ></IonImg>
                <IonImg style={{ position: 'absolute', width: "202px", marginTop: "-290px", marginLeft: "280px" }} src="assets/image/Vector.png" ></IonImg>
                {/* <IonImg style={{ position: 'absolute', width: "auto", display: "flex", justifyContent: "center", marginTop: "-690px", height: "500px", marginLeft: "480px" }} src="assets/image/Vector.png" ></IonImg> */}

                {/* <h1 style={{ color: "red", fontSize: "45px", display: "flex", justifyContent: "center" }}>Welcome back</h1> */}

                <div className="red">
                    <h1>Verify Code</h1>
                </div>
                <div style={{ display: "flex", justifyContent: "center", fontSize: "23px", }}>
                    <p>We have sent a verification to your</p>
                    <p>Email with ni****04@gmail.com</p>
                </div>
            </div>

            <div className="input">
                {/* <IonIcon style={{ color: "grey", position: 'absolute', marginTop: "-119px", marginLeft: "20px" }} size="large" icon={mailOpenOutline} /> */}
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />

            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <h1>Dont get the code? </h1>
                <h1 style={{ color: "red" }}>Resend</h1>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginRight: "60px", marginLeft: "60px", height: "150px" }}>

                <IonButton color="danger"> Verify Now</IonButton>
            </div>
            {/* <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                <h1>Don't have an account? </h1>
                <h1 style={{ color: "red" }}>Verify Now</h1>
            </div> */}

        </div>
    )
}
