import { BrowserRouter, Routes, Route } from "react-router-dom";
import TrainStatusView from "./TrainStatus/index";
import TrainForm from "./TrainStatus/TrainForm";
import Welcome from "./Welcome";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/status" element={<TrainStatusView />}></Route>
          <Route path="/form" element={<TrainForm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
