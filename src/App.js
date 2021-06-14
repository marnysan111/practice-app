import React, { useState } from 'react'
import { TextField,Button,Grid } from '@material-ui/core/';
import TodoList from './components/todo'

export default function Practice() {
  const [text, setTitle] = useState('')
  const handleText = (e) => {
    setTitle(()=>e.target.value)
    alert(text)
  }
  
    return (
      <React.Fragment>

        <Grid container justify="center">
          <h1>Todo</h1>
        </Grid>

        <Grid container>

          <Grid item xs={4}>
            <h2>グリッドのこっち松</h2>
          </Grid>

          <Grid item xs={8}>

            <form>
              <Grid item>
                <p>{text}</p>
                <TextField label="Title" variant="outlined" id="title"/>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" type="submit">
                  Send
                </Button>
              </Grid>
            </form>

            <TodoList 
              title = "test"
            />
          </Grid>

        </Grid>

      </React.Fragment>
    )
};
