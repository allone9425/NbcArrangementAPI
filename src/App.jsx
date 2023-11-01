import { useState } from "react";
function App() {
  const initialState = ["apple", "banana", "cherry", "date", "elderberry"];
  const [array, setArray] = useState(initialState);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState(""); // input을 위한 value
  const handleForEach = function () {
    let temp = "";
    array.forEach(function (item, index) {
      temp += `${index}: ${item} / `;
    });
    setResult(temp);
  };
  const handleFilter = function () {
    const filtered = array.filter((item) => item.includes(query));
    setResult(filtered.join(", "));
  };
  const handleMap = function () {
    const mapped = array.map(function (item, index) {
      return item.toUpperCase();
    });
    // console.log(mapped);
    setResult(mapped.join(", "));
  };

  const handleReduce = function () {
    const reduced = array.reduce(function (acc, cur) {
      return `${acc} + ${cur}`;
    });
    //console.log(reduced);
    setResult(reduced);
  };

  const handlePush = function () {
    //setArray([...array, "test"]);
    // const pushedArr;
    if (query.length <= 0) {
      alert("값을 입력해주세요.");
      return false;
    }
    const newArr = [...array, query];
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const handlePop = function () {
    //1. 원본배열을 통해 pop한 값을 저장함 (임시변수)
    //2. setArr. 하기
    //3. array 기반으로 result 생성
    const newArr = [...array];
    newArr.pop();
    setArray(newArr);
    setResult(newArr.join(", "));
    //setArray([...array]);
  };
  const handleSlice = function () {
    const sliced = array.slice(1, 4);
    //setArray(sliced);
    setResult(sliced.join(", "));
  };

  const handleSplice = function () {
    const newArr = [...array];
    newArr.splice(2, 2, "kiwi", "lime");
    setArray(newArr);
    //console.log(newArr);
    setResult(newArr.join(" , "));
  };

  const handleIndexof = function () {
    const index = array.indexOf(query);
    // setArray([index]);
    setResult(index);
  };

  const handleIncludes = function () {
    const includes = array.includes(query);
    //console.log(includes);
    //문자열 형변환이 필요했음
    setResult(String(includes));
  };

  const handleFind = function () {
    const find = array.find((item) => item.includes(query));
    setResult(find);
  };

  const handleSome = function () {
    const somed = array.some((item) => item.includes(query));
    setResult(String(somed));
  };

  const handleEvery = function () {
    const everyed = array.every((item) => item.length >= 2);
    setResult(String(everyed));
  };

  const handleSort = function () {
    const sorted = array.sort();
    setResult(sorted.join(", "));
  };

  const handleJoin = function () {
    const joined = array.join(", ");
    setResult(joined);
  };

  return (
    <div>
      <h1>Standard반 배열 API 테스트</h1>
      <input
        value={query}
        onChange={function (e) {
          setQuery(e.target.value);
        }}
      />
      <div>
        <button onClick={handleForEach}>forEach</button>
        <button onClick={handleFilter}>filter</button>
        <button onClick={handleMap}>map</button>
        <button onClick={handleReduce}>reduce</button>
        <button onClick={handlePush}>push</button>
        <button onClick={handlePop}>pop</button>
        <button onClick={handleSlice}>Slice</button>
        <button onClick={handleSplice}>splice</button>
        <button onClick={handleIndexof}>indexOf</button>
        <button onClick={handleIncludes}>includes</button>
        <button onClick={handleFind}>find</button>
        <button onClick={handleSome}>some</button>
        <button onClick={handleEvery}>every</button>
        <button onClick={handleSort}>sort</button>
        <button onClick={handleJoin}>join</button>
      </div>
      <div>
        <h3>원본배열</h3>
        <p>{array.join(", ")}</p>
      </div>
      <div>
        <h3>결과물</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}
export default App;
