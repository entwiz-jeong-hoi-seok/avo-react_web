/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import portfolio1Data from "../../data/sections/portfolio1.json";

const PortfolioCustomColumn = ({
  column,
  filterPosition,
  hideFilter,
  hideSectionTitle,
}) => {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      setTimeout(() => {
        initIsotope();
      }, 1000);
    }
  }, [pageLoaded]);
  return (
    <section className="portfolio section-padding pb-70">
      {!hideSectionTitle && (
        <div className="container">
          <div className="sec-head custom-font">
            <h6 className="wow fadeIn" data-wow-delay=".5s">
            우리는 120%의 결과물을 위해 노력합니다.
            </h6>
            {/* <Split> */}
              <h3 className="wow words chars splitting" data-splitting>
              Solution S/W.
              </h3>
              <p className="solutionText"> 문제를 해결하기 위한 올바른 전략 수립부터 다양한 관점을 포용하는 투명한 협업 프로세스 정립, 변화에 유연하게 대응하고 재사용이 가능한 디자인 시스템을 구축합니다. 이를 
바탕으로 쉽고 빠르게 적용하고 테스트하며 확장해나갈 수 있습니다.</p>
            {/* </Split> */}
            <span className="tbg text-right">Solution S/W</span>
          </div>
        </div>
      )}

      <div className={`${column === 3 ? "container-fluid" : "container"}`}>
        <div className="row">
          <div className="gallery full-width">
            {portfolio1Data.map((item, index) => (
              <div
                key={item.id}
                className={`${
                  column === 3
                    ? "col-lg-4 col-md-6"
                    : column === 2
                    ? "col-md-6"
                    : "col-12"
                } items ${item.filterCategory} wow fadeInUp ${
                  item.id === 2 && column == 3
                    ? "lg-mr"
                    : item.id === 1 && column == 2
                    ? "lg-mr"
                    : ""
                }`}
                data-wow-delay=".4s"
              >
                <div className="item-img">
                  <Link href="/project-details2/project-details2-dark">
                    <a className="imago wow">
                      <img src={item.image} alt="image" />
                      <div className="item-img-overlay"></div>
                    </a>
                  </Link>
                </div>
                <div className="cont">
                  <h6>{item.title}</h6>
                  <span>
                    {item.tags.map((tag, index) => (
                      <React.Fragment key={index * 3}>
                        <Link href="/works4/works4-dark">{tag}</Link>
                        {index == item.tags.length - 1 ? "" : ","}
                      </React.Fragment>
                    ))}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCustomColumn;
