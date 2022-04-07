import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import "./App.css";


class App extends Component{

    state ={
        todos : [

        ]
    }

    componentDidMount(){
        //console.log("Component Mount")
        //save state
        let data = [];
        if(localStorage.data){
            data = JSON.parse(localStorage.data)
        }
        this.setState({
            todos : data
        })
    }

  /*   componentDidUpdate(){
        //console.log("Component Update")
    } */

    addIntoTodos = (todo) =>{
        todo.id = Math.floor(Math.random()*(10000-10)-10);
        localStorage.data = JSON.stringify([...this.state.todos,todo])
        this.setState({todos:[...this.state.todos,todo]})
    
    }

    markTodo = (index) => {
        const copyTodos = [...this.state.todos];
        copyTodos[index].done = !copyTodos[index].done;
        localStorage.data = JSON.stringify(copyTodos)
        this.setState({todos:copyTodos});
    }

    deleteTodo = (index) => {
        const copyTodos = [...this.state.todos];
        copyTodos.splice(index,1);
        localStorage.data = JSON.stringify(copyTodos)
        this.setState({todos:copyTodos});

    }

    render(){
        return (
            <div className="wrapp">
                <Jumbotron />
                <NewTodo addIntoTodos={this.addIntoTodos}/>
                <TodoList deleteTodo={this.deleteTodo} todos={this.state.todos} markTodo={this.markTodo}/>
            </div>
        )
    }
}

export default App;