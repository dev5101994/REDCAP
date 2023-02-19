import React from 'react'
import { IonImg } from '@ionic/react';
import { IonInput } from '@ionic/react';
import { mailOpenOutline, personOutline, mailOutline } from 'ionicons/icons';
import { IonButton, IonIcon } from '@ionic/react';

import './SignUp.css';
export default function SignUp() {
    return (
        <>
            <div>
                <IonImg style={{ position: 'relative', width: "auto", textAlign: "center", marginTop: "-30px" }} src="assets/image/a.png" ></IonImg>
                <IonImg style={{ position: 'absolute', width: "202px", marginTop: "-290px", marginLeft: "280px" }} src="assets/image/Vector.png" ></IonImg>

                <h1 style={{ fontSize: "40px", color: "red", display: "flex", flexDirection: "row", justifyContent: "center", }}>Welcome to V-Card</h1>
            </div>

            <div style={{ display: "flex", flexDirection: "column", marginLeft: "172px" }}>
                <input style={{ position: 'relative', width: '400px', border: '2px solid', height: "55px", borderRadius: '20px' }}
                    type="text" placeholder="First Name" />
                {/* <IonIcon style={{ position: "absolute", marginLeft: "40px" }} size="large" icon={personOutline} /> */}
                <br />
                <input style={{ position: 'relative', width: '400px', border: '2px solid', height: "55px", borderRadius: '20px' }}
                    type="text" placeholder="Last Name" />
                {/* <IonIcon style={{ position: "absolute", marginLeft: "40px" }} size="large" icon={personOutline} /> */}

                <br />
                <input style={{ position: 'relative', width: '400px', border: '2px solid', height: "55px", borderRadius: '20px' }}
                    type="text" placeholder="Email" />
                {/* <IonIcon style={{ position: "absolute", marginLeft: "40px" }} size="large" icon={mailOutline} /> */}
                <br />
                <input style={{ width: '400px', border: '2px solid', height: "55px", borderRadius: '20px' }}
                    type="text" placeholder="XXXXXX" />
                <br />
                <input style={{ width: '400px', border: '2px solid', height: "55px", borderRadius: '20px' }}
                    type="text" placeholder="Password" />
                <br />
                <input style={{ width: '400px', border: '2px solid', height: "55px", borderRadius: '20px' }}
                    type="text" placeholder="Comfirm Password" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginRight: "60px", marginLeft: "60px", height: "150px" }}>

                <IonButton color="danger"> SignUp</IonButton>
            </div>

        </>
    )
}
