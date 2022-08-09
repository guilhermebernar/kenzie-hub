import RoutesMain from "./routes/Routes";
import Global from "./style/Global";
import './App.css'
import AuthProvider from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Global/>
        <RoutesMain/>
      </AuthProvider>
    </div>
  );
}

export default App;
