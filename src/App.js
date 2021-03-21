
import './App.css';
import Titulo from './components/Titulo';
import 'bootstrap/dist/css/bootstrap.min.css';
import Subtitulo from './components/Subtitulo';
import FormTareas from './components/FormTareas';

function App() {
  return (
    <div>
        <Titulo></Titulo>
        <Subtitulo comision='5A' prueba={true}></Subtitulo>
        <FormTareas></FormTareas>
    </div>
  );
}

export default App;
