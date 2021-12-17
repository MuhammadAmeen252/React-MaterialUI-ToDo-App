import  React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { CardHeader, IconButton, Typography, makeStyles, Avatar } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import { yellow, pink } from '@material-ui/core/colors';

const useStyles = makeStyles({
    avatar:{
        backgroundColor:(note) => {
            if(note.category == 'Todos'){
                return yellow[700]
            }
            if(note.category == 'Reminder'){
                return pink[500]
            }
        }
    }
})

export default function NoteCard({note, deleteItem}){

    const classes = useStyles(note)

    return(
        <div>
            <Card elevation={3} >
                <CardHeader 
                avatar={
                    <Avatar className={classes.avatar}>
                        {note.category[0].toUpperCase()}
                    </Avatar>
                }
                action={
                    <IconButton onClick={()=>deleteItem(note.id)}>
                      <DeleteOutlined />
                    </IconButton>
                  }
                  title= {note.title}
                  subheader= {note.category}
                />
                <CardContent>
                    <Typography variant='body2' color='textSecondary'>
                        {note.desc}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}