import Container from "react-bootstrap/esm/Container"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Heading from "./components/Heading"
import HomePage from "./pages/HomePage"
import UserForm from "./components/forms/UserForm"
import LoginForm from "./components/forms/login"
import FormPage from "./pages/FormPage"
import Logout from "./components/Logout"
import AllUsersPage from "./pages/AllUsersPage"
import Users from "./components/Users"


function App(): JSX.Element {

  return (
    <Container>
      <BrowserRouter>
        <Heading />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/users' element={<AllUsersPage><Users/></AllUsersPage>} />
          <Route path='/register' element={<FormPage><UserForm edit={false} /></FormPage>}/>
          <Route path='/login' element={<FormPage><LoginForm /></FormPage>}/>
          <Route path='/logout' element={<Logout />}/>
          <Route path='*' element={<Navigate to='/' />}/>
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App
