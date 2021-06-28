import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import D3 from '../components/D3';
import './Graph.css';

const Graph: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Graph</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Graph</IonTitle>
          </IonToolbar>
        </IonHeader>
        <D3 />
      </IonContent>
    </IonPage>
  );
};

export default Graph;
