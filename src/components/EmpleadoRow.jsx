import EmpleadoAvatar from "./EmpleadoAvatar";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const EmpleadoRow = ({empleados}) => {
    return (
        <div className="row justify-content-center my-2 border border-bottom">
            <EmpleadoAvatar empleados={empleados}></EmpleadoAvatar>
            <div className="col-7 col-lg-9">
<h6 className="mt-2 fw-bold">{empleados.fullName}</h6>
<div className="d-flex mb-2">
<p className="align-content-center mb-0 me-2 text-muted">{empleados.title}</p>
<button className="btn btn-info">{empleados.department}</button>
</div>
            </div>
        </div>
    );
};

export default EmpleadoRow;