import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../App.css'


const EmpleadoAvatar = ({empleados}) => {
    return (
        <div className='col-5 col-lg-3 d-flex justify-content-center'>
            <img className='tamañoimg' src={empleados.pic} alt={"imagen " + empleados.fullName} />
        </div>
    );
};

export default EmpleadoAvatar;