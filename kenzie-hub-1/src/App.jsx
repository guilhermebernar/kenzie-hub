import RoutesMain from "./routes/Routes";
import Global from "./style/Global";
import './App.css'
import ContextsProvider from "./providers/Context";

function App() {
  return (
    <div className="App">
      <ContextsProvider>
        <Global/>
        <RoutesMain/>
      </ContextsProvider>
    </div>
  );
}

export default App;
