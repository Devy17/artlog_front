// src/components/ExhibitionCard.jsx
import React from 'react';
import styles from './ExhibitionCard.module.scss';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';

function ExhibitionCard({ exhibition }) {
  const [isScrapped, setIsScrapped] = React.useState(exhibition.isScrapped || false);

  const handleScrapClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsScrapped(!isScrapped);
    console.log(`전시 ${exhibition.id} 스크랩 상태: ${!isScrapped}`);
  };

  return (
    <div className={styles.comm_ex_item}>
      <a href={`/exhibitions/detail/${exhibition.id}`} title={`${exhibition.title} 상세페이지로 이동`}>
        <figure className={styles.ex_img_fig}>
          <figcaption>{exhibition.title}</figcaption>
          <img className={styles.ex_img} src={exhibition.imageUrl} alt={`전시정보 관련 포스터: ${exhibition.title}`} />
        </figure>

        <div className={styles.ex_guide}>
          <span className={styles.ex_sbj}>{exhibition.title}</span>
          <div className={styles.ex_range}>
            <span className={styles.ex_date}>{exhibition.date}</span>
          </div>
          <div className={styles.ex_loc_row}>
            <span className={`${styles.ex_loc} ${styles.ex_loc_sub}`}>{exhibition.location}</span>
            <span className={`${styles.ex_place} ${styles.ex_loc_sub}`}>{exhibition.place}</span>
          </div>
        </div>
      </a>

      <div className={styles.ex_top}>
        <div className={styles.ex_top_flag}>
          {exhibition.isRecommended && <span className={styles.flag}>추천</span>}
        </div>
        <button
          type="button"
          className={`${styles.btn_ico} ${styles.scrap} ${styles.sz_28} ${isScrapped ? styles.on : ''}`}
          title="스크랩 누르기"
          onClick={handleScrapClick}
        >
          {isScrapped ? <FaBookmark /> : <FaRegBookmark />}
          <span className={styles.blind}>스크랩</span>
        </button>
      </div>
    </div>
  );
}

export default ExhibitionCard;
