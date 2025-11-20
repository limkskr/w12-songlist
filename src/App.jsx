import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SongList from './pages/SongList.jsx'
import SongDetail from './pages/SongDetail.jsx'
import { getSongList } from './api/songApi'



function App() {

  const [songs, setSongs] = useState([])

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const data = await getSongList()
        setSongs(data)
      } catch (err) {
        console.error("Failed to fetch songs:", err)
      }
    }

    fetchSongs()
  }, []) //빈배열이 중요


  return (
    <Routes>
      <Route path="/" element={<SongList songs={songs} />} />
      <Route path="/song/:id" element={<SongDetail songs={songs} />} />
    </Routes>
  )
}

export default App
