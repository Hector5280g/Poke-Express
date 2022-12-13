import React, { Component } from 'react'

const headerStyle = {
    color: '#ffffff',
        background: 'red',
        padding: '8px',
        fontSize: '20px',
        borderRadius: '7px',
        fontFamily: 'monospace',
        textAlign: 'center',
        maxWidth: '968px',
        margin: '0 auto',
}
const list = {
    listStyle: 'none',
    padding: '30px',
    borderRadius: '4px',
    textAlign: 'center'
};
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
                          <li style= {list}>
                              <a href={`/pokemon/${id}`}> {pokemon.name}</a>
                          </li>
                      );
                  })}
                  </ul>
          </div>
      )
    }
  }