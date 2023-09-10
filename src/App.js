import './App.css';
import { 
  Route, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements } from 'react-router-dom';

//layouts
import RootLayout from './components/layouts/RootLayout'

//components
import Home from './components/pages/Home'
import About from './components/pages/About'
import NotFound from './components/pages/NotFound';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path='*' element={<NotFound/>}/>
   </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
