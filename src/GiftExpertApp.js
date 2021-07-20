import React, { useState } from 'react'
import {AddCategory} from './components/AddCategory';
import GifGrid from './components/GifGrid';
// import PropTypes from 'prop-types'

const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['Sailor Moon']);
    
    /*
    const handleAdd = () =>{

        //Puede ser de esta forma, usando el operador Spread para obtener cada uno de los elementos originales
        setCategories(['Utena', ...categories]);

        //De esta otra forma, el SET recibe un callback en el cual el primer argumento es el valor del estado anterior y luego regresa el nuevo estado 
        setCategories(cats => ['Utena', ...cats]);
    }
    */

    return (
        <>
            <h2>GiftExpertApp</h2>
            <hr></hr>

            {/* <button onClick = {handleAdd}>Agregar</button>*/}
            <AddCategory setCategories = {setCategories}/>

            <ol>
                {
                    categories.map( category => {
                        return <GifGrid key = {category} category={category}/>
                        // {<li key = {category}> {category}</li>}
                    })

                }
            </ol>
        </>
    )
}


export default GiftExpertApp
