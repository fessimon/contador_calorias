import { useReducer } from 'react'
import Form from './components/Form'
import { activityReducer, initialState } from './reducers/activity-reducer'
function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState)
  return (
    <>
      <header className="bg-slate-900 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-center text-lg font-bold text-white uppercase">Contador Calorias
          </h1>

        </div>
      </header>
      <section className="bg-slate-800 py-20 px-20">
        <div className="max-w4xl mx-auto">
          
            <Form
            dispatch={dispatch}
            />
          
        </div>

      </section>

    </>

  )
}

export default App
