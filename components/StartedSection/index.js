import EmailInput from "../EmailInput";

import { RichText } from "prismic-reactjs";

const StartedSection = ({ data }) => {
  return (
    <div className="getStarted-section">
      <div className="headerSection">
        <div className="mx-auto pl-4 sm:pl-6 lg:pl-16">
          <div className="flex h-screen items-center justify-center">
            <div className="md:w-4/12">
              {" "}
              <div className="text-3xl text-white text-center mb-8">
                {RichText.render(data.get_started_text)}
              </div>
              <EmailInput />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StartedSection;
