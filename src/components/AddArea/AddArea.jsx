import React from "react";
import * as C from './styles';

// Recebendo props com os valores já inseridos do list e setList para atualizar e 
// inserir os valores antigos + novos valores que serão digitados pelo usuário
const AddArea = ({list, setList}) => {
    const [input, setIinput] = React.useState('');

    // Função que irá veficiar se usuário teclou Enter e soltou
    function handleKeyUp(event) {
        if(event.key === 'Enter' && input !== ''){
            // Inserindo os valores antigos do list com a destruturação(SPREAD) e inserindo um novo objeto no array list
            setList([...list, {
                id: list.length+1,
                name: input,
                done: false,
            }]);
            console.log(list);
        }
    }

    function handleOnChange(event) {
        // Inserindo o novo valor no input após usuártio digitar futura tarefa para ser adicionada na lista
        setIinput(event.target.value);
    }

    return (
        <C.Container>
            <div className="image">+</div>
            <input type="text" onChange={handleOnChange} onKeyUp={handleKeyUp}/>
        </C.Container>
    );
}

export default AddArea;