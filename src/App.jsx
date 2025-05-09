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
  );
}

export default App;