import React, { Component } from 'react';
import './App.css';
import Pokemon from './components/Pokemon'
import Search from './components/Search'
import filter from 'lodash'
class App extends Component {
  state = {
    searchValue: ""
  }
  handleChange = (e) => {
    this.setState({ searchValue: e.target.value })
  }

  render() {
    const pokemons = [
      { id: 1, name: 'Bulbassaur', attack: 1.2 },
      { id: 2, name: 'Evysaur', attack: 10.11 }
    ]
    return (
      <div className="page">
        <div className="page__search">
          <Search value={this.state.searchValue} onChange={this.handleChange.bind(this)} />
        </div>
        <ul className="pokemons">
          {
            pokemons.filter((pokemon) => pokemon.name.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) > -1)
              .map(
                (pokemon) =>
                  <li key={pokemon.id} className="pokemons__item">
                    <Pokemon id={pokemon.id} name={pokemon.name} attack={pokemon.attack} />
                  </li>
              )
          }
        </ul>
      </div>
    );
  }
}

export default App;
