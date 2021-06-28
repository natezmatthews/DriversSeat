import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Graph from './pages/Graph';
import Form from './pages/Form';
import List from './pages/List';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

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
            <IonIcon icon={ellipse} />
            <IonLabel>List</IonLabel>
          </IonTabButton>
          <IonTabButton tab="form" href="/form">
            <IonIcon icon={square} />
            <IonLabel>Form</IonLabel>
          </IonTabButton>
          <IonTabButton tab="graph" href="/graph">
            <IonIcon icon={triangle} />
            <IonLabel>Graph</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
