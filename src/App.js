import { useState, useEffect } from 'react';
function App(props) {
  const [tran,settran] = useState();
 const [source, setSource]=useState();
 const [target, setTarget]=useState();

 const handleLanguageClick = (langValue) => {
  console.log("8");
  if (langValue == "eng"){
    setSource("en-GB")
    console.log("eng")
  }else if(langValue === "fre"){
    setSource("fr-FR")
    console.log("french")
  }
 }

 function clicked(){
  console.log("clicked")
 }
  useEffect(()=>{
    fetch('https://api.mymemory.translated.net/get?q=Hello,%20how%20are%20you?!&langpair=en|fr')
    .then(response => response.json())
    .then(data => {
      settran(data);
      console.log(tran)
    })
    .catch(error => {
      console.log(error)
    })
  },[]);
  
    return (
      <div className='flex justify-center'>
      <div className='bg-red-800 w-[40%] mx-auto bg-gradient-to-l from-cyan-500 to-blue-500 rounded-xl'>
        <div className='flex text-white justify-between'>
        <button>Detect lang</button>
        <button value="eng" onClick={() => handleLanguageClick("eng")}>English</button>
        <button value="fre"onClick={() => handleLanguageClick("fre")}>French</button>
        <button value="spa">Spanish</button>
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