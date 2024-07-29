import './App.css'
import ListUserComponent from './component/ListUserComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserComponent from './component/UserComponent'
import Login from './views/login'
import Home from './views/home'
import Register from './views/register'

function App() {
  

  return (
    <>
      {/* Configure Routing */}
      <BrowserRouter>
          <Routes>
            {/* // http://localhost:5173 */}
              <Route path ='/' element = {<ListUserComponent/>}></Route>
            {/* // http://localhost:5173/users */}
              <Route path ='/users' element = {<ListUserComponent/>}></Route>
            {/* // http://localhost:5173/add-user */}
              <Route path ='/add-user' element = {<UserComponent/>}></Route>
            {/* // http://localhost:5173/edit-user */}
              <Route path ='/edit-user/:id' element = {<UserComponent/>}></Route>
            <Route path='/login' element = {<Login />}></Route>
            <Route path='/' element = {<Home />}></Route>
            <Route path='/register' element = {<Register />}></Route>
          </Routes>
          
      </BrowserRouter>
    </> 
  )
}

export default App
