import "./App.css";
import Navbar from "./Components/Navbar";
import Page from "./Components/Page";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Page />
    </Provider>
  );
}

export default App;
