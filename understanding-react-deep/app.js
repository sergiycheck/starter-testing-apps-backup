const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);

function App() {
  return (
    <>
      <h1>Counters</h1>
      <section>
        <Counter0 name="Counter 1" />
        <NestedList />
      </section>
    </>
  );
}

const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      throw new Error();
  }
};

function Counter0(props) {
  let { name } = props;

  const [count, setCount] = React.useState(0);

  const buttonClickhandler = (event) => {
    setCount((prev) => prev + 1);
  };

  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <article>
      <h2>
        {name} You clicked {count} times!
      </h2>
      <button onClick={buttonClickhandler} className="p-2 bg-zinc-400 rounded">
        Click me
      </button>
      <h2>reducer state {state.count}</h2>
      <button className="p-2 bg-zinc-400 rounded" onClick={() => dispatch({ type: "increment" })}>
        +
      </button>
      <button className="p-2 bg-zinc-400 rounded" onClick={() => dispatch({ type: "decrement" })}>
        -
      </button>
    </article>
  );
}

function NestedList() {
  console.log("NestedList_rendering");
  return (
    <div>
      <h1>Nested List</h1>
      <SimpleNestedComopnent />
      <SimpleNestedComopnent />
    </div>
  );
}

function SimpleNestedComopnent() {
  console.log("SimpleNestedComopnent_rendering");
  return (
    <div>
      <h1>Simple Nested Component</h1>
    </div>
  );
}

// fiber three - simple objects used by react's code to
// store information and determine what work need to be done

// 3 threes are used in react
// 1. Dom three
// 2. react element three - virtual dom - matches how we want the dom to apper
// 3. fiber tree - matches the dom tree

// functional programming - is a programming paradigm
//that treats computation as the evaluation of mathematical
//functions and avoids changing-state and mutable data
