import Header from "../Header";
import AiSection from "../AiSection";
import WhySection from "../WhySection";
import NewsSection from "../NewsSection";
import StartedSection from "../StartedSection";

const SlicePicker = (slice, data) => {
  switch (slice) {
    case "header":
      return <Header data={data} />;
    case "ai":
      return <AiSection data={data} />;
    case "why":
      return <WhySection data={data} />;
    case "news":
      return <NewsSection data={data} />;
    case "getstarted":
      return <StartedSection data={data} />;
    default:
      return "";
  }
};

const Slice = ({ sliceType, data }) => {
  return SlicePicker(sliceType, data);
};

export default Slice;
