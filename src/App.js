import logo from './logo.svg';
import './App.css';
import Layout from './Components/Layout/Layout';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Medicine from './container/Medicine/Medicine';
import Doctor from './container/Doctors/Doctor';

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path={"/medicine"} component={Medicine} />
          <Route exact path={"/doctor"} component={Doctor} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
