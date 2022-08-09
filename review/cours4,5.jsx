class Incrementer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      n: props.start,
      timer: null,
    };
    this.toogle = this.toogle.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    this.play();
  }
  componentWillUnmount() {
    this.pause();
  }
  
  Increm() {
    this.setState(function (state, props) {
      return { n: state.n + props.step };
    });
  }

  pause() {
    window.clearInterval(this.state.timer)
     this.setState({
      timer : null
     })
  }
  play() {
    this.setState({
      timer : window.setInterval(this.Increm.bind(this), 10)
     })
  }

  label(){
    return this.state.timer ? "pause" : "play"
  }
  toogle(){
    return this.state.timer ? this.pause() : this.play();
  }

  reset(){
    this.pause()
    this.setState(function(state,props){
      return {n : props.start}
    })
  }
  render() {
    return (
      <div>
        niveux : {this.state.n}
        <button onClick={this.toogle}>{this.label()}</button>
        <button onClick={this.reset}>Reinitialiser</button>
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
      <Incrementer start={0} />
    </div>
  );
}

ReactDOM.render(<Home />, document.getElementById("app"));
