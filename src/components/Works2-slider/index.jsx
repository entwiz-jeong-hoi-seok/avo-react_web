/* eslint-disable @next/next/no-css-tags */
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import Split from "../Split";

SwiperCore.use([Navigation]);

const Works2Slider = ({ subBG }) => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    });
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/ionicons.min.css" />
      </Head>
      <section
        className={`work-carousel section-padding caroul ${
          subBG ? "sub-bg" : ""
        } position-re`}
      >
        <div className="container-fluid mt-100">
          <div className="sec-head custom-font text-center">
            <h6 className="wow fadeIn" data-wow-delay=".5s">
            이제 행사를 오프라인에서만 진행하던 시대는 끝났습니다.
            </h6>
            <Split>
              <h3 className="wow words chars splitting" data-splitting>
              Various Templates.
              </h3>
            </Split>
            <span className="tbg">Various Templates</span>
          </div>
          <div className="row">
            <div className="col-lg-12 no-padding">
              <div className="swiper-container">
                <div className="swiper-container">
                  {!load ? (
                    <Swiper
                      speed={1000}
                      loop={true}
                      spaceBetween={0}
                      breakpoints={{
                        320: {
                          slidesPerView: 1,
                          spaceBetween: 0,
                        },
                        767: {
                          slidesPerView: 2,
                          spaceBetween: 0,
                        },
                        991: {
                          slidesPerView: 3,
                          spaceBetween: 0,
                        },
                        1024: {
                          slidesPerView: 4,
                          spaceBetween: 0,
                        },
                      }}
                      navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                      }}
                      onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl =
                          navigationPrevRef.current;
                        swiper.params.navigation.nextEl =
                          navigationNextRef.current;
                      }}
                      onSwiper={(swiper) => {
                        setTimeout(() => {
                          swiper.params.navigation.prevEl =
                            navigationPrevRef.current;
                          swiper.params.navigation.nextEl =
                            navigationNextRef.current;

                          swiper.navigation.destroy();
                          swiper.navigation.init();
                          swiper.navigation.update();
                        });
                      }}
                      className="swiper-wrapper"
                      slidesPerView={1}
                    >
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/dark4/variousTemplates1.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox">
                            <h6>
                              Additional Features
                            </h6>
                            <h4>
                                실시간 상호작용
                            </h4>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/dark4/variousTemplates2.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox">
                            <h6>
                              Additional Features
                            </h6>
                            <h4>
                                익숙한 조작
                            </h4>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/dark4/variousTemplates3.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox">
                            <h6>
                              Additional Features
                            </h6>
                            <h4>
                                목적지향적인 기능
                            </h4>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/dark4/variousTemplates4.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox">
                            <h6>
                              Additional Features
                            </h6>
                            <h4>
                                라이브 커머스
                            </h4>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/dark4/variousTemplates5.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox">
                            <h6>
                            Exhibition & Booth
                            </h6>
                            <h4>
                            목적과 규모에 맞는 홀과 부스
                            </h4>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  ) : null}

                  <div
                    ref={navigationNextRef}
                    className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
                  >
                    <i className="ion-ios-arrow-right"></i>
                  </div>
                  <div
                    ref={navigationPrevRef}
                    className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
                  >
                    <i className="ion-ios-arrow-left"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works2Slider;
