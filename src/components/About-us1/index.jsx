/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import AboutUs1Date from "../../data/sections/about-us1.json";

const AboutUs1 = () => {
  return (
    <div className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="img-mons">
              <div className="row">
                <div className="col-md-5 cmd-padding valign">
                  <div className="img1 wow imago" data-wow-delay=".5s">
                    <img src={AboutUs1Date.image1} alt="" />
                  </div>
                </div>
                <div className="col-md-7 cmd-padding">
                  <div className="img2 wow imago" data-wow-delay=".3s">
                    <img src={AboutUs1Date.image2} alt="" />
                  </div>
                  <div className="img3 wow imago" data-wow-delay=".8s">
                    <img src={AboutUs1Date.image3} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 valign">
            <div className="content">
              <div className="sub-title">
                <h6>{AboutUs1Date.smallTitle}</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Split>
                <h3
                  className="words chars splitting main-title wow"
                  data-splitting
                >
                  {AboutUs1Date.title.first} <br /> {AboutUs1Date.title.second}
                </h3>
              </Split>
              <Split>
                <p className="words chars splitting wow txt" data-splitting>
                  엔트위즈소프트는 소규모 홈페이지 제작부터 국가 또는 기업의 요구사항에 맞춘 전문적인 소프트웨어까지 개발할 수 있는 <strong style={{color: '#d31e66', fontWeight: 'bold'}}>전문 소프트웨어 개발사</strong>입니다.<br/>
                  엔트위즈는 다양한 분야의 전문가가 포진되어 한발 앞선 위치에서 보다 높은 품질의 솔루션을 만들어내고자 끊임없는 연구와 개발을 거듭하고 있습니다.
                </p>
              </Split>
              {/* <div className="ftbox mt-30">
                <ul>
                  {AboutUs1Date.features.map((feature) => (
                    <li
                      key={feature.id}
                      className={`wow fadeIn ${feature.id == 2 ? "space" : ""}`}
                      data-wow-delay={feature.wowDelay}
                    >
                      <span
                        className={`icon color-font pe-7s-${feature.icon}`}
                      ></span>
                      <h6 className="custom-font">
                        {feature.name.first} <br /> {feature.name.second}
                      </h6>
                      <div className="dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs1;
