let n = 0;

function render() {
  const items = ["time 1", "time 2", "time 3", "time 4"];
  let liste = items.map((item) => <li>{item}</li>);
  const title = (
    <React.Fragment>
      <h1>incrementation </h1>
      <span>{n}s</span>
      <ul>{liste}</ul>
    </React.Fragment>
  );

  ReactDOM.render(title, document.getElementById("app"));
}

setInterval(() => {
  n++;
  render();
}, 1000);
