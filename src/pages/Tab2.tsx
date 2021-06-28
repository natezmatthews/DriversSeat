import {
  IonButton,
  IonContent,
  IonDatetime,
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
  IonToolbar,
  useIonToast
} from '@ionic/react';
import { isInteger, isString } from 'lodash';
import React, { useState } from 'react';
import unmetRequirements from '../helpers/unmetRequirements';
import { recordExpense } from '../redux/expenses';
import { AppDispatch, useAppDispatch } from '../redux/store';
import { Category } from '../sharedTypes';
import './Tab2.css';

function onClick(
  dispatch: AppDispatch,
  clearForm: () => void,
  presentToast: (message: string, duration: number) => void,
  name?: string,
  date?: string,
  cost?: number,
  category?: Category,
  note?: string
): void {
  const fieldNames = unmetRequirements({
    'Name': {
      value: name,
      validator: s => isString(s) && s.length > 0
    },
    'Date': {
      value: date,
      validator: s => isString(s) && s.length > 0
    },
    'Cost': {
      value: cost,
      validator: isInteger
    },
    'Category': {
      value: category,
      validator: c => Object.keys(Category).includes(c)
    }
  });
  if (fieldNames.length > 0) {
    presentToast(`Missing required fields: ${fieldNames.join(', ')}`, 5000);
  } else {
    dispatch(
      recordExpense({
        name: name!,
        date: date!,
        cost: cost!,
        category: category!,
        note: note!
      })
    )
    clearForm();
  }
}

const Tab2: React.FC = () => {
  const dispatch = useAppDispatch();
  const [present, _] = useIonToast();

  const [name, setName] = useState<string>();
  const [date, setDate] = useState<string>();
  const [cost, setCost] = useState<number>();
  const [category, setCategory] = useState<Category>();
  const [note, setNote] = useState<string>();

  function clearForm() {
    setName(undefined);
    setDate(undefined);
    setCost(undefined);
    setCategory(undefined);
    setNote(undefined);
  }

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
            <IonLabel>Date</IonLabel>
            <IonDatetime value={date} onIonChange={e => setDate(e.detail.value!)} />
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
          onClick={() =>
            onClick(
              dispatch,
              clearForm,
              present,
              name,
              date,
              cost,
              category,
              note
            )
          }
        >
          Submit expense
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
