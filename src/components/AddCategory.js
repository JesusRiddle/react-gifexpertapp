import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();
        if(inputValue.trim().length >0)
        {
            //de 'cats' obtenemos el estado anterior, es decir el arreglo original, y lo añadimos al 'nuevo arreglo';
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }

    }
    return (
        <form onSubmit= {handleSubmit}>
            <input 
            type="text"
            value={inputValue}
            onChange= {e => setInputValue(e.target.value)}
            ></input>
            {/*<h2>Add Category:{props.categories}</h2>*/}
        </form>
    )
};
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
