import {Link} from 'react-router-dom';

const Redireccion = () =>{
    return(
        <div className="container">
            <Link to="/">Inicio</Link> | 
            <Link to="/home">Home</Link> | 
            <Link to="/ubicacion">Donde estamos</Link>
            <br/>
        </div>
    )
}
export default Redireccion;