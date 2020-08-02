import React from 'react';

const Animals = ({animals}) => {
        const animalList = animals.map(animal => {
            return (
            <div className="animal" key={animal.id}>
                <div>Name:{animal.name}</div>
                <div>Age: {animal.age}</div>
                <div>Belt:{animal.belt}</div>
            </div>
            )
        })
        return(
           <div className="animal-list">
              {
                  animals.map(animal => {
                      return animal.age > 20? (
                        <div className="animal" key={animal.id}>
                        <div>Name:{animal.name}</div>
                        <div>Age: {animal.age}</div>
                        <div>Belt:{animal.belt}</div>
                    </div>
                      ) : null
                  })
              }
           </div>
        )
    
}
export default Animals