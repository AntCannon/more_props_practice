import './App.css'
import Header from './Header.jsx';
import StudentsList from './StudentsList.jsx'
import students from './students'


function App() {

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <StudentsList students={students} />
      </main>
    </>
  )
}

export default App
