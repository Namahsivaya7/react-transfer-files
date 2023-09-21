import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./App.css";
import TodoApp from "./TodoApp";
import TabedPanel from "./TabbedPanel";
import TrasferList from "./components/TransferList";

function App() {
  return (
    <div className="App">
      {/* <TodoApp /> */}
      {/* {<TabedPanel />} */}
      <TrasferList />
    </div>
  );
}

export default App;
