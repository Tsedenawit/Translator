import { useState, useEffect } from 'react';
function App(props) {
  const [tran,settran] = useState();
 const [source, setSource]=useState();
 const [target, setTarget]=useState();

 
  useEffect(()=>{
    fetch('https://api.mymemory.translated.net/get?q=Hello,%20how%20are%20you?!&langpair=en|fr')
    .then(response => response.json())
    .then(data => {
      settran(data)
    })
    .catch(error => {
      console.log(error)
    })
  },[]);
  console.log(tran)
    return (
      <div className='flex justify-center'>
      <div className='bg-red-800 w-[40%] mx-auto bg-gradient-to-l from-cyan-500 to-blue-500 rounded-xl'>
        <div className='flex text-white justify-between'>
        <button>Detect lang</button>
        <button>English</button>
        <button>French</button>
        <button>Spanish</button>
        </div>
        <hr></hr>
        <form>
          <textarea className='w-[60%] '></textarea>
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