import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonLabel } from "@ionic/react"
import { Expense } from "../sharedTypes"

const ExpenseCard: React.FC<{ expense: Expense }> = ({ expense }) => {
    return (
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>{(new Date(expense.date)).toDateString()}</IonCardSubtitle>
            <IonCardTitle>{expense.name}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonLabel color="secondary">{`$${expense.cost}.00`}</IonLabel><br></br>
            <IonLabel color="primary"><strong>{'Category: '}</strong>{expense.category}</IonLabel><br></br>
            <IonLabel>{expense.note}</IonLabel>
          </IonCardContent>
        </IonCard>
      )
}

export default ExpenseCard