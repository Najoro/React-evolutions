const scaleNames = {
  c: "Celsuis",
  f: "faraney",
};

function BoilingVerdicte({ celsuis }) {
  if (celsuis >= 100) {
    return <h5 className="alert alert-danger"> l'eau bout</h5>;
  }
  return <h5 className="alert alert-info">l'eaux ne bout pas</h5>;
}

class Temperature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
    };
    this.handelTemperature = this.handelTemperature.bind(this);
  }

  handelTemperature(e) {
    this.setState({
      temperature: e.target.value,
    });
  }

  render() {
    const { temperature } = this.state;
    const name = "scale" + this.props.scale;
    const scalename = scaleNames[this.props.scale];
    return (
      <div>
        <label htmlFor={name}>Temperature ({scalename}) </label>
        <input
          type="text"
          id={name}
          className="form-control"
          value={temperature}
          onChange={this.handelTemperature}
        />
      </div>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
    };
  }
  render() {
    const { temperature } = this.state;
    return (
      <div className="form-control">
        <Temperature scale="c" />
        <Temperature scale="f" />
        <BoilingVerdicte celsuis={parseFloat(temperature)} />
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("app"));
