import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/typography.css';
import { addCircleOutline, barChartOutline, listOutline } from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';
import Form from './pages/Form';
import Graph from './pages/Graph';
import List from './pages/List';
/* Theme variables */
import './theme/variables.css';





const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/list">
            <List />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route exact path="/graph">
            <Graph />
          </Route>
          <Route exact path="/">
            <Redirect to="/list" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="list" href="/list">
            <IonIcon icon={listOutline} />
            <IonLabel>List</IonLabel>
          </IonTabButton>
          <IonTabButton tab="form" href="/form">
            <IonIcon icon={addCircleOutline} />
            <IonLabel>Add Expense</IonLabel>
          </IonTabButton>
          <IonTabButton tab="graph" href="/graph">
            <IonIcon icon={barChartOutline} />
            <IonLabel>Graph</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
