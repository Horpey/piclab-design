import Image from "next/image";
import styles from "./styles.module.scss";

import { RichText } from "prismic-reactjs";

const WhySection = ({ data }) => {
  return (
    <div className={`${styles.headerSection} pt-20`}>
      <div className="mx-auto pl-4 sm:pl-6 lg:pl-16">
        <div>
          <h1 className="text-3xl text-white text-center">
            Why <span className="font-bold">PicLab</span> is the perfect lorem
            <br />
            ipsum for you.
          </h1>
        </div>
        <div
          className={`flex flex-col md:flex-row -mb-24 overflow-auto ${styles.hideScrollbar}`}
        >
          {data.why_piclab.map((item, i) => (
            <div key={i} className={`md:w-5/12 ${styles.scrollCard}`}>
              <div className="md:pr-4">
                <div
                  className={`bg-white mt-16 shadow-lg rounded-lg relative ${styles.whyCard}`}
                >
                  <div className="md:p-8 w-10/12">
                    <p className={`text-gray-400 text-xs mb-5`}>
                      {RichText.render(item.label)}
                    </p>
                    <h1 className={`text-2xl mb-4  `}>
                      {RichText.render(item.heading)}
                    </h1>
                    <div className={`text-gray-500`}>
                      {RichText.render(item.description)}
                    </div>
                  </div>

                  <div
                    className={`text-center px-2 pb-2 absolute bottom-0 ${styles.imgInRound}`}
                  >
                    {RichText.render(item.image)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default WhySection;
