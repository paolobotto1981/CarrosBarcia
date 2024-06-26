import  { useState } from "react";
import axios from "axios";

function ProductCreate() {
    const [product, setProduct] = useState({
        descripcion: "",
        alto: "",
        ancho: "",
        profundidad: "",
        precio: ""
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Limpiar cualquier error anterior

        try {
            const response = await axios.post("http://localhost:8000/create.php", product, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (response.data.status === "success") {
                alert("Producto creado exitosamente!");
                setProduct({
                    descripcion: "",
                    alto: "",
                    ancho: "",
                    profundidad: "",
                    precio: ""
                });
            } else {
                throw new Error("Error al crear el producto.");
            }
        } catch (error) {
            console.error("Error:", error);
            setError("Hubo un error al crear el producto. Inténtalo nuevamente.");
        }
    };

    return (
        <div className="container mt-5">
            <h2>Crear Producto</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">Descripción</label>
                    <input type="text" className="form-control" id="descripcion" name="descripcion" value={product.descripcion} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="alto" className="form-label">Alto</label>
                    <input type="number" className="form-control" id="alto" name="alto" value={product.alto} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="ancho" className="form-label">Ancho</label>
                    <input type="number" className="form-control" id="ancho" name="ancho" value={product.ancho} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="profundidad" className="form-label">Profundidad</label>
                    <input type="number" className="form-control" id="profundidad" name="profundidad" value={product.profundidad} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="precio" className="form-label">Precio</label>
                    <input type="number" className="form-control" id="precio" name="precio" value={product.precio} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Crear Producto</button>
                {error && <div className="alert alert-danger mt-3">{error}</div>}
            </form>
        </div>
    );
}

export default ProductCreate;

