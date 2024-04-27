import './App.css';

function App() {
  return (
    <div className='flex'>
    <div className='bg-red-800 w-[40%] mx-auto '>
      <div className='flex text-white'>
      <button>Detect lang</button>
      <button>English</button>
      <button>French</button>
      <button>Spanish</button>
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
