import React, { Component } from 'react'

const headerStyle = {
    backgroundColor: "black"
}
export default class Index extends Component {
    render() {
      const {pokemon} = this.props;
      console.log(pokemon)
      return (
          <div style={headerStyle}>
                  <p className="title"><a href="/"><img src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png" alt="PokeDex Logo" /></a></p>
                  <ul>
                      {pokemon.map((pokemon, id) => {
                      return (
                          <li>
                              <a href={`/pokemon/${id}`}> {pokemon.name}</a>
                          </li>
                      );
                  })}
                  </ul>
          </div>
      )
    }
  }