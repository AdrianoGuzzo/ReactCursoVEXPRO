import React from 'react'
import PropType from 'prop-types';

const Search = ({ onChange, valeu }) => (
    <input
        type="text"
        onChange={onChange}
        placeholder="Nome do pokemon"
        value={valeu}
        autoFocus />
)
Search.prototype = {
    onChange: PropType.func.isRequired,
    valeu: PropType.func.isRequired
}
export default Search


