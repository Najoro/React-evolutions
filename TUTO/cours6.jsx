const app = document.getElementById("app");

function Field({ name, value, onChange }) {
  return (
    <div>
      <label htmlFor={name}>{name} :</label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
function Checkbox({name, value, onChange }) {
  return (
    <div>
      <label htmlFor={name}>Accepter la newslater</label>
      <input
        type="checkbox"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      prenom: "",
    };
    this.handelChange = this.handelChange.bind(this);
  }
  handelChange(e) {
    // console.log(e.target.type);
    const nom = e.target.name;
    const type = e.target.type;
    const value = type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({
      [nom]: value,
    });
  }
  render() {
    return (
      <div>
        <Field name="nom" value={this.state.nom} onChange={this.handelChange} />
        <Field name="prenom" value={this.state.prenom} onChange={this.handelChange}/>
        <Checkbox name= "newslatter" value = {this.state.newsletter} onChange={this.handelChange} />
        {JSON.stringify(this.state)}
      </div>
    );
  }
}

ReactDOM.render(<App />, app);