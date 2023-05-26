import "./App.css";

export default function Layout(props) {
  return (
    <div className="app">
      <header>
        <h1>Simple Form</h1>
      </header>
      {props.children}
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}
