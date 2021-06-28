import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonList, IonNote, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import './List.css';

const List: React.FC = () => {
  const expenses = useSelector((state: RootState) => state.items);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">List</IonTitle>
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
        <IonButton routerLink='/form'>Add Expense</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default List;
