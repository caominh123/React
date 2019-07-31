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

/* class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
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
    <Toggle />, document.getElementById('root')
); */
// TODO Conditional Rendering
/* class LoginControl extends React.Component {
    constructor(props) {
        super(props);

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }
    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }
    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}

function UserGreeting(props) {
    return <h1>Welcome Back!</h1>;
}
function GuestGreeting(props) {
    return <h1>Please sign up!</h1>;
}
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}
function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}
function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
); */
/* function WarningBaner(props) {
    if (!props.warn) {

        return null;
    }
    return (
        <div className="warning">Warning!</div>
    );

}
class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showWarning: true }
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    handleToggleClick() {
        this.setState(state => ({ showWarning: !state.showWarning }))
    }
    render() {
        return (
            <div>
                <WarningBaner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('root')
); */
/*function ListItems(props) {
    return (
        <li>{props.value}</li>
    );
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((numbers) =>
        <ListItems key={numbers.toString()}
            value={numbers} />
    );
    return (
        <ul>
            {listItems}
        </ul>
    )
}
const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
)*/
// TODO Accessibility ------------------------------------recode form here
/* class BlurExample extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isOpen: false };
        this.timeOutId = null;

        this.onClickHandler = this.onClickHandler.bind(this);
        this.onBlurHandler = this.onBlurHandler.bind(this);
        this.onFocusHandler = this.onFocusHandler.bind(this);
    }

    onClickHandler() {
        this.setState(currentState => ({
            isOpen: !currentState.isOpen
        }));
    }

    // We close the popover on the next tick by using setTimeout.
    // This is necessary because we need to first check if
    // another child of the element has received focus as
    // the blur event fires prior to the new focus event.
    onBlurHandler() {
        this.timeOutId = setTimeout(() => {
            this.setState({
                isOpen: false
            });
        });
    }

    // If a child receives focus, do not close the popover.
    onFocusHandler() {
        clearTimeout(this.timeOutId);
    }

    render() {
        // React assists us by bubbling the blur and
        // focus events to the parent.
        return (
            <div onBlur={this.onBlurHandler}
                onFocus={this.onFocusHandler}>

                <button onClick={this.onClickHandler}
                    aria-haspopup="true"
                    aria-expanded={this.state.isOpen}>
                    Select an option
          </button>
                {this.state.isOpen && (
                    <ul>
                        <li>Option 1</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                    </ul>
                )}
            </div>
        );
    }
}
ReactDOM.render(
    < BlurExample />,
    document.getElementById('root')
) */
// TODO Context ???
// TODO ERROR
/* class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
        // You can also log error messages to an error reporting service here
    }

    render() {
        if (this.state.errorInfo) {
            // Error path
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        // Normally, just render children
        return this.props.children;
    }
}

class BuggyCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(({ counter }) => ({
            counter: counter + 1
        }));
    }

    render() {
        if (this.state.counter === 5) {
            // Simulate a JS error
            throw new Error('I crashed!');
        }
        return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
    }
}

function App() {
    return (
        <div>
            <p>
                <b>
                    This is an example of error boundaries in React 16.
            <br /><br />
                    Click on the numbers to increase the counters.
            <br />
                    The counter is programmed to throw when it reaches 5. This simulates a JavaScript error in a component.
          </b>
            </p>
            <hr />
            <ErrorBoundary>
                <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
                <BuggyCounter />
                <BuggyCounter />
            </ErrorBoundary>
            <hr />
            <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
            <ErrorBoundary><BuggyCounter /></ErrorBoundary>
            <ErrorBoundary><BuggyCounter /></ErrorBoundary>
        </div>
    );
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
); */
// TODO Fragment
function Example() {
    return (
        <>
            Some text.
        <h2>A heading</h2>
            <p>More text.</p>
            <h2>Another heading</h2>
            Even more text.
      </>
    );
}
ReactDOM.render(<Example />, document.getElementById('root'));

