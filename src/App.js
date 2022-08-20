import { useCallback, useReducer } from "react";
import "./App.css";
import Ballot from "./Components/Ballot/Ballot";

// TODO: backend to supply this, preferably injected with next.js on SSR
const BACKEND_DATA = {
  categories: [
    {
      key: "picture",
      title: "Best Motion Picture 2021",
      nominees: [
        {
          title: "Prey",
          imgUrl: "https://www.omdb.org/image/default/48816.jpeg?v=1",
        },
        {
          title: "Palmer",
          imgUrl: "https://www.omdb.org/image/default/46660.png?v=1",
        },
        {
          title: "Without Remorse",
          imgUrl: "https://www.omdb.org/image/default/47160.jpeg?v=1",
        },
        {
          title: "Black Widow",
          imgUrl: "https://www.omdb.org/image/default/47243.jpeg?v=1",
        },
        {
          title: "Spider-Man: No Way Home",
          imgUrl: "https://www.omdb.org/image/default/48244.jpeg?v=1",
        },
      ],
    },
    {
      key: "actor",
      title: "Best Actor 2021",
      nominees: [
        {
          title: "John Malkovich",
          imgUrl: "https://www.omdb.org/image/default/8429.jpeg?v=2",
        },
        {
          title: "Gérard Depardieu",
          imgUrl: "https://www.omdb.org/image/default/4685.jpeg?v=4",
        },
        {
          title: "Catherine Deneuve",
          imgUrl: "https://www.omdb.org/image/default/4698.jpeg?v=2",
        },
        {
          title: "Mathieu Amalric",
          imgUrl: "https://www.omdb.org/image/default/12967.jpeg?v=2",
        },
        {
          title: "Jeanne Balibar",
          imgUrl: "https://www.omdb.org/image/default/32289.jpeg?v=1",
        },
      ],
    },
    {
      key: "director",
      title: "Best Director 2021",
      nominees: [
        {
          title: "F. Gary Gray",
          imgUrl: "https://www.omdb.org/image/default/40684.jpeg?v=1",
        },
        {
          title: "Jason Statham",
          imgUrl: "https://www.omdb.org/image/default/146.jpeg?v=4",
        },
        {
          title: "Luc Besson",
          imgUrl: "https://www.omdb.org/image/default/13260.jpeg?v=2",
        },
        {
          title: "Mark Wahlberg",
          imgUrl: "https://www.omdb.org/image/default/2145.jpeg?v=3",
        },
        {
          title: "Seth Green",
          imgUrl: "https://www.omdb.org/image/default/7936.jpeg?v=2",
        },
      ],
    },
  ],
};

// TODO: replace this with redux
const initialState = { votes: {}, completed: false };

function reducer(state, action) {
  switch (action.type) {
    case "cast_vote":
      return {
        ...state,
        votes: {
          ...state.votes,
          [action.payload.category]: action.payload.vote,
        },
      };
    case "submit":
      return { ...state, completed: false };
    case "undo_submit":
      return { ...state, completed: false };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const submit = useCallback(() => {
    dispatch({ type: "submit" });
  }, [dispatch]);

  const undoSubmit = useCallback(() => {
    dispatch({ type: "undo_submit" });
  }, [dispatch]);

  return (
    <div className="App">
      <header>
        <div>Playboy Awards 2021</div>
      </header>
      <article>
        {BACKEND_DATA.categories.map((category) => (
          <Ballot
            category={category}
            key={category.key}
            vote={state.votes[category.key]}
            dispatch={dispatch}
          />
        ))}
        <div className="btnContainer">
          <button onClick={submit}>Submit Ballot</button>
        </div>
      </article>
      <footer>(C) 2022</footer>
      {state.completed && (
        <div className="dimmer" onClick={undoSubmit}>
          <div className="success">
            <h2>SUCCESS</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
