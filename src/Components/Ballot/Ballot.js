import Nominee from "../Nominee/Nominee";
import "./Ballot.css";

const Ballot = ({ category, vote, dispatch }) => {
  return (
    <section>
      <h1>{category.title}</h1>
      <div className="moviegrid">
        {category.nominees.map((nominee) => (
          <Nominee
            details={nominee}
            key={nominee.title}
            selected={vote === nominee.title}
            categoryKey={category.key}
            dispatch={dispatch}
          />
        ))}
      </div>
    </section>
  );
};

export default Ballot;
