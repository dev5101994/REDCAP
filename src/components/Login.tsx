import React from 'react'
// import './Login.css';
// import Login from ''

// import './Login.css';
import { mailOpenOutline, keyOutline } from 'ionicons/icons';


import { IonImg } from '@ionic/react';
import { IonButton, IonIcon, } from '@ionic/react';
export default function Login() {
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
                    <h1>Welcome back</h1>
                </div>
            </div>

            <div className="input">
                <IonIcon style={{ color: "grey", position: 'absolute', marginTop: "-119px", marginLeft: "20px" }} size="large" icon={mailOpenOutline} />
                <input type="text" placeholder="Email" />
                <IonIcon style={{ color: "grey", position: 'absolute', marginTop: "72px", marginLeft: "20px" }} size="large" icon={keyOutline} />
                <input type="text" placeholder="Password" />

            </div>

            {/* <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", justifyContent: "space-around" }}> */}
            {/* <IonIcon style={{ color: "grey", position: 'absolute', marginTop: "-119px", marginLeft: "20px" }} size="large" icon={mailOpenOutline} />
            <input type="text" placeholder="Email" />
            <IonIcon style={{ color: "grey", position: 'absolute', marginTop: "72px", marginLeft: "20px" }} size="large" icon={keyOutline} />
            <input type="text" placeholder="Password" /> */}
            {/* </div> */}

            {/* <h1 style={{ color: "red", display: "flex", justifyContent: "flex-end", marginRight: "80px", marginTop: "-10px" }}>Forget Password?</h1> */}
            <IonButton routerLink="/forgotPassword" style={{ color: "red", display: "flex", justifyContent: "flex-end", marginLeft: "339px", marginTop: "-10px", fontSize: "30px" }} fill="clear">Forget Password?</IonButton>

            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginRight: "60px", marginLeft: "60px", height: "150px" }}>

                <IonButton color="danger"> Login</IonButton>
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                <h1>Don't have an account? </h1>
                <h1 style={{ color: "red" }}>Sign Up</h1>
            </div>

        </div>
    )
}
