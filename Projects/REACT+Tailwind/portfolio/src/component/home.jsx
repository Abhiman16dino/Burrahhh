export default function Home() {
  return (
    <div className="w-screen h-screen bg-black flex">
      <div className='flex flex-1'>
        <h1 className="text-white bg-slate-950 flex flex-1 justify-center items-center text-3xl font-bold hover:scale-150 transition duration-500">
          About
        </h1>
      </div>

      <div className='flex flex-1'>
        <h1 className="text-white bg-slate-900 flex flex-1 justify-center items-center text-3xl font-bold hover:scale-150 transition duration-500">
          Project
        </h1>
      </div>

      <div className='flex flex-1'>
        <h1 className="text-white bg-slate-800 flex flex-1 justify-center items-center text-3xl font-bold hover:scale-150 transition duration-500">
          Blog
        </h1>
      </div>

      <div className='flex flex-1'>
        <h1 className="text-white bg-slate-700 flex flex-1 justify-center items-center text-3xl font-bold hover:scale-150 transition duration-500">
          Skills
        </h1>
      </div>

      <div className='flex flex-1'>
        <h1 className="text-white bg-slate-600 flex flex-1 justify-center items-center text-3xl font-bold hover:scale-150 transition duration-500">
          Achievements
        </h1>
      </div>

      <div className='flex flex-1'>
        <h1 className="text-white bg-slate-500 flex flex-1 justify-center items-center text-3xl font-bold hover:scale-150 transition duration-500">
          Photo Gallary
        </h1>
      </div>
    </div>
  );
}
