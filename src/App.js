import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomeScreen from "./screens/HomeScreen";
import UserScreen from "./screens/UserScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomeScreen />} />
          <Route path='/users' element={<UserScreen />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
