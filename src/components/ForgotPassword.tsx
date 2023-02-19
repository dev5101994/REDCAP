import React from 'react'
// import './Login.css';
// import Login from ''

import './ForgotPassword.css';
import { mailOpenOutline, keyOutline } from 'ionicons/icons';


import { IonImg } from '@ionic/react';
import { IonButton, IonIcon } from '@ionic/react';
export default function ForgotPassword() {
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
                    <h1>Forgot Password</h1>
                </div>
                <div className='para1'>
                    <p>Type your email,we will send you verification code</p>
                    <p> verification code</p>
                </div>
            </div>

            <div className="input">
                <IonIcon style={{ color: "grey", position: 'absolute', marginTop: "-30px", marginLeft: "20px" }} size="large" icon={mailOpenOutline} />
                <input type="text" placeholder="Email" />
                {/* <IonIcon style={{ color: "grey", position: 'absolute', marginTop: "72px", marginLeft: "20px" }} size="large" icon={keyOutline} />
                <input type="text" placeholder="Password" /> */}
            </div>

            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginRight: "60px", marginLeft: "60px", height: "150px" }}>

                <IonButton routerLink="/verify" color="danger"> Submit</IonButton>
            </div>


        </div>
    )
}
