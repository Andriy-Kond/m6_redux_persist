import { useDispatch, useSelector } from "react-redux";
import { clicksCounter, getClicksQty } from "reduxTools/clicksSlice";

function App() {
  const clicksQTY = useSelector(getClicksQty);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Total clicks: {clicksQTY}</h2>
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
