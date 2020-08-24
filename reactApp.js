class Team extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            shots: 0,
            score: 0
        }

        this.shotSound = new Audio("./assets/audio/Explosion+5.wav")
        this.scoreSound = new Audio("./assets/audio/umgawa.wav")

    }

    shotHandler = () => {
        let score = this.state.score
        this.shotSound.play()

        if (Math.random() > 0.5) {
            score += 1

            setTimeout(() => {
                this.scoreSound.play()
            }, 100)
        }

        this.setState((state, props) => ({
            shots: state.shots + 1, score
        }))
    }

    render() {
        let shotPercentageDiv

        if (this.state.shots) {
            const shotPercentage = Math.round((this.state.score / this.state.shots) * 100)
            shotPercentageDiv = (
                <div>
                    <strong>Shooting %: {shotPercentage}</strong>
                </div>

            )
        }

        return (
            <div className="Team">
                <h2>{this.props.name}</h2>

                <div className="Identity">
                    <img src={this.props.logo} alt={this.props.name} />
                </div>

                <div>
                    <strong>Shots:</strong> {this.state.shots}
                </div>

                <div>
                    <strong>Score:</strong> {this.state.score}
                </div>

                {shotPercentageDiv}

                <button onClick={this.shotHandler}>Shoot!</button>
            </div>
        )
    }
}

function Game(props) {
    return (
        <div className="Game">
            <h1>Welcome to {props.venue}</h1>
            <div className="Stats">
                <Team
                    name={props.visitingTeam.name}
                    logo={props.visitingTeam.logoSrc}
                />

                <div className="versus">
                    <h1>VS</h1>
                </div>

                <Team
                    name={props.homeTeam.name}
                    logo={props.homeTeam.logoSrc}
                />
            </div>
        </div>
    )
}

function App(props) {
    const pirates = {
        name: 'Jonestown Pirates',
        logoSrc: './assets/teamOneShip.gif'
    }

    const redcoats = {
        name: 'New England Redcoats',
        logoSrc: './assets/teamTwoCoat.gif'
    }

    const snakes = {
        name: 'Savannah Snakes',
        logoSrc: './assets/teamThreeSnake.gif'
    }

    const mongooses = {
        name: 'Orlando Mongooses',
        logoSrc: './assets/teamFourMongoose.gif'
    }

    return (
        <div className="App">
            <Game
                venue="The Crimson Seas War"
                homeTeam={redcoats}
                visitingTeam={pirates}
            />
            <Game
                venue="The Arena"
                homeTeam={snakes}
                visitingTeam={mongooses}
            />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);