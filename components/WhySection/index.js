import { RichText } from "prismic-reactjs";
import Image from "next/image";

const WhySection = ({ data }) => {
  return (
    <div className="whySection">
      <div className={`headerSection pt-20`}>
        <div className="mx-auto pl-4 sm:pl-6 lg:pl-16">
          <div>
            <h1 className="text-3xl text-white text-center md:mb-0 mb-5">
              Why <span className="font-bold">PicLab</span> is the perfect lorem
              <br />
              ipsum for you.
            </h1>
          </div>
          <div
            className={`flex md:flex-row -mb-24 overflow-auto hideScrollbar`}
          >
            {data.why_piclab.map((item, i) => (
              <div key={i} className={`md:w-5/12 scrollCard w-11/12`}>
                <div className="md:pr-4">
                  <div
                    className={`bg-white md:mt-16 mt-5 shadow-lg rounded-lg md:mr-0 mr-3 relative whyCard`}
                  >
                    <div className="md:p-8 w-10/12 p-5 md:mb-0 mb-5">
                      <p className={`text-gray-400 text-xs mb-5`}>
                        {RichText.render(item.label)}
                      </p>
                      <h1 className={`text-2xl mb-4`}>
                        {RichText.render(item.heading)}
                      </h1>
                      <div className={`text-gray-500`}>
                        {RichText.render(item.description)}
                      </div>
                    </div>

                    <div
                      className={`text-center px-2 pb-2 absolute bottom-0 whyCardImg w-full`}
                    >
                      {/* <span>{RichText.render(item.image)}</span> */}
                      <div className="imagePlace">
                        <Image
                          src="/images/whyimg.png"
                          alt="why"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhySection;
