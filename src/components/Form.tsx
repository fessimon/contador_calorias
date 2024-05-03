import { categories } from "../data/categorias"

const Form = () => {
    return (
        <form
            className="spcace-y-5 bg-white shadow p-10 rounded-lg">
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name" className="font-bold">Categoria:</label>
                <select
                    className="border border-gray-300 p-2 rounded-xl w-full"
                    id="name">
                    {categories.map(category => (
                        <option key={category.id}
                            value={category.id}

                        >
                            {category.name}
                        </option>
                    ))}

                </select>
            </div>
            <div className="grid grid-cols-1 gap-3 pt-6">
                <label htmlFor="activity" className="font-bold">Actividad:</label>
                <input
                    type="text"
                    id="activity"
                    className="border border-gray-300 p-2 rounded-xl w-full"
                    placeholder="Ej. Comida, Jugo de naranja, Ejercicios, Pesas, etc." />
            </div>
            <div className="grid grid-cols-1 gap-3 pt-6">
                <label htmlFor="calories" className="font-bold">Calorias:</label>
                <input
                    type="number"
                    id="calories"
                    className="border border-gray-300 p-2 rounded-xl w-full"
                    placeholder="Ej. 200, 500, 750, 1000" />
            </div>
            <div className="pt-2">
                <input
                    type="submit"
                    value="Guardar Comida o Ejercicio"
                    className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer rounded-lg" />
            </div>


        </form>
    )
}

export default Form