import { useState, useEffect } from 'react';
function App(props) {
  const [tran,settran] = useState();
 const [source, setSource]=useState();
 const [target, setTarget]=useState();
 const [translation,setTranslation]= useState();

// let values = tran.matches[0].target;
 const handleSource = (langValue) => {
  if (langValue === "eng"){
    setSource("en-GB")
    console.log("english")
  }else if(langValue === "fre"){
    setSource("fr-FR")
    console.log("french")
  }
 }
const handleTarget =(Value)=>{
  if (Value === "eng"){
    setTarget("en-GB")
    console.log("english")
  }else if(Value === "fre"){
    setTarget("fr-FR")
    console.log("french")
  }
}
const translate =()=>{
if (target === "fr-FR" && source === "en-GB"){
  setTranslation();
  console.log("source is english")
}else if(target === "en-GB" && source === "fr-FR"){
  console.log("source is french")
}}
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
        <button value="eng" onClick={() => handleSource("eng")}>English</button>
        <button value="fre"onClick={() => handleSource("fre")}>French</button>
        <button value="spa">Spanish</button>
        </div>
        <hr></hr>
        <form>
          <textarea className='w-[60%] '></textarea>
        </form>
        <div>
          <button>bl</button>
          
          <button className='' onClick={translate}>Translate</button>
        </div>
        </div>  
        <div className='bg-red-800 w-[40%] mx-auto bg-gradient-to-l from-cyan-500 to-blue-500 rounded-xl'>
        <div className='flex text-white justify-between'>
        <button>Detect lang</button>
        <button value="eng" onClick={() => handleTarget("eng")}>English</button>
        <button value="fre"onClick={() => handleTarget("fre")}>French</button>
        <button value="spa">Spanish</button>
        </div>
        <hr></hr>
        <form>
          <textarea className='w-[60%] '></textarea>
        </form>
        <div>
          <button type="button" className="bg-grey-200 hover:bg-violet-600">
          <i class="bi bi-copy"></i> Copy
          </button>
        </div>
        </div>
      </div>
    );
  }

export default App;