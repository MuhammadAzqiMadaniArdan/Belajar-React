/* eslint-disable react/prop-types */
import { useState } from 'react'
import Header from './components/Header';

function App() {
  const students = ['Sandhika','Doddy','Erik'];
            const [likes, setLikes] = useState (0);

            function IncrementClick(){
                setLikes(likes + 1);
            }

            function DecrementClick(){
                setLikes(likes - 1);
            }
            function handleReset(){

                setLikes(0);
            }
            return (
                <>
                <Header />
                  
                <ul>
                {
                    students.map((student) => (
                        <li key={student}>{student}</li>
                    ))
                }    
                </ul>
                <button onClick={IncrementClick}>+ </button>  
                <h3 >({likes})</h3>  
                <button onClick={DecrementClick} >- </button>  
                <button onClick={handleReset}>Reset</button>  
                </>
            );
}

export default App
