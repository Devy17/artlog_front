// src/components/MainVisual.jsx
import React, { useState, useEffect } from 'react';
import styles from './MainVisual.module.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // 슬라이더 이동 버튼 아이콘

function MainVisual() {
  // 슬라이드에 표시할 데이터 (이미지, 제목, 설명)
  const sliderItems = [
    {
      id: 1,
      imageUrl: "https://www.harpersbazaar.co.kr/artwalk/resources/web/keyvisual/2025/05/03/0503162702176-05bc6e1dd5de4686affa0f4314cbb8d5.jpg",
      title: "5월의 추천 전시! 《캐서린 번하드: Some of All My Work 》",
      desc: "‘작가들의 작가‘ 캐서린 번하드의 세계 최초 회고전"
    },
    {
      id: 2,
      imageUrl: "https://www.harpersbazaar.co.kr/artwalk/resources/web/keyvisual/2025/05/03/0503162552867-efd38465f5234d128f499a930d7c462a.jpg",
      title: "5월의 추천 전시! 《겸재 정선》",
      desc: "진경산수부터 초충도까지🍃 정선의 예술 세계를 종합적으로 조망한 전시"
    },
    {
      id: 3,
      imageUrl: "https://www.harpersbazaar.co.kr/resources/online/thumbnail/fw/2025/05/03/a8f98407-fbf1-4ca5-86e3-3267609476a0.jpg",
      title: "5월의 추천 전시! 샘바이펜 《LAZY》",
      desc: "모든 사람을 위한 예술! 길거리 그래피티를 컨셉으로 한 전시"
    },
    // 필요에 따라 더 많은 슬라이드 아이템을 추가할 수 있습니다.
  ];

  // 현재 활성화된 슬라이드의 인덱스를 관리하는 상태
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // 일정 시간마다 슬라이드를 자동으로 변경하는 효과
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlideIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
    }, 5000); // 5초마다 슬라이드 변경

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 정리
  }, [sliderItems.length]); // sliderItems 배열의 길이가 변경될 때만 다시 실행

  // 슬라이드 이동 (이전/다음 버튼 클릭 시)
  const goToSlide = (index) => {
    setActiveSlideIndex(index);
  };

  const goToPrevSlide = () => {
    setActiveSlideIndex((prevIndex) =>
      prevIndex === 0 ? sliderItems.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setActiveSlideIndex((prevIndex) =>
      (prevIndex + 1) % sliderItems.length
    );
  };


  return (
    <section className={styles.art_main_visual}>
      <div className={styles.mv_slide}>
        {/* 이미지 영역 (모든 이미지를 겹쳐 놓고 CSS로 제어) */}
        <div className={styles.art_v_img_col}>
          <div className={styles.art_v_img}>
            {sliderItems.map((slide, index) => (
              <div
                key={slide.id}
                className={`${styles.art_v_img2} ${index === activeSlideIndex ? styles.active : ''}`}
              >
                <img src={slide.imageUrl} alt={slide.title} />
              </div>
            ))}
          </div>
        </div>

        {/* 텍스트 영역 (모든 텍스트를 겹쳐 놓고 CSS로 제어) */}
        <div className={styles.art_v_guide_col}> {/* 텍스트 영역을 감싸는 새로운 div */}
            {sliderItems.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`${styles.art_v_guide} ${index === activeSlideIndex ? styles.active : ''}`}
                >
                    <div className={styles.art_v_guide_sub}>
                        <p className={styles.art_v_tit}>{slide.title}</p>
                        <p className={styles.art_v_desc}>{slide.desc}</p>
                    </div>
                </div>
            ))}
        </div>


        {/* 슬라이더 이동 버튼 */}
        <button type="button" className={`${styles.btn_move} ${styles.btn_next}`} title="다음" onClick={goToNextSlide}>
          <FaChevronRight />
        </button>
        <button type="button" className={`${styles.btn_move} ${styles.btn_prev}`} title="이전" onClick={goToPrevSlide}>
          <FaChevronLeft />
        </button>

        {/* 슬라이더 페이지네이션 */}
        <div className={styles.mv_page_wrap}>
          {sliderItems.map((_, index) => (
            <div
              key={index}
              className={`${styles.pager} ${index === activeSlideIndex ? styles.active : ''}`}
              onClick={() => goToSlide(index)} // 페이지네이션 클릭 시 해당 슬라이드로 이동
            ></div>
          ))}
        </div>

        {/* 회전 텍스트 이미지 (CSS로 처리) */}
        <div className={styles.rotate_txt}>
          <img src="https://www.harpersbazaar.co.kr/artwalk/resources/images/img_main_visual_rotate.png"/>
        </div>
      </div>
    </section>
  );
}

export default MainVisual;
