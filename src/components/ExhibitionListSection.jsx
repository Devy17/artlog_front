// src/components/ExhibitionListSection.jsx
import React from 'react';
import ExhibitionCard from './ExhibitionCard';
import styles from './ExhibitionListSection.module.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function ExhibitionListSection() {
  const dummyExhibitions = [
    {
      id: 1,
      imageUrl: 'https://www.harpersbazaar.co.kr/artwalk/resources/web/keyvisual/2025/05/03/0503162702176-05bc6e1dd5de4686affa0f4314cbb8d5.jpg',
      title: '《캐서린 번하드: Some of All My Work》',
      date: '2025.05.03-2025.07.21',
      location: '서울/강남',
      place: '프린트 베이커리 한남',
      isRecommended: true,
      isScrapped: false,
    },
    {
      id: 2,
      imageUrl: 'https://www.harpersbazaar.co.kr/artwalk/resources/web/keyvisual/2025/05/03/0503162552867-efd38465f5234d128f499a930d7c462a.jpg',
      title: '《겸재 정선》',
      date: '2025.04.02-2025.06.29',
      location: '경기/용인',
      place: '호암미술관',
      isRecommended: true,
      isScrapped: false,
    },
    {
      id: 3,
      imageUrl: 'https://www.harpersbazaar.co.kr/resources/online/thumbnail/fw/2025/05/03/c94169aa-c88f-4eda-82b2-ae326c5d6191.jpg',
      title: '정연두 《불가피한 상황과 피치 못할 사정들》',
      date: '2025.04.25-2025.07.20',
      location: '부산/수영',
      place: '국제갤러리 부산',
      isRecommended: true,
      isScrapped: false,
    },
    {
      id: 4,
      imageUrl: 'https://www.harpersbazaar.co.kr/resources/online/thumbnail/fw/2025/05/03/a8f98407-fbf1-4ca5-86e3-3267609476a0.jpg',
      title: '샘바이펜 《LAZY》',
      date: '2025.04.12-2025.05.17',
      location: '서울/종로',
      place: 'PKM갤러리',
      isRecommended: true,
      isScrapped: false,
    },
    {
      id: 5,
      imageUrl: 'https://www.harpersbazaar.co.kr/artwalk/resources/web/keyvisual/2025/05/03/0503161944321-06d9a89b66374d05bae70c490ea9dcca.jpg',
      title: '소피 폰 헬러만 《축제》',
      date: '2025.04.09-2025.07.06',
      location: '서울/강서',
      place: '스페이스K 서울',
      isRecommended: true,
      isScrapped: false,
    },
  ];

  return (
    <div className={`${styles.main_section} ${styles.ex_info}`}>
      <div className={styles.cont_inner}>
        <div className={styles.tit_wrap}>
          <div className={styles.tit_area}>
            <h2 className={styles.tit}>전시정보</h2>
            <div className={styles.side}>
              <a href="/exhibitions" className={styles.btn_more} title="전시정보 리스트 페이지로 이동">
                <span>더보기</span>
              </a>
            </div>
          </div>
          <p className={styles.txt}>당신이 궁금한 전시 소식을 한눈에 확인하세요.<br className={styles.mo_br} /> 지금, 여기서, 그게 무엇이든!</p>
        </div>

        <div className={styles.swiper_pc_3_mo_auto}>
          <div className={`${styles.swiper} ${styles.swiper_container_horizontal}`}>
            <div className={styles.swiper_wrapper}>
              {dummyExhibitions.map(exhibition => (
                <div key={exhibition.id} className={`${styles.swiper_slide} ${styles.comm_ex_list}`}>
                  <ExhibitionCard exhibition={exhibition} />
                </div>
              ))}
            </div>
          </div>
          <div className={`${styles.btn_move} ${styles.button_next}`} title="다음 슬라이드">
              <FaChevronRight />
          </div>
          <div className={`${styles.btn_move} ${styles.button_prev}`} title="이전 슬라이드">
              <FaChevronLeft />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExhibitionListSection;