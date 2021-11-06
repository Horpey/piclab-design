import Image from "next/image";
import styles from "./styles.module.scss";

import TextTag from "../../components/TextTag";
import { RichText } from "prismic-reactjs";

const Header = ({ data }) => {
  return (
    <div className={styles.headerSection}>
      <div className="mx-auto pl-4 sm:pl-6 lg:pl-16">
        <div className="flex flex-col md:flex-row ">
          <div className="md:w-4/12">
            <div className="md:pr-10">
              <div className="pt-16 pb-32">
                <Image
                  src="/images/logo.svg"
                  alt="logo"
                  width={118}
                  height={40}
                />
              </div>
              <div>
                <p className={`font-idlewild ${styles.comingSoon}`}>
                  {RichText.render(data["header_label"])}
                </p>
                <div className="text-white text-4xl">
                  {RichText.render(data["header_text"])}
                </div>
              </div>
              <div className="mt-28 md:w-3/4">
                <p className="text-white border-l-2 pl-8">
                  {RichText.render(data["header_quote"])}
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-8/12 relative">
            <div className="">
              <div
                className="-mr-3.5"
                style={{
                  width: "100%",
                  height: "100vh",
                  position: "relative",
                }}
              >
                <Image
                  src="/images/laptop.png"
                  alt="laptop"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className={`absolute ${styles.sampleImg}`}>
              <Image
                src="/images/sampleimg.png"
                alt="sample"
                width={442}
                height={375}
              />
            </div>
            <div className={`absolute ${styles.sampleImg2}`}>
              <Image
                src="/images/samplepen.png"
                alt="sample"
                width={309}
                height={260}
              />
            </div>
            <div className={`absolute ${styles.sampleImg3}`}>
              <Image
                src="/images/sampleimg3.png"
                alt="sample"
                width={309}
                height={260}
              />
            </div>
            <TextTag
              className={`absolute ${styles.headertag1}`}
              text="Person"
            />
            <TextTag className={`absolute ${styles.headertag2}`} text="Desk" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
