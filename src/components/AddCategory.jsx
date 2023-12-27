import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setinputValue ] = useState('');

    const onInputChange = ({target}) =>{
        setinputValue(target.value);
    }

    const onSubmit = ( event ) =>{
        event.preventDefault();
        console.log(event);
        const newInputValue = inputValue.trim();
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
