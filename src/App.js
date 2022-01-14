import { CssBaseline } from '@material-ui/core';
import Header from './components/Header/Header';
import MapApi from './components/Map/Map';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <MapApi />
    </>
  );
};

export default App;
