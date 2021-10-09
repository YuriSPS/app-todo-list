import React from "react";
import { DivTarefas } from "./styles";

const Tarefas = ({name}) => {
    return (
        <DivTarefas>
            <input type="checkbox" />
            <label>{name}</label>
        </DivTarefas>
    );
}

export default Tarefas;