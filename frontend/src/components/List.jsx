import  { useEffect, useState } from "react";
import axios from "axios";

const List = () => {
    const [carros, setCarros] = useState([]);

    useEffect(() => {
        // Realizar la solicitud HTTP al backend para obtener los datos de los carros
        axios.get("http://localhost:8000/read.php")
            .then((response) => {
                console.log("Respuesta del servidor:", response);
                setCarros(response.data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);

    return (
        <div className="container">
            <h1 className="text-center">Lista de Carros</h1>
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>Descripción</th>
                            <th>Alto</th>
                            <th>Ancho</th>
                            <th>Profundidad</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carros.map((carro) => (
                            <tr key={carro.id}>
                                <td className="px-8">{carro.id}</td>
                                <td className="px-8">{carro.descripcion}</td>
                                <td className="px-8">{carro.alto}</td>
                                <td className="px-8">{carro.ancho}</td>
                                <td className="px-8">{carro.profundidad}</td>
                                <td className="px-8">{carro.precio}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default List;
