// import React, {useState, useEffect} from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';
// import PropTypes from 'prop-types'

const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);
    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
        <h3>{category}</h3>
        {loading && <p>Loading...</p>} 
        {/* {Si loading es true, entonces pone el párrafo loading} */}
        { <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                        key = {img.id}
                        {...img}/>
                        //Se envía el ID y con ... cada uno de los elementos del objeto img
                    ))
                }
        </div> }
        </>
    )
}

export default GifGrid
