import React, { useState } from 'react'
import { TextField,Button,Grid } from '@material-ui/core/';
import TodoList from './components/todo'

export default function Practice() {
  const [todoTitles, setTodoTitles] = useState(["test"]);
  function addTodo(t) {
    setTodoTitles((currentTodo) => {return [...currentTodo, t]});
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

            <form onSubmit={e => {
              
              e.preventDefault();
              const todoTitle = e.target.elements["title"];
              if (todoTitle.value === "" ) {
                console.log("Error")
                todoTitle.value = null;
                return
              }
              addTodo(todoTitle.value)
              console.log(todoTitles);
              todoTitle.value = null;
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
            <h1>List</h1>
            {todoTitles.map((todo) => <TodoList title={todo} />)}
          </Grid>

        </Grid>

      </React.Fragment>
    )
};
