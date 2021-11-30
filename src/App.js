import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './styles/global.css';
import routes from "./routes";
import  Private  from "./routes/Private.jsx";
import  Public  from "./routes/Public";
import {CookiesProvider} from 'react-cookie';

const App = () => {
  return(
    <main>
      <CookiesProvider>
      <BrowserRouter>
        <Routes>
          {
            routes.map((item, key) => {
              if(item.needsLogin){
                return  <Route key={key} path={item.path} element={<Private><item.element/></Private>}/> 
              }
              else{
                return  <Route key={key} path={item.path} element={<Public><item.element/></Public>} />
              }
            })
          }
        </Routes>
      </BrowserRouter>
      </CookiesProvider>
    </main>
    
  );
}

export default App;