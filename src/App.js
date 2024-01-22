import { useState } from "react";
import "./App.css";
function App() {
  const initialArray = ["apple", "banana", "cherry", "date", "elderberry"];
  const [array, setArray] = useState(initialArray);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState("");
  /** 함수들 **/
  /* ForEach */
  const handleForEach = () => {
    let tempResult = "";
    let index = 0;
    array.forEach(function (fruit) {
      tempResult += `${index}: ${fruit} ,`;
      index++;
    });
    // tempResult = tempResult.slice(0, -2);
    // setResult(tempResult);
    setResult(tempResult.slice(0, -2));
  };

  /* Filter */
  const handleFilter = () => {
    const filteredList = array.filter(function (fruit) {
      // 얘를 필터링을 할지 말지를 결정한다.
      if (fruit.includes(query)) {
        return true;
      } else {
        return false; // 여기서 결정한다.
      }
    });
    setResult(filteredList.join(", "));
  };

  /* Map */
  const handleMap = () => {
    // array를 대문자로 변환하여 출력
    const mappedList = array.map(function (fruit) {
      return fruit.toUpperCase();
    });
    setResult(mappedList.join(", "));
  };

  /* Reduce */
  const handleReduce = () => {
    const reducedListText = array.reduce(function (acc, cur) {
      return `${acc} + ${cur}`;
    });
    setResult(reducedListText);
  };

  /* Push */
  const handlePush = () => {
    if (!query) {
      alert("값이 없습니다!");
      return false;
    }
    const newArr = [...array, query];
    setArray(newArr); // 추가된 값을 원본 값에 저장하는것
    setResult(newArr.join(", ")); // 배열 뒤에 값을 붙이는 것
  };

  /* Pop */
  const handlePop = () => {
    const newArr = [...array];
    newArr.pop();
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  /* Slice */
  /* 원본배열의 뒤 2개 아이템을 제거하여 출력 : tempResult = tempResult.slice(1, -1);*/
  /* 첫번째, 마지막번째 인덱스빼고 출력 */
  const handSlice = () => {
    let tempResult = [];
    let newArr = "";
    array.forEach(function (fruit) {
      tempResult.push(fruit);
    });
    tempResult = tempResult.slice(1, -1);
    newArr = tempResult.join(", ");
    setResult(newArr);
  };

  /* Splice */
  /* 원본배열의 가운데 아이템 2번째 부터 2개를 “kiwi”, “lime”으로 변경 */
  const handSplice = () => {
    let tempResult = [];
    let newArr = "";
    array.forEach(function (fruit) {
      tempResult.push(fruit);
    });
    tempResult.splice(2, 2, "kiwi", "lime");
    newArr = tempResult.join(", ");
    setResult(newArr);
  };

  /* IndexOf */
  /* 
  1. input에 입력한 값과 일치하는 값이 있는 경우 **`해당 index`**를 출력
  2. 없는 경우, **`-1`**을 출력 
  */
  const handIndexOf = () => {
    if (!query) {
      setResult(-1);
    } else {
      let tempResult = [];
      let index = 0;
      array.forEach(function (fruit) {
        tempResult.push(fruit);
      });
      index = tempResult.indexOf(query);
      setResult(index);
    }
  };

  /* includes */
  /* 원본배열이 input에 입력한 값과 일치하는 정확한 과일명을 가지고있는 경우 true 출력, 그 외의 경우 false 출력 */
  const handIncludes = () => {
    if (!query) {
      setResult("false");
    } else {
      let tempResult = [];
      array.forEach(function (fruit) {
        tempResult.push(fruit);
      });
      if (tempResult.includes(query)) {
        setResult("true");
      } else {
        setResult("false"); // 여기서 결정한다.
      }
    }
  };

  /* find */
  /* 원본배열이 input에 입력한 값을 포함하는 과일명을 가지고있는 경우 과일명을 출력, 그 외의 경우 “Not Found”를 출력 */
  const handFind = () => {
    if (!query) {
      setResult("Not found");
    } else {
      // let trueFalse = false;
      // const strFind = array.find((fruit) => {
      //   if (fruit === query) {
      //     trueFalse = true;
      //     return fruit === query;
      //   }
      // });
      const strFind = array.find((fruit) => fruit.includes(query));
      if (!strFind) {
        setResult("Not found");
      } else {
        setResult(strFind);
      }
    }
  };

  /* some */
  /* 원본배열이 input에 입력한 값을 포함하는 과일명을 가지고있는 경우 true을 출력, 그 외의 경우 false 를 출력 */
  const handSome = () => {
    if (!query) {
      setResult("false");
    } else {
      const strSome = array.some((fruit) => fruit.includes(query));
      if (!strSome) {
        setResult("false");
      } else {
        setResult("true");
      }
    }
  };

  /* every */
  /* 모든 과일명이 5글자를 초과하는 경우 true를 출력, 그 외의 경우 false를 출력 */
  const handEvery = () => {
    const everyLength = array.some((fruit) => fruit.length > 5);
    if (!everyLength) {
      setResult("false");
    } else {
      setResult("true");
    }
  };

  /* sort */
  /* 알파벳 내림차순 정렬 후 리스트 명을 “, “로 구분하여 출력 */
  const handSort = () => {
    let newArr = "";
    let tempResult = [...array];
    tempResult = tempResult.sort().reverse();
    newArr = tempResult.join(", ");
    // tempResult = tempResult.slice(0, -2);
    // setResult(tempResult);
    setResult(newArr);
  };
  return (
    <div className="container">
      <h1>Standard반 배열 API</h1>
      <div>
        <input
          value={query}
          onChange={function (e) {
            setQuery(e.target.value);
          }}
          placeholder="Enter Text"
        />
      </div>
      <div>
        <button onClick={handleForEach}>forEach</button>
        <button onClick={handleFilter}>filter</button>
        <button onClick={handleMap}>map</button>
        <button onClick={handleReduce}>reduce</button>

        <button onClick={handlePush}>push</button>
        <button onClick={handlePop}>pop</button>
        <button onClick={handSlice}>slice</button>
        <button onClick={handSplice}>splice</button>

        <button onClick={handIndexOf}>indexOf</button>
        <button onClick={handIncludes}>includes</button>
        <button onClick={handFind}>find</button>
        <button onClick={handSome}>some</button>

        <button onClick={handEvery}>every</button>
        <button onClick={handSort}>sort</button>
      </div>
      <div>
        <p className="resultBox">
          <strong>원본배열</strong> : {array.join(", ")}
        </p>
      </div>
      <div>
        <p className="resultBox">
          <strong>결과물</strong> : {result}
        </p>
      </div>
    </div>
  );
}
export default App;
