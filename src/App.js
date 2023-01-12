import logo from './logo.svg';
import './Sass/main.css';
import Header from './Component/Header'
import {Provider} from 'react-redux'
import store from './Store/store';

function App() {
  return (
    <>
    <Provider store={store}>
      <Header/>
    </Provider>
    </>
  );
}

export default App;
