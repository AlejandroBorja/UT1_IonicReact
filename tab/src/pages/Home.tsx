import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  const [mensaje, setMensaje] = useState("Hola mundo");

  const cambiarMensaje = () => {
    setMensaje(mensaje === "Hola mundo" ? "Hola clase" : "Hola mundo");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic con React</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>{mensaje}</h1>
        <IonButton onClick={cambiarMensaje}>Cambiar Mensaje</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
