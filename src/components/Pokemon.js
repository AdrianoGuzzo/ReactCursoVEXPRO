import React from 'react';
import PropType from 'prop-types';
import { round } from 'lodash'

const Pokemon = ({ id, name, ...props }) => {

    return (
        <div className="pokemon">
            <button
                type="button"
                className="pokemon__sprite"
                style={{
                    backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                        id
                        }.png`})`
                }}
            />
            <p className="pokemon__name">{name}</p>
            <p>{round(props.attack, 1)}</p>
        </div>
    )
}

Pokemon.PropType = {
    id: PropType.object.isRequired
}

export default Pokemon