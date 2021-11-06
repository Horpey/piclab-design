import Image from "next/image";
import styles from "./styles.module.scss";

import TextTag from "../../components/TextTag";
import { RichText } from "prismic-reactjs";

const AiSection = ({ data }) => {
  return (
    <div className={`${styles.headerSection} flex items-center`}>
      <div className="w-11/12 pl-4 sm:pl-6 lg:pl-16">
        <div className="flex flex-col md:flex-row ">
          <div className="md:w-8/12 relative">
            <div>
              <TextTag
                className={`absolute ${styles.headertag1}`}
                text="Person"
              />
              <TextTag
                className={`absolute ${styles.headertag2}`}
                text="Desk"
              />
              <TextTag
                className={`absolute ${styles.headertag3}`}
                text="Desk"
              />
              <TextTag
                className={`absolute ${styles.headertag4}`}
                text="Person"
              />
              <TextTag
                className={`absolute ${styles.headertag5}`}
                text="Scenery"
              />
              <TextTag
                className={`absolute ${styles.headertag6}`}
                text="Pencils"
              />
            </div>
          </div>
          <div className="md:w-4/12">
            <div className="md:w-5/6 float-right">
              <div className="bg-white shadow-lg rounded-lg md:p-8">
                <p className="text-gray-400 text-xs mb-5">
                  {RichText.render(data["ai_label"])}
                </p>
                <h1 className="text-3xl">
                  {RichText.render(data["ai_heading"])}
                </h1>
                <div className="text-center py-20">
                  <Image
                    src={data.ai_image.url}
                    alt="logo"
                    width={103}
                    height={89}
                  />
                </div>
                <p className="text-gray-500">
                  {RichText.render(data["ai_description"])}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AiSection;
