import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import routes from "./routes";

const App = () => {
  const token = false;
  return(
    <BrowserRouter>
      <Routes>
        {
          routes.map(item => {
            if(item.needsLogin){
              return  <Route path={item.path} element={token ? <item.element/> : <Navigate to='/'/>}/> 
            }
            else{
              return  <Route path={item.path} element={!token ? <item.element/> : <Navigate to='/principal'/>} />
            }
          })
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;