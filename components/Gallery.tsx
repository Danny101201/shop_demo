import React, { useEffect, useState } from 'react'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from './Card'

function Gallery() {
  const [users, setUser] = useState([])
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=22').then(res => res.json()).then(res => {
      setUser(res)
    }).finally(() => {
      setLoading(false)
    })
  }, [])
  return (
    <div className="mt-[10rem] flex flex-col items-center ">

      <div className="text-3xl font-bold tracking-[0.5rem] py-5">MAINBOARD</div>
      {isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : (
        <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-screen md:px-14 px-5 py-2">
        {users.map((user, index) => (
          <Card key={index} user={user} />
        ))}
      </div>
      )}
    </div>
  )
}

export default Gallery