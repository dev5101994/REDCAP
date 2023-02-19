import React from 'react'

import { mailOpenOutline, keyOutline } from 'ionicons/icons';
import { IonImg } from '@ionic/react';
import { IonButton, IonIcon } from '@ionic/react';
export default function VCard() {
    return (
        <div>

            {/* <div style={{ display: 'flex', justifyContent: 'center', width: '939px' }}> */}
            <div style={{ marginTop: "-70px" }}>
                {/* <IonImg style={{ position: 'relative', width: '760px', height: '409px' }} src="assets/image/a.png" ></IonImg> */}
                <IonImg style={{ position: 'relative', width: "auto", textAlign: "center" }} src="assets/image/a.png" ></IonImg>
                <IonImg style={{ position: 'absolute', width: "202px", marginTop: "-290px", marginLeft: "280px" }} src="assets/image/Vector.png" ></IonImg>
                {/* <IonImg style={{ position: 'absolute', width: "auto", display: "flex", justifyContent: "center", marginTop: "-690px", height: "500px", marginLeft: "480px" }} src="assets/image/Vector.png" ></IonImg> */}

                {/* <h1 style={{ color: "red", fontSize: "45px", display: "flex", justifyContent: "center" }}>Welcome back</h1> */}

                <div className="red">
                    <h1>Welcome to V-Card</h1>
                </div>
            </div>

            {/* <div className="input"> */}

            {/* <div className="inputt"> */}

            <input style={{ borderRadius: "8px", position: "absolute", width: "465px", height: "63px" }} type="text" placeholder="FirstName" />
            {/* <IonIcon style={{ position: "relative", marginLeft: "20px" }} size="large" icon={mailOpenOutline} /> */}


            <input style={{ borderRadius: "8px", position: "absolute", width: "465px", height: "63px" }} type="text" placeholder="FirstName" />
            {/* <IonIcon style={{ position: "relative", marginLeft: "20px" }} size="large" icon={mailOpenOutline} /> */}

            {/* </div> */}



            {/* </div> */}



        </div>
    )
}
