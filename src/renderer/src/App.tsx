function App(): JSX.Element {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-500"> Hello world! </h1>
      <div className="flex gap-1 bg-amber-200">
        <button className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-400 transition-colors rounded-md cursor-pointer">Button 1</button>
        <button className="px-4 py-2 bg-green-500 text-white hover:bg-green-400 transition-colors rounded-md">Button 2</button>
        <button className="px-4 py-2 bg-red-500 text-white hover:bg-red-400 transition-colors rounded-md">Button 3</button>
      </div>
    </>
  )
}

export default App
