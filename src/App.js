import './App.css';

function App() {
  return (
    <div className='flex justify-center'>
    <div className='bg-red-800 w-[40%] mx-auto bg-gradient-to-l from-cyan-500 to-blue-500'>
      <div className='flex text-white justify-between'>
      <button>Detect lang</button>
      <button>English</button>
      <button>French</button>
      <button>Spanish</button>
      </div>
      {/* <form>
        <textarea className='w-[600px] ml-2 '></textarea>
      </form> */}

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
