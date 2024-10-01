import "./App.css";
import Board from "../src/components/Board/Board";
import { GroupByProvider } from "./utils/GroupByContext";
import { SortingProvider } from "./utils/SortingContext";

function App() {
  return (
    <div className="App">
      <SortingProvider>
        <GroupByProvider>
          <Board />
        </GroupByProvider>
      </SortingProvider>
    </div>
  );
}

export default App;
