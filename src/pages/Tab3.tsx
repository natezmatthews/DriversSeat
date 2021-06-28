import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonNote, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import './Tab3.css';

const Tab3: React.FC = () => {
  const expenses = useSelector((state: RootState) => state.items);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {expenses.map(expense => {
            return (
              <IonItem>
                <IonLabel>{expense.name}</IonLabel>
                <IonLabel>{expense.date}</IonLabel>
                <IonLabel>{expense.category}</IonLabel>
                <IonLabel>{expense.note}</IonLabel>
                <IonNote slot='end'>{`$${expense.cost}.00`}</IonNote>
              </IonItem>
            )
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
