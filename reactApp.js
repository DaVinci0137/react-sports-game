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

                <button onClick={this.shotHandler}>Shoot!</button>
            </div>
        )
    }
}

function App(props) {
    return (
        <div className="App">
            <div className="Stats">
                <Team name="Jonestown Pirates" logo="./assets/teamOneShip.gif" />

                <div className="versus">
                    <h1>VS</h1>
                </div>

                <Team name="New England Redcoats" logo="./assets/teamTwoCoat.gif" />
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);