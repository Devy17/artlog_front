// src/pages/HomePage.jsx
import React from 'react';
import Header from '../components/Header';
import MainVisual from '../components/MainVisual';
import ExhibitionListSection from '../components/ExhibitionListSection';
import styles from './HomePage.module.scss';

function HomePage() {
  return (
    <div className={styles.homePageContainer}>
      <Header />

      <main className={styles.main}>
        <MainVisual />
        <ExhibitionListSection />
      </main>

      {/* 푸터는 필요에 따라 여기에 추가 (별도 컴포넌트로) */}
      {/* <Footer /> */}
    </div>
  );
}

export default HomePage;