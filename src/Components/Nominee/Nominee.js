import { useCallback } from "react";
import "./Nominee.css";

const Nominee = ({ details, selected, categoryKey, dispatch }) => {
  const onclick = useCallback(() => {
    dispatch({
      type: "cast_vote",
      payload: { category: categoryKey, vote: details.title },
    });
  }, [dispatch, categoryKey, details]);

  return (
    <div className={selected ? "nominee selected" : "nominee"}>
      <div className="title">{details.title}</div>
      <div className="image">
        <img src={details.imgUrl} alt={details.title} />
      </div>
      <button onClick={onclick}>{selected ? "SELECTED" : "Select"}</button>
    </div>
  );
};

export default Nominee;
