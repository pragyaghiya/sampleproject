import { BrowserRouter,Route,Routes } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import Login from "./pages/Login";
import { AuthProvider } from "./utils/auth";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <AuthProvider>
         <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/search" element={ <RequireAuth><Home/></RequireAuth>}/>

          </Routes>
      
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
