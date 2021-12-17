import { Container, Grid, makeStyles, Paper,Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Masonry from 'react-masonry-css'
import NoteCard from '../components/noteCard'
const axios = require('axios')

export default function Notes() {
  const [notes, setNotes] = useState([])

  const deleteItem = async(id) => {
    try{
      const req = await axios.delete('http://localhost:8000/notes/'+id);
      const newNotes = notes.filter(note => note.id != id)
      setNotes(newNotes)
      console.log(req.data)
    }
    catch(e){
      console.log(e)
    }
  }

  useEffect(async() => {
    try{
      const data = await axios.get('http://localhost:8000/notes')
      setNotes(data.data)
    }
    catch(e){
      console.log(e)
    }
  },[])

  const breakPpints = {
    //def n.o of cols
    default: 3,
    //when u reach that width the n.o of cols
    1100: 2,
    700: 1

  }

  return (
    <div>

      <Container>
      
      <Masonry
      breakpointCols={breakPpints}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
      >
        {
          notes.map(note => (
            <div item key={note.id} xs={12} lg={4} md={6}>
              <NoteCard note={note} deleteItem={deleteItem}/>
            </div>
          ))
        }
      </Masonry>

      </Container>

    </div>
  )
}
