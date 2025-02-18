import './App.css'
import Body from './Compontent/Body'
import Form from './Compontent/Form'
// import './responsive.css';
import NavBar from './Compontent/NavBar'
import { ModalProvider } from './modalContext'

function App() {
 
  return (
    <div className='container-fluid'>
      <ModalProvider>
        
    <NavBar/>
    {/* <Form/> */}
    <Body/>

    </ModalProvider>
    </div>
  )
}

export default App
