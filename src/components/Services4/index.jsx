import React from "react";
import Split from "../Split";
import services4Data from "../../data/sections/services4.json";
import Image from "next/image";

const Services4 = ({ withBG, withPadding, halfBG, withOutTitle }) => {
  return (
    <section
      className={`services ${withPadding ? "section-padding" : ""} ${
        withBG ? "sub-bg" : ""
      }`}
    >
      <div className="container">
        {!withOutTitle && (
          <div className="sec-head custom-font text-center">
            <h6 className="wow fadeIn" data-wow-delay=".5s">
            고객사의 요구를듣고, 기획하고, 개발하고, 유지하며 지원합니다.
            </h6>
            {/* <Split> */}
              <h3 className="wow words chars splitting" data-splitting>
              Business area.
              </h3>
            {/* </Split> */}
            <span className="tbg">BUSINESS AREA</span>
          </div>
        )}
        <div className="row">
          {services4Data.map((item, index) => (
            <div className="col-lg-3" key={item.id}>
              <div
                className={`item ${
                  index != services4Data.length - 1 ? "md-mb50" : ""
                } wow fadeInUp`}
                data-wow-delay={
                  item.id == 1 ? ".5s" : item.id == 2 ? ".3s" : ".8s"
                }
              >
                <div className="businessIconBox">
                <Image className="businessIcon" src={item.icon} alt="icon" layout='fill' objectFit="contain" />
                </div>
                <h6>{item.title}</h6>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {halfBG && <div className="half-bg bottom"></div>}
    </section>
  );
};

export default Services4;
