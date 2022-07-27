import { Route, Routes } from "react-router-dom";
import Lists from "./pages/Lists";
import List from "./pages/List";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Lists />}>
          <Route path=":memId" element={<List />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
