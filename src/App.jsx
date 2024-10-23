import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'

function App() {
  const [readingTime, setReadingTime] = useState(0)
  const [bookmark, setBookmark] = useState([])
  const handelSetBookmark = (blog) => {
    const isAlready = bookmark.find(book => book.id == blog.id)
    if (!isAlready) {
      const newBookmark = [...bookmark, blog]
      setBookmark(newBookmark)
    }
  }
  const handleMakeUnRead = (blog) => {
    console.log(blog);

    setReadingTime(readingTime - parseFloat(blog.readingTime))
  }
  const handelRemoveBookmark = (id) => {
    const removeFilterItem = bookmark.filter(book => book.id != id)
    setBookmark(removeFilterItem)
  }

  const handelSetReadingTime = (blog) => {
    handelRemoveBookmark(blog.id)

    setReadingTime(readingTime + parseFloat(blog.readingTime))
  }


  return (
    <>
      <header className=' container mx-auto'>
        <Nav></Nav>

      </header>
      <div className=' border-b-gray-300 border'></div>
      <main className=' flex flex-col md:flex-row container mx-auto mt-12  min-h-[90vh]'>
        <Blogs
          handelSetReadingTime={handelSetReadingTime}
          handelSetBookmark={handelSetBookmark}
          handleMakeUnRead={handleMakeUnRead}
          handelRemoveBookmark={handelRemoveBookmark}
        ></Blogs>
        <Bookmarks readingTime={readingTime} bookmark={bookmark}></Bookmarks>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App
