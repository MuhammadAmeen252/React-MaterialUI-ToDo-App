import React from 'react'
import { Button, ButtonGroup, Container, FormControlLabel, FormLabel,
   makeStyles, Radio, RadioGroup, TextField, Typography, FormControl } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { useState } from 'react';
import {useHistory} from 'react-router-dom'
import { Check } from '@material-ui/icons';
const axios = require('axios')

const useStyles = makeStyles({
  Dangerbtn:{
    color: 'white',
    backgroundColor:'red',
    '&:hover':{
      backgroundColor:'grey'
    }
  },
  title:{
    textDecoration:'underline',
    marginBottom:20
  },
  field:{
    marginTop:10,
    marginBottom:20
  }
})
export default function Create() {
  const classes = useStyles()
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [descError, setDescError] = useState(false)
  const [category,setCategory] = useState('Reminder')
  const AddNote = async (e) => {
    try{
      e.preventDefault()
      setTitleError(false)
      setDescError(false)
      if(title == ''){
        setTitleError(true)
      }
      if(desc == ''){
        setDescError(true)
      }
      if( title && desc ){
        const newNote = {
          title,
          desc,
          category
        }
        const req = await axios.post('http://localhost:8000/notes', newNote);
        //useHistory.push('/')
        //console.log(req.data)
        //console.log(title,desc)
      }
      
    }
    catch(e){
      console.log(e)
    }
  }

  return (
    <div>
      <Container>
      <Typography 
        variant="h6"
        component="h2"
        color="textPrimary"
        gutterBottom
        noWrap
        >
        Create a new note  
      </Typography>

      <form noValidate onSubmit={AddNote}>
        <TextField 
        onChange={(e) => setTitle(e.target.value)}
        label="Note title"
        variant="outlined"
        color="secondary"
        fullWidth
        required
        className={classes.field}
        error={titleError}
        />
        <TextField 
        label="Note Description"
        onChange={(e) => setDesc(e.target.value)}
        variant="outlined"
        color="secondary"
        fullWidth
        required
        multiline
        rows={4}
        className={classes.field}
        error={descError}
        />

        
        <FormLabel>Note Category</FormLabel>
        <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
        <FormControlLabel value ="Todos" control={<Radio/>} label = 'Todos' />
        <FormControlLabel value ="Reminder" control={<Radio/>} label = 'Reminder' />
        </RadioGroup>
        

        <Button
        type="submit"
        color="secondary"
        variant="contained"
        style={{marginTop:10}}
        endIcon={<Check />}
        >
        Submit
        </Button>
  
      </form>
      
      </Container>
    </div>
  )
}
