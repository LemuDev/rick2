import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export const Cards = ({charapter, width}) => {
  
  console.log(charapter)
  return (
    <>
        <Card
          bg="dark"
          text="light"
          style={{ 
            cursor: "pointer", 
          }}

            className={width}
          >
          <Card.Header>
            <img src={charapter.image} style={{display: "block", margin: "1rem auto" }}/>
          </Card.Header>

          <Card.Body>
              <Card.Title className={ charapter.gender == "Male"? "text-primary": "text-danger" } >{charapter.name}</Card.Title>
              
              <Card.Text>gender: {charapter.gender}</Card.Text>
              <Card.Text>species: {charapter.species}</Card.Text>
          </Card.Body>
        </Card>
    </>
  )
}
