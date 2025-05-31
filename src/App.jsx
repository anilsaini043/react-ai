import './App.css'

function App() {

  return (
    <div className='grid grid-cols-5 h-screen text-center'>
      <div className='col-span-1 bg-zinc-800'>

      </div>
      <div className='col-span-4'>
        <div className='conatainer h-170'></div>
        <div className='bg-zinc-800 w-1/2 p-1 m-auto text-white rounded-3xl flex border border-zinc-400'>
          <input type='text' className='w-full h-full p-3 outline-none' placeholder='Ask me anything...' />
          <button className='p-2 rounded-4xl cursor-pointer hover:bg-zinc-600'>Ask</button>
        </div>
      </div>
    </div>
  )
}

export default App
