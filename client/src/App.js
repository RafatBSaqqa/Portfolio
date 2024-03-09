import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routers";
function App() {
  return (
    <RouterProvider router={router} />
    // <div className="App">
    //   <header className="App-header">

    //   </header>
    // </div>
  );
}

export default App;
