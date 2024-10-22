
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Nav from './Components/Nav/Nav'

function App() {


  return (
    <>
      <header className=' container mx-auto'>
        <Nav></Nav>

      </header>
      <div className=' border-b-gray-300 border'></div>
      <main className=' flex flex-col md:flex-row container mx-auto mt-12 '>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </main>
    </>
  )
}

export default App
