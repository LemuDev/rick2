import React, {useState, useEffect} from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Cards } from '../components/Cards/Cards';
import Loaders from '../components/Cards/Loaders';

import './Index.css'



export default function Index() {
    
    const [Charapters, setCharapters] = useState();

    useEffect( async () => {
        let results = await fetch("https://rickandmortyapi.com/api/character")
        results = await results.json()

        let charapters = results.results
        
        setCharapters(charapters)

        await console.log(Charapters)
    
    }, []);


  return (
    <Container>
        <h1 className='display-1'>Personajes</h1>
        
        <hr />

        <div className="grid-Cards">
            {
                Charapters?
                    Charapters.map((c, i)=>(
                        <Link to={"/charapters/" + c.id}
                            style={{ textDecoration: "none" }}
                        >
                          
                          <Cards key={i} charapter={c} />

                        </Link>
                        
                    ))

                :null
            }
        </div>

        {!Charapters?
            <div className='text-center mt-5' style={{ width:"100%"}}>
                <Loaders/>
            </div>    
        :null    
    }
    </Container>
  )
}
