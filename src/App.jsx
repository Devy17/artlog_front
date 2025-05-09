import { useState, useEffect } from "react";
import axios from "axios";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

useEffect(() => {
  axios.get("http://api.kcisa.kr/openapi/API_CCA_145/request", {
    params: {
      serviceKey: "50c4abb3-0b85-4348-809c-b1df4198f4ef",
      numOfRows:10,
      pageNo: 1
    }
  })
  .then((res) => {
      console.log(res.data);
      
      const totalCount = res.data.response.body.totalCount;
      console.log("전체 데이터 개수:", totalCount);
      
      setTotalCount(totalCount);

      const pages = Math.ceil(totalCount / 10);
      console.log("전체 페이지 수:", pages);

      setTotalPages(pages);

      setUsers(res.data.response.body.items.item);

      console.log(res.data.response.body);
    })
    .catch((err) => {
      console.error("API 호출 에러:", err);
    });
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
      {/* 화면테스트용 */}

      <div>
        <h2>API 데이터</h2>
        <p> 전체 페이지 수 : {totalPages}</p>
        <p> 전체 데이터 수 : {totalCount}</p>
        <ul>
          {users.map((item, index) => (
            <li key={index}>{item.TITLE}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
