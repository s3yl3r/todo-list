function App() {
    const [todo, setTodo] = React.useState([]);
    const mezo = React.useRef();

    React.useEffect(() => {
        const meglevo = localStorage.getItem("todo");
        setTodo(meglevo ? JSON.parse(meglevo) : []);
    }, []);

    function letrehoz() {
        if (mezo.current.value !== "") {
        const friss = [...todo, mezo.current.value];
        setTodo(friss);
        localStorage.setItem("todo", JSON.stringify(friss));
        }
        mezo.current.value = "";
        document.getElementById("input-mezo").focus();
    };

    function kitorol(item) {
        const friss = [...todo];
        friss.splice(friss.indexOf(item), 1);
        setTodo(friss);
        localStorage.setItem("todo", JSON.stringify(friss));
        document.getElementById("input-mezo").focus();       
    };

    return (
        <>
          <div id="fodoboz">
           <div id="felso">
            <h1 id="cim">My Tasks</h1>
              <div id="inputdoboz">
              <input type="text" autocomplete="off" placeholder="Type task here" ref={mezo} id="input-mezo" autofocus /></div>
              <button onClick={letrehoz} id="add-gomb">Add it</button>
          </div></div>
          <div id="listakeret">
              <ul>{todo.map(item => (<li key={item}>{item}<span class="kitorol" onClick={() => kitorol(item)}> &times;</span></li>))}</ul>
          </div>
        </>
    )
};

ReactDOM.render(<App />, document.getElementById("app"));