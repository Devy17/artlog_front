// src/components/Header.jsx
import React from 'react';
import styles from './Header.module.scss';
import { FaBars, FaSearch } from 'react-icons/fa';

function Header() {
  const logoImageUrl = "https://sdmntprwestus3.oaiusercontent.com/files/00000000-6840-61fd-a3de-5417a740d6d2/raw?se=2025-05-09T07%3A24%3A18Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=c953efd6-2ae8-41b4-a6d6-34b1475ac07c&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-08T21%3A43%3A53Z&ske=2025-05-09T21%3A43%3A53Z&sks=b&skv=2024-08-04&sig=A5eRh3cNm1%2BY3fYX8xZwjsgFKvVY4j9eHuI%2B/3GULVs%3D";

  // 로그인/회원가입/마이페이지 이동 함수 (예시)
  const handleLogin = (e) => {
    e.preventDefault();
    console.log('로그인 페이지로 이동합니다.');
    window.location.href = "/login"; // 실제 React Router 사용 권장
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('회원가입 페이지로 이동합니다.');
    window.location.href = "/signup"; // 실제 React Router 사용 권장
  };

  const handleMyPage = (e) => {
    e.preventDefault();
    console.log('마이페이지로 이동합니다.');
    window.location.href = "/mypage"; // 실제 React Router 사용 권장
  };

  return (
    <header id="header" className={`${styles.header} ${styles.main}`}>
      <div className={styles.header_wrap}>
        <div className={styles.header_bottom}>
          <div className={styles.cont_inner}>

            <button type="button" className={styles.btn_menu} aria-label="전체 메뉴 열기">
              <FaBars />
            </button>

            <strong className={styles.logo}>
              <a href="/">
                <img src={logoImageUrl} alt="아트로그 사이트 로고" />
              </a>
            </strong>

            <nav className={styles.header_navi}>
              <ul>
                <li><a href="/exhibitions">전시 정보</a></li>
                <li><a href="/reviews">리뷰</a></li>
                <li><a href="#none" onClick={handleMyPage}>마이페이지</a></li>
              </ul>
            </nav>

            {/* 유틸리티 영역 (로그인/회원가입, 검색) */}
            <div className={styles.header_util}>
              <div className={styles.auth_links}>
                <a href="#none" onClick={handleLogin}>LOGIN</a>
                <span className={styles.divider}>|</span>
                <a href="#none" onClick={handleSignup}>SIGNUP</a>
              </div>
              <button type="button" className={styles.btn_search} aria-label="검색">
                <FaSearch />
              </button>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;