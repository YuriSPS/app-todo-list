import React from "react";
import AddArea from "./AddArea/AddArea";
// Importando todos os components de styles
import * as C from './styles';
import Tarefas from "./Tarefas/Tarefas";

const App = () => {
    const [list,setList] = React.useState([
        {id: 1, name: 'Estudar React', done: false},
        {id: 2, name: 'Estudar JS', done: false},
    ]);

    return (
        <div id="main">
            <C.ContainerFull>
                <C.Container>
                    <C.Header>To-Do List</C.Header>
                    {/* AddArea irá recer setList como props para que após digitar e apertar a tecla enter o valor seja inserido no list */}
                    <AddArea list={list} setList={setList}/>
                    {list.map((tarefa, index) => {
                        return <Tarefas key={index} name={tarefa.name}/>
                    })}
                </C.Container>
            </C.ContainerFull>
        </div>
    );
}

export default App;