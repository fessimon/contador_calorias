import { useState, ChangeEvent, FormEvent, Dispatch } from "react" //se importa ChangeEvent de react
import { Activity } from "../types/index"
import { categories } from "../data/categorias"
import { ActivityActions } from "../reducers/activity-reducer"

type FormProps = {
    dispatch: Dispatch<ActivityActions>
}
const initialState = {
    category: 1,
    name: '',
    calories: 0
}

const Form = ({ dispatch }: FormProps) => {

    const [activity, setActivity] = useState<Activity>(initialState)


    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        //lo que hacemos aca es mantener una copia del objeto que hay en el state
        //y reescribir solo el campo que cambia
        //si no hacia la copia del state (objeto activity) lo que habia en el state cambia cada vez que el usuario cambie o escriba algo
        /**
         * const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) 
         * recibe un parametro (e) que puede ser de tipo elemento html Input o de tipo Select
         */
        /**
             * lo que ocurre en este caso es que el elemento category y calories son number en primera instancia
             *  y se transfoman en string cuando
             * cambia el state por eso hay que convertirlos a number nuevamente.
             * 
            ...activity,
            [e.target.id]: e.target.value
            */
        /**--------------------------------------------------------------------------------------------------------------- */

        const isNumberField = ['category', 'calories'].includes(e.target.id)
        /**
        * Con esta linea identificamos mediante el id del elenmento pertenece a la lista de id de entrada que se definio 
        * en ['category', 'calories'] en conclusion el resultado sera true si el id coincide con category o calories
        * y false en caso que sea name
        */


        setActivity({
            ...activity,
            /**
             * hacemos una copia de lo que hay en el state
             * pregunto si isNumberField es true o false
             * si es true lo convertimos a number
             * si es false lo dejamos como esta
             * si es false lo dejamos como esta
             */
            [e.target.id]: isNumberField ? +e.target.value : e.target.value
        })
    }
    const isValidField = () => {
        const { name, calories } = activity //extraigo nombre y calorias porque categoria siempre esta seleccionada
        return name.trim() !== '' && calories > 0 //valido que el nombre no este vacio y que la categoria sea mayor a 0
        /**
         * lo que hace el .trim es quitar los espacios en blancoos de un string y luego valida que no este vacio
         * y por ultimo valida que calories sea mayor a 0
         * si estas condiciones se cumplieron es porque el formulario es valido y devuelve true
         */
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch({
            type: 'save-activity',
            payload: { newActivity: activity }
        })

        setActivity(initialState)

    }
    return (
        <form
            className="spcace-y-5 bg-white shadow p-10 rounded-lg"
            onSubmit={handleSubmit}>

            <div className="grid grid-cols-1 gap-3">

                <label htmlFor="category" className="font-bold">
                    Categoria:
                </label>

                <select
                    className="border border-gray-300 p-2 rounded-xl w-full"
                    id="category"
                    value={activity.category}
                    onChange={handleChange}>
                    {
                        categories.map(category => (
                            <option
                                key={category.id}
                                value={category.id}
                            >
                                {category.name}
                            </option>
                        ))}

                </select>
            </div>
            <div className="grid grid-cols-1 gap-3 pt-6">
                <label htmlFor="name" className="font-bold">Actividad:</label>
                <input
                    type="text"
                    id="name"
                    className="border border-gray-300 p-2 rounded-xl w-full"
                    placeholder="Ej. Comida, Jugo de naranja, Ejercicios, Pesas, etc."
                    value={activity.name}
                    onChange={handleChange}

                />
            </div>
            <div className="grid grid-cols-1 gap-3 pt-6">
                <label htmlFor="calories" className="font-bold">Calorias:</label>
                <input
                    type="number"
                    id="calories"
                    className="border border-gray-300 p-2 rounded-xl w-full"
                    placeholder="Ej. 200, 500, 750, 1000"
                    value={activity.calories}
                    onChange={handleChange}

                />
            </div>
            <div className="pt-2">
                <input
                    type="submit"
                    value={activity.category === 1 ? "Guardar Comida" : "Guardar Ejercicio"} //actualiza el boton segun lo seleccionado y se agrega disable:opacity-10
                    className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer rounded-lg disabled:opacity-10"
                    disabled={!isValidField()}//valida que el formulario sea valido == true si es asi desabilita el boton
                />
            </div>
        </form>
    )
}
export default Form