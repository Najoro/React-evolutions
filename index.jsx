const scaleNames = {
  c : "celsius",
  f : "faraneight"
}

function BoilingVerdict({ celsius }) {
  if (celsius >= 100) {
    return <p className="alert alert-success mt-4"> {celsius} *C - L'eau bout.</p>;
  }
  return <p className="alert alert-success mt-4"> {celsius} *C - L'eau ne bout pas.</p>;
}

class TemperatureInput extends React.Component {
  constructor(props){
    super(props)
    this.state = {tempeature : " "}
    this.handelChange = this.handelChange.bind(this);
  }

  handelChange(e) {
    this.setState({
      temperature: e.target.value,
    });
  }

  render() {
    const {temperature} = this.state
    const name = "scale" + this.props.scale
    const scaleSelect = scaleNames[this.props.scale];
    return (
      <React.Fragment>
        <div className="form-group">
          <label htmlFor={name}>{scaleSelect} : </label>
          <input
            type="text"
            id={name}
            value={temperature}
            onChange={(this.handelChange)}
            className = "form-control"
          />
        </div>

      </React.Fragment>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: '' };
  }
  render() {
    return (
      <React.Fragment>
        <div className="form-group">
          <TemperatureInput scale = "c" />
          <TemperatureInput scale = "f" />
        </div>
      </React.Fragment>
    );
  }
}

function Home() {
  return (
    <React.Fragment>
      <Calculator temperature= "" />
      <BoilingVerdict celsius={10} />
    </React.Fragment>
  );
}

ReactDOM.render(<Home />, document.getElementById("app"));
