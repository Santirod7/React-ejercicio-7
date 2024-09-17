
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import EmpleadoRow from './EmpleadoRow';

const EmpleadoList = () => {
    const empleados = [
        { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business",
        pic: "data:image/jpeg;base64,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" },
        { id: 2, fullName: "Astryd Vallés", title: "CMO", department:
        "Marketing", pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUlI02ZZLqCTHS5_B5LzP7oOtcSO0RneahdWRRS9WjE9meydG7PTerYtyk-Aqy7bDzAIs&usqp=CAU" },
        { id: 3, fullName: "Shantell Meza", title: "CFO", department:
        "Business", pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnYOyZ8gcSr2YePdBkJ_6b4pY3oWfPGY7R5c0pR_5rbZtS4UL2hqLkJV_qY1jPbG99Lzw&usqp=CAU" },
        { id: 4, fullName: "Sergio Ocampo", title: "CTO", department:
        "Engineering", pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeeEoDiWmK8yQRiPz9Q5eZuS2rYYRXuaXhPw&s" },
        { id: 5, fullName: "Ares Jiménez", title: "Art Director", department:
        "Marketing", pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRETQQ5s7ZQajB5te9tfD-CU0lmlDvmPwy6fOUzlU5uzQ1DCbPbhkvWC7SANuYOmi9EhQA&usqp=CAU" },
        { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department:
        "Engineering", pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdAJhyW4mo4roQEzKIOGaXrsbBVa7nM6dUSQ&s" },
        { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist",
        department: "Marketing", pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxgC3RcNO9ePX0VaHrC9SqfUj9s-LHBfDWIA&s" },
        { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department:
        "Engineering", pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPoepH-3dPFngUf1W5-trsEib0rO2owyfZtA&s" },
        { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department:
        "Engineering", pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTueYZx47o8h4tEpHbsqCSWKgRB7A0Uau9lg&s" },
        ]
    return (
        <section className="container border border-1 border-bottom">
            {
                empleados.map((empleados)=><EmpleadoRow key={empleados.id} empleados={empleados}></EmpleadoRow>  )
            }
        </section>
    );
};

export default EmpleadoList;