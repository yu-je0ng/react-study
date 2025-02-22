export const Home = () => {
  return (
    <div className="container-wrap main-page">
      <div className="visual-wrap">
        <div className="container-inner">
          <div className="visual">
            <div>
              <img
                src="https://images.jtbc.co.kr/baeksang/2022/visual-baeksang2.png"
                alt="제59회 백상예술대상 Baeksang Arts Award"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="info-wrap">
        <div className="container-inner">
          <div>
            <h2 className="day">2023.4.28 5:30PM</h2>
          </div>
          <a
            className="box-btn"
            href="/intro"
          >
            <span>자세히 보기</span>
          </a>
        </div>
      </div>
      <div className="vod-wrap">
        <div className="container-inner">
          <div className="wrap">
            <div className="list swiper-container">
              <div className="swiper swiper-wrapper swiper-initialized swiper-horizontal swiper-backface-hidden">
                <ul className="swiper-wrapper">
                  <li className="swiper-slide swiper-slide-active">
                    <a>
                      <span
                        className="thumb"
                        data-vod="VO10682299"
                      >
                        <img
                          src="https://fs.jtbc.co.kr/joydata/CP00000001/prog/enter/baeksangawards/img/20230428_213219_735_1.jpg"
                          alt="VO10682299"
                        />
                      </span>
                      <span className="title">
                        <strong>[59회 백상] TV부문 대상 - 박은빈</strong>
                        <span>[59회 백상] TV부문 대상 - 박은빈</span>
                      </span>
                    </a>
                  </li>
                  <li className="swiper-slide swiper-slide-next">
                    <a>
                      <span
                        className="thumb"
                        data-vod="VO10682224"
                      >
                        <img
                          src="https://fs.jtbc.co.kr/joydata/CP00000001/prog/enter/100sangarts/img/20230428_232943_980_1.jpg"
                          alt="VO10682224"
                        />
                      </span>
                      <span className="title">
                        <strong>[59회 백상] TV부문 대상 시상자 - 홍정도&amp;엄정화</strong>
                        <span>[59회 백상] TV부문 대상 시상자 - 홍정도&amp;엄정화</span>
                      </span>
                    </a>
                  </li>
                  <li className="swiper-slide">
                    <a>
                      <span
                        className="thumb"
                        data-vod="VO10682213"
                      >
                        <img
                          src="https://fs.jtbc.co.kr/joydata/CP00000001/prog/enter/100sangarts/img/20230428_232818_906_1.jpg"
                          alt="VO10682213"
                        />
                      </span>
                      <span className="title">
                        <strong>[59회 백상] 영화부문 대상 - 헤어질 결심</strong>
                        <span>[59회 백상] 영화부문 대상 - 헤어질 결심</span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="button">
              <a className="prev swiper-button-prev">이전</a>
              <a className="next swiper-button-next">다음</a>
            </div>
          </div>
          <div className="more">
            <a
              className="box-btn"
              href="/replay"
            >
              <span>영상 더보기</span>
            </a>
          </div>
        </div>
      </div>
      <div className="dim-wrap">
        <div className="dim-con">
          <button
            type="button"
            className="close-btn"
          >
            <img
              src="http://images.jtbc.co.kr/baeksang/btn_close.png"
              alt="닫기"
            />
          </button>
          <div className="replay-area"></div>
        </div>
      </div>
      <div className="sector-wrap final">
        <div className="container-inner">
          <div className="button">
            <a
              className="box-btn tv nominate-end"
              href="/awards"
            >
              <span>
                제59회 백상예술대상 <em className="bar"></em>수상자 · 작품 보러가기 <em className="bg"></em>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="notice-wrap">
        <div className="container-inner">
          <h2>
            제59회 백상예술대상 <strong>공지사항</strong>
          </h2>
          <p className="desc">새로운 소식을 전해드립니다.</p>
          <div className="notice">
            <div className="head">
              <h3>공지사항</h3>
              <a href="/notice">
                <span>더보기</span>
              </a>
            </div>
            <div className="list">
              <ul>
                <li>
                  <a href="/notice?id=65">
                    <strong>
                      <i>'제59회 백상예술대상' 디지털 생중계 안내</i>
                    </strong>
                    <em>2023.04.27</em>
                    <span>
                      <i>'제59회 백상예술대상' 틱톡 글로벌 생중계 안내</i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="share">
            <a
              className="tiktok"
              href="https://www.tiktok.com/@baeksang.official/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>틱톡</span>
            </a>
            <a
              className="insta"
              href="https://www.instagram.com/baeksang.official/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>인스타그램</span>
            </a>
            <a
              className="facebook"
              href="https://www.facebook.com/BaeksangAwards/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>페이스북</span>
            </a>
            <a
              className="youtube"
              href="https://www.youtube.com/channel/UCVXN28NHfphVQrdtjooc33g"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>유튜브</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
