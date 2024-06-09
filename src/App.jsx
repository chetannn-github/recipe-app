import { Outlet, createBrowserRouter } from 'react-router-dom'
import './App.css';
import SideBar from './Components/SideBar';
import Recomended from './Components/Recomended';
import Favourites from './Components/Favourites';
import useReciepe from './utils/customHooks/useReciepe';

 export const appRouter = createBrowserRouter([{
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Recomended/>,
      },
      {
        path:"/favs",
        element:<Favourites/>
      }
    ]
 }]);

function App() {
    useReciepe();

  return (
    <div id='main'>
      <SideBar/>
      <Outlet/>
    </div>
  )
}

export default App
