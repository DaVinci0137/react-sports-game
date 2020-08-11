class Team extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="Team">
                <h2>{this.props.name}</h2>

                <div className="Identity">
                    <img src={this.props.logo} alt={this.props.name} />
                </div>
            </div>
        )
    }
}

function App(props) {
    return (
        <div className="App">
            <Team name="Jonestown Pirates" logo="./assets/teamOneShip.gif" />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);