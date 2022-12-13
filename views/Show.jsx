import React from "react";

const style = {
    background: 'red',
    textAlign: 'center',
    color: "white"
}


class Show extends React.Component {
    render () {
        const pokemon = this.props.pokemon
        console.log(this.props.pokemon);
        return (
            <div style={style}>
                <a href="/" className="homeLink"><img src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png" alt="PokeDex Logo" /></a>
                <h1 className="title">Gotta Catch 'Em All</h1>
                <h2 className="pokeName">{pokemon.name}</h2>
                <img src={pokemon.img} alt={pokemon.name}></img>
                <br />
                <br />
                <br />
                <div className="footer">
                    <a href="/" className="backToHome">Back</a>
                </div>
            </div>
        )
    }
}

export default Show;