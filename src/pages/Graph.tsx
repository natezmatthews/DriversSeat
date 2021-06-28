import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import LineChart from '../components/LineChart';
import D3 from '../components/D3';
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
        <D3 />
        {/* <LineChart /> */}
      </IonContent>
    </IonPage>
  );
};

export default Graph;
