const app = document.getElementById("app");
// console.log(app);

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.children} {this.props.name}
        </h1>
      </div>
    );
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.timer = null;
  }

  componentDidMount() {
    this.timer = window.setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const date = new Date();
    return (
      <div>
        <h2>
          {date.toLocaleDateString()}/ {date.toLocaleTimeString()}
        </h2>
      </div>
    );
  }
}

class Incrementer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nombre: props.start, timer: null };
    this.toogle = this.toogle.bind(this)
    this.reset = this.reset.bind(this)

  }

  componentDidMount() {
    this.play();
  }
  componentWillUnmount() {
    this.pause();
  }

  increment() {
    this.setState(function (state, props) {
      return { nombre: state.nombre + props.step };
    });
  }

  pause() {
    window.clearInterval(this.state.timer);
    this.setState({
      timer: null,
    });
  }
  play() {
    window.clearInterval(this.state.timer);
    this.setState({
      timer: window.setInterval(this.increment.bind(this), 1000),
    });
  }
  label(){
    return this.state.timer ? "pause" : "play";
  }
  toogle(){
    return this.state.timer ? this.pause() : this.play();
  }
  reset(){
    this.pause();
    this.play();
    this.setState(function (state, props) {
      return { nombre: props.start};
    });
  }
  render() {
    return (
      <div>
        valeur : {this.state.nombre} 
        <button onClick={this.toogle}>{this.label()}</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}
Incrementer.defaultProps = {
  start: 0,
  step: 1,
};
function Home() {
  return (
    <div>
      <Welcome name="Najoro">Welcome</Welcome>
      <Clock />
      <Incrementer start={1} />
    </div>
  );
}

ReactDOM.render(<Home />, app);
