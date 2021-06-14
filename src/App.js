import React from 'react'
import { TextField,Button,Grid } from '@material-ui/core/';

export default function Practice() {
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
              console.log(e.target.value)
            }}>
              <Grid item>
                <TextField label="Title" variant="outlined" id="title"/>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" type="submit">
                  Send
                </Button>
              </Grid>
            </form>
          </Grid>

        </Grid>

      </React.Fragment>
    )
};

const todoList = (props) => {
  console.log(props.title)
  return (
  <p>{props.title}</p>
  )
}