<<<<<<< HEAD
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
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// App.module.scss를 한 번만 import 합니다.
// 만약 이 파일에 전역 스타일(CSS Reset, .blind 등)이 정의되어 있고,
// App 컴포넌트 자체가 이 모듈의 특정 CSS 클래스를 사용하지 않는다면,
// 일반적으로는 src/index.js (또는 src/main.jsx) 파일에서 임포트하는 것이 더 일반적인 관행입니다.
import "./App.module.scss";

// 우리가 만들 HomePage 컴포넌트를 불러옵니다.
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        {/* 루트 경로 (/)로 접속하면 HomePage 컴포넌트를 렌더링합니다. */}
        <Route path="/" element={<HomePage />} />

        {/*
          다른 페이지들의 경로를 정의할 수 있습니다.
          예시:
          <Route path="/exhibitions" element={<ExhibitionsListPage />} />
          <Route path="/exhibitions/:id" element={<ExhibitionDetailPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/artgallery" element={<ArtGalleryPage />} />
          <Route path="/gallery" element={<GalleryInfoPage />} />
          <Route path="/artist" element={<ArtistInfoPage />} />
        */}
      </Routes>
    </Router>
>>>>>>> cd0a504c66e8776e67011e54a0a4978e9aed166c
  );
}

export default App;