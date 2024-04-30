import './App.css';
import { useEffect, useState } from 'react';
function App() {
const [tran,settran] = useState();

useEffect(()=>{
  fetch('https://api.mymemory.translated.net/get?q=Hello,%20how%20are%20you?!&langpair=en|fr')
  .then(response => response.json())
  .then(data => {
    settran(data)
  })
  .catch(error => {
    console.log(error)
  })
});

  return (
    <div className='flex justify-center'>
    <div className='bg-red-800 w-[40%] mx-auto bg-gradient-to-l from-cyan-500 to-blue-500 rounded-xl'>
      <div className='flex text-white justify-between'>
      <button>Detect lang</button>
      <button>English</button>
      <button>French</button>
      <button>Spanish</button>
      </div>
      <form>
        <textarea className='w-[600px] '></textarea>
      </form>
      <div>
        <button>bl</button>
        <button>b2</button>
        <button className=''>Translate</button>
      </div>
      </div>
      
       <div className='bg-red-800 w-[40%] mx-auto '>
      <ul>
        <li>Detect Language</li>
        <li>English</li>
        <li>French</li>
        <li>Spanish</li>
        </ul>

       </div>
    </div>
  );
}

export default App;
