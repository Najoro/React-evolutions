function Field({ name, value, onChange, chidren }) {
  return (
    <div className="input-group">
      <label htmlFor={name}>{name} :</label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className = "form-control"
      />
    </div>
  );
}
function Checkbox({ name, value, onChange, chidren }) {
  return (
    <div>
      <label htmlFor={name}>{name} :</label>
      <input
        type="Checkbox"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}


class Formulaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: " ",
      lastName: " ",
      newsLetter: false,
    };
    this.handelChange = this.handelChange.bind(this);
    this.handelSubmite = this.handelSubmite.bind(this);
  }

  handelChange(e) {
    const nameTarg = e.target.name;
    const type = e.target.type;
    const value = type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({
      [nameTarg]: value,
    });
  }

  handelSubmite(e){
    this.setState({
      name: " ",
      lastName: " ",
      newsLetter: false,
    })
    e.preventDefault();
    const data = JSON.stringify(this.state);
    console.log(data);
  }


  render() {
    return (
      <form onSubmit={this.handelSubmite} className = "container">
        <Field name="name" value={this.state.name} onChange={this.handelChange} />
        <Field name="lastName" value={this.state.lastName} onChange={this.handelChange}/>
        <Checkbox name= "newslatter" value={this.state.checkbox}  onChange={this.handelChange}/>
        <div>
          <button className="btn btn-primary">submite</button>
        </div>
        {JSON.stringify(this.state)}
      </form>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <div>
        <Formulaire />
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("app"));
