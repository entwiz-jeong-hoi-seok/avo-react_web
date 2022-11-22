import React from "react";
import Split from "../Split";
import Link from "next/link";

const CallToAction = ({ img, theme, subBG }) => {
  return (
    <section
      className={`call-action section-padding ${subBG ? "sub-bg" : ""} bg-img`}
      style={{ backgroundImage: `url(${img ? img : "/img/pattern.png"})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <div className="content sm-mb30">
              <Split>
                <h6 className="wow words chars splitting" data-splitting>
                우리의 가치와 목표를 추구하기 위해 새로운 시도와 변화를 멈추지 않습니다.
                </h6>
                <h2
                  className="wow words custom-font chars splitting"
                  data-splitting
                >
                  Make expert yours <b>엔트위즈</b>.
                </h2>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
