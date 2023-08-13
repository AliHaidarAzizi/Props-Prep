import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputComponent from './components/InputComponent'

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gensczipaxhebvsyxdxj.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdlbnNjemlwYXhoZWJ2c3l4ZHhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE1ODQ3NDcsImV4cCI6MjAwNzE2MDc0N30.d1FvMlBvG_xbS7Hq0-MeO0wvIwxNthhK4zziaTF4Vvo"
const supabase = createClient(supabaseUrl, supabaseKey)


function App() {
  const [count, setCount] = useState(10)
  const [name, setName] = useState("User")
  const onChangeProps1 = (e) => {
      const newValue = e.target.value // 100
      setCount(newValue)
    
  }
  const onChangeProps2 = async(e) => {
    const newValue = e.target.value // apa yang kita inputkan
    
    setName(newValue)

    // Insert Rows to Supabase
    const { data, error } = await supabase
    .from('table_user')
    .insert([
      { name:name},
    ])
    .select()

}
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1>Hello {name}</h1>
      <div className="card">
        <button onClick={() => setCount(() => count + 1)}>
          Jumlah ialah {count}
        </button>
        <InputComponent 
          countProps={count}
          onChangeProps={onChangeProps1}
        />

        <InputComponent 
          onChangeProps={onChangeProps2}
        />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
