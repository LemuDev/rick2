import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Cards } from '../components/Cards/Cards';
import Loaders from '../components/Cards/Loaders';

const CharapterId = () => {
    let params = useParams()
    let id = params.id
    let url = `https://rickandmortyapi.com/api/character/${id}`

    const [charapter, setCharapter] = useState({});

    useEffect( async() => {
        let _charapter = await fetch(url)

        _charapter = await _charapter.json()

        setCharapter(_charapter)
        console.log(charapter)
    }, []);

    return (
        <div className="container">
            <Link to="/">Volver atras</Link>            


            {
                charapter?
                    <Cards charapter={charapter} width="w-400" />

                : 
                <Loaders/>
            }
        </div>
    );
}

export default CharapterId;
