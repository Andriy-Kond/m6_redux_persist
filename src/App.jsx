import { useDispatch, useSelector } from "react-redux";
import { clicksCounter } from "reduxTools/clicksSlice";
console.log("clicksCounter:::", clicksCounter(5));

function App() {
  const clicks = useSelector(state => state.clicksSlice.clicks);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Total clicks: {clicks}</h2>
      <button type="button" onClick={() => dispatch(clicksCounter(5))}>
        Add 5 clicks
      </button>

      <button type="button" onClick={() => dispatch(clicksCounter(10))}>
        Add 10 clicks
      </button>

      <button type="button" onClick={() => dispatch(clicksCounter(50))}>
        Add 50 clicks
      </button>
    </>
  );
}

export default App;
