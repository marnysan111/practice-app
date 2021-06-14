import React, { useState } from 'react'
import { TextField,Button,Grid } from '@material-ui/core/';
import TodoList from './components/todo'

export default function Practice() {
  const [text, setTitle] = useState('')
  const handleText = (e) => {
    setTitle(()=>e.target.value)
  }
  const todoTitles = [];
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

            <form onSubmit={e => {
              e.preventDefault();
              const todoTitle = e.target.elements["title"];
              if (todoTitle.value === "" ) {
                console.log("Error")
                return
              }
              todoTitles.push(todoTitle.value);
              console.log(todoTitles)
            }}>
              <Grid item>
                <p>{text}</p>
                <TextField label="Title" variant="outlined" id="title" onChange={handleText} />
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" type="submit">
                  Send
                </Button>
              </Grid>
            </form>

            {todoTitles.map(todo => (<TodoList title={todo} />))}
          </Grid>

        </Grid>

      </React.Fragment>
    )
};
