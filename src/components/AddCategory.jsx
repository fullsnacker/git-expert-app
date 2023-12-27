import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({target}) =>{
        setInputValue(target.value);
    }

    const onSubmit = ( event ) =>{
        event.preventDefault();
        const newInputValue = inputValue.trim();
        setInputValue('');
        if(newInputValue.length <= 1) return;
        onNewCategory( newInputValue );
    }

    return (
        <form onSubmit={ (event) => onSubmit( event )}>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
