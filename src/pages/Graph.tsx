import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Chart from '../components/Chart';
import './Graph.css';

const Graph: React.FC = () => {
  const monthName = (new Date()).toLocaleString('default', { month: 'long' });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{`Total Spending: ${monthName}`}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{`Total Spending: ${monthName}`}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Chart />
      </IonContent>
    </IonPage>
  );
};

export default Graph;
