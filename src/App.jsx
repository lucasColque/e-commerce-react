
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Section from './pages/Section';
import Home from "./pages/Home"
import Register from './pages/Register';
import Login from './pages/Login';
import DetailCharacter from './pages/DetailCharacter';
import PasswordRecoveryPage from './pages/PasswordRecoveryPage';
function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/catalogo" element={<Section/>} />
                    <Route path="/catalogo/:name" element={<Section/>} />
                    <Route path="/registro" element={<Register/>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/ingresar" element={<Login />} />
                    <Route path="/detailCharacter/:id" element={<DetailCharacter />} />
                    <Route path="/recuperarCuenta" element={<PasswordRecoveryPage />} />

                    



                    <Route path="/contacto" element />
                </Routes>

            </Router>
        </>

    );
}

export default App;
