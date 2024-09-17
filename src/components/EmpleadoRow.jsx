import EmpleadoAvatar from "./EmpleadoAvatar";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const EmpleadoRow = ({empleados}) => {
    return (
        <div className="row justify-content-center">
            <EmpleadoAvatar empleados={}></EmpleadoAvatar>
            <div className="col-7">
<h6 className="mt-2">{empleados.fullName}</h6>
<div className="d-flex mb-2">
<p className="align-content-center mb-0 me-2">Cargo</p>
<button className="btn btn-info">colorsito</button>
</div>
            </div>
        </div>
    );
};

export default EmpleadoRow;