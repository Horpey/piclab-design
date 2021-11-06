import Image from "next/image";
import styles from "./styles.module.scss";

import { RichText, Date as ParseDate } from "prismic-reactjs";

const NewsSection = ({ data }) => {
  const HumanizeDate = (dateString) => {
    var dateFormat = new Date(dateString)
      .toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
      .split(" ")
      .join("-");
    return dateFormat;
  };
  return (
    <div className={styles.headerSection}>
      <div className="mx-auto pl-4 sm:pl-6 lg:pl-16">
        <div className="flex flex-col md:flex-row ">
          <div className="md:w-6/12">
            <div className="md:pr-10">
              <div className="mt-48">
                <h1 className="text-3xl text-white">
                  <span className="font-bold">News</span> lorem at PicLab
                </h1>
              </div>
              <div className="md:w-3/4 mt-20">
                {data.news.map((item, i) => (
                  <div
                    key={i}
                    className={
                      "border-b py-10 flex " +
                      (i + 1 == data.news.length
                        ? "border-opacity-0"
                        : "border-opacity-20")
                    }
                  >
                    <div className="uppercase text-white opacity-40 w-6/12">
                      {HumanizeDate(ParseDate(item.date))}
                    </div>
                    <h3 className="text-white text-2xl underline w-6/12">
                      {RichText.render(item.title)}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsSection;
