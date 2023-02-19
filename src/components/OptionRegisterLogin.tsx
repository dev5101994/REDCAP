import React from 'react'
import { IonImg } from '@ionic/react';
import { IonButton, IonIcon } from '@ionic/react';
export default function SignUp() {
    return (
        <div>

            {/* <div style={{ display: 'flex', justifyContent: 'center', width: '939px' }}> */}
            <div>
                {/* <IonImg style={{ position: 'relative', width: '760px', height: '409px' }} src="assets/image/a.png" ></IonImg> */}
                <IonImg style={{ position: 'relative', width: "auto", textAlign: "center" }} src="assets/image/a.png" ></IonImg>
                <IonImg style={{ position: 'absolute', width: "202px", marginTop: "-290px", marginLeft: "280px" }} src="assets/image/Vector.png" ></IonImg>
                {/* <IonImg style={{ position: 'absolute', width: "auto", display: "flex", justifyContent: "center", marginTop: "-690px", height: "500px", marginLeft: "480px" }} src="assets/image/Vector.png" ></IonImg> */}


                <h1 style={{ fontSize: "45px", fontWeight: "bold", color: "red", display: "flex", flexDirection: "row", justifyContent: "center", fontFamily: "monospace" }}>R<p style={{ color: "grey", marginTop: "0px" }}>ED</p></h1>
                <h1 style={{ marginTop: "-39px", fontSize: "45px", fontWeight: "bold", color: "red", display: "flex", flexDirection: "row", justifyContent: "center", fontFamily: "monospace" }}>C<p style={{ color: "grey", marginTop: "0px" }}>APE</p></h1>
                <h1 style={{ marginTop: "-39px", fontSize: "45px", fontWeight: "bold", color: "red", display: "flex", flexDirection: "row", justifyContent: "center", fontFamily: "monospace" }}>T<p style={{ color: "grey", marginTop: "0px" }}>ECH</p></h1>

            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginRight: "60px", marginLeft: "60px", height: "150px" }}>
                <IonButton routerLink="/signUp" color="danger">I want to Register</IonButton>
                <IonButton routerLink="/login" color="danger">I want to Login</IonButton>
            </div>
            {/* </div> */}


        </div>
    )
}
