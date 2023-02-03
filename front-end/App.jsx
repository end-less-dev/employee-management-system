import Emplist from "./Employee/Emplist";
import Header from "./Employee/Header";
import Footer from "./Employee/Footer";
import CreateEmp from "./Employee/CreateEmp";
import UpdateEmp from "./Employee/UpdateEmp";
import ViewEmp from "./Employee/ViewEmp";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


const App = ()=>{
return(
    <>
        <Router>
            <Header/>
            <br />
            <Routes>
                <Route path="/"  element={<Emplist/>}/>
                <Route path="/employees" element={<Emplist/>}/>
                <Route path="/add-employees"  element={<CreateEmp/>}/>
                <Route path="/update-employees/:id" element={<UpdateEmp/>}/>
                <Route path="/view-employee/:id" element={<ViewEmp/>}/>
            </Routes>
            <br />
            <Footer/>
        </Router>
    </>
)
}
export default App;