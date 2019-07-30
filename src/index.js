import React from 'react';
import ReactDOM from 'react-dom';


// TODO Rendering element

/* function tick(){
    const element = (
        <div>
            <h1>Hello world</h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>

    );
    ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick,1000); */
// TODO Components

/* function Welcome(props) {
    return <h1>Hello, {props.name} </h1>
}
function App() {
    return (<div>
        <Welcome name="Tony" />
        <Welcome name="Hara" />
        <Welcome name="Harry" />
    </div>);
}

ReactDOM.render(<App />, document.getElementById('root')); */

/* function formatDate(date) {
    return date.toLocaleDateString();
}
function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img
                    className="Avatar"
                    src={props.author.avatarUrl}
                    alt={props.author.name}
                />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>


            </div>
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">{formatDate(props.date)}</div>
        </div>
    );
}
const comment = {
    date: new Date(),
    text: 'Enjoy learn React',
    author: {
        name: 'Henry',
        avatarUrl: 'https://placekitten.com/g/64/64'
    }
}
ReactDOM.render(
    <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
    />,
    document.getElementById('root')
) */
// TODO State and Lifecycle

/* class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };

    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({ date: new Date() });
    }
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);
 */
// TODO  Handling Events
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };


        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
);