export const Busqueda = ({componentes}) => {
    return (
        <div className="grid gap-4 grid-cols-1 w-full py-4 sm:grid-cols-4 sm:px-16">
            {componentes.map(componente => (
                <div key={componente.id} className="bg-gray-100 p-4 rounded-md shadow">
                    <h2 className="text-lg font-bold">{componente.name}</h2>
                    <p>Precio: ${componente.precio}</p>
                    <p>Cantidad: {componente.cantidad}</p>
                    <p>Descripción: {componente.description}</p>
                </div>
            ))}
        </div>
    )
}