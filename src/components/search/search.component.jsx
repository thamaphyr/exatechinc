import "./search.style.css";
export const Search = (props) => {
  return (
    <search>
      <p>filter actual list: </p>
      <input className="search" onChange={props.onChange} type="text" />
    </search>
  );
};
