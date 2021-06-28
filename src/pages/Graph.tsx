import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
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
        <ExploreContainer name="Graph page" />
        {/* <LineChart /> */}
      </IonContent>
    </IonPage>
  );
};

export default Graph;
