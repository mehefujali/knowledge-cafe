import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Nav from './Components/Nav/Nav'

function App() {
  const [readingTime, setReadingTime] = useState(0)
  const handelSetReadingTime = (time) => {
    setReadingTime(readingTime + time)
  }
  const [bookmark, setBookmark] = useState([])
  const handelSetBookmark = (blog) => {
    const isAlready = bookmark.find(book => book.id == blog.id)
    if (!isAlready) {
      const newBookmark = [...bookmark, blog]
      setBookmark(newBookmark)
    }
  }

  return (
    <>
      <header className=' container mx-auto'>
        <Nav></Nav>

      </header>
      <div className=' border-b-gray-300 border'></div>
      <main className=' flex flex-col md:flex-row container mx-auto mt-12 '>
        <Blogs
          handelSetReadingTime={handelSetReadingTime}
          handelSetBookmark={handelSetBookmark}

        ></Blogs>
        <Bookmarks readingTime={readingTime} bookmark={bookmark}></Bookmarks>
      </main>
    </>
  )
}

export default App
