import {
  IonButton,
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { useSelector } from 'react-redux';
import ExpenseCard from '../components/ExpenseCard';
import { RootState } from '../redux/store';
import './List.css';

const List: React.FC = () => {
  const expenses = useSelector((state: RootState) => state.items);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>List of Expenses</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">List of Expenses</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {expenses.map(expense => <ExpenseCard expense={expense} />)}
        </IonList>
        <IonButton routerLink='/form'>Add Expense</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default List;
