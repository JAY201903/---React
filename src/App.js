import "./style/reset.css";
import "./style/global.css";
import RouterConfig from './routers/index'
import {Route, Switch, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <RouterConfig />
    </div>
    </BrowserRouter>
  );
}

export default App;
