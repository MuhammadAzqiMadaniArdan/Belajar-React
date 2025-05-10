
import './App.css'
import Memo from './components/memo'
import UseCallBack from './components/UseCallBack'
import UseMemo from './components/UseMemo'

function App() {

  return (
    <div style={{ display : 'flex',flexWrap:'wrap',gap:10 }}>
      <UseCallBack/>
      <Memo/>
      <UseMemo/>
    </div>
  )
}

export default App
