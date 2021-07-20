import { useState, useEffect} from "react";
import { getGifs } from "../helpers/getGifs";

//Este es un custom hook, tiene la misma estructura que un componente pero sin importarse de React ni regresar JSX
export const useFetchGifs = (category) => {

    const [state, setstate] = useState({
        data:[],
        loading: true
    });

    //Esto se ejecuta solo cuando 'category' cambia
    useEffect(() => {
       getGifs(category)
       .then( imgs => {
            setTimeout(() => {
                setstate({
                    data:imgs,
                    loading: false
                });
            }, 2000);
       });
    }, [category])
    //En el arreglo se especifica lo que estará escuchando si cambia
    //Equivalente a DidMount
/*
    setTimeout(() => {
        setstate({
            data:[],
            loading: false
        });
    }, 3000);

    */
    return state;

}
