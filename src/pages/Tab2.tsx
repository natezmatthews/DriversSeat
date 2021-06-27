import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { recordExpense } from '../redux/expenses';
import { Category } from '../sharedTypes';
import './Tab2.css';

const Tab2: React.FC = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState<string>();
  const [cost, setCost] = useState<number>();
  const [category, setCategory] = useState<Category>();
  const [note, setNote] = useState<string>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Enter Expense</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonItem>
            <IonLabel>Name</IonLabel>
            <IonInput value={name} placeholder="Enter Name" onIonChange={e => setName(e.detail.value!)} clearInput></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel>Cost</IonLabel>
            <IonInput type="number" value={cost} placeholder="Select Cost in Dollars" onIonChange={e => setCost(parseInt(e.detail.value!, 10))}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel>Category</IonLabel>
            <IonSelect value={category} placeholder="Select One" onIonChange={e => setCategory(e.detail.value)}>
              {
                Object.keys(Category).map((key) => {
                  return <IonSelectOption value={key}>{key}</IonSelectOption>
                })
              }
            </IonSelect>
          </IonItem>

          <IonItemDivider>Note</IonItemDivider>
          <IonItem>
            <IonInput value={note} placeholder="Enter Note" onIonChange={e => setNote(e.detail.value!)} clearInput></IonInput>
          </IonItem>
        </IonList>
        <IonButton
          onClick={() => dispatch(
            recordExpense({
              name: name!,
              cost: cost!,
              category: category!,
              note: note!
            })
          )}
        >
          Submit expense
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
