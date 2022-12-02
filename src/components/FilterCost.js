import { useState } from "react";

export default function FilterType({ setLow, setHigh }) {
  const [curLow, setCurLow] = useState(0);
  const [curHigh, setCurHigh] = useState(10000);
  return (
    <div className="optionList">
      <p>Filter by Cost:</p>
      Low:{" "}
      <input
        type="number"
        placeholder="0"
        onChange={(val) => {
          setCurLow(val.target.value);
        }}
      />
      High:{" "}
      <input
        type="number"
        placeholder="10000"
        onChange={(val) => {
          setCurHigh(val.target.value);
        }}
      />
      <button
        onClick={() => {
          setLow(curLow);
          setHigh(curHigh);
        }}
      >
        Submit
      </button>
    </div>
  );
}
