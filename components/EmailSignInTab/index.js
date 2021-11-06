import EmailInput from "../EmailInput";
import Image from "next/image";

export default function EmailSignInTab() {
  return (
    <div className="fixed bottom-1 w-full">
      <div className="p-4">
        <div className="bg-white p-3 flex flex-col justify-center md:items-center sm:flex-row sm:items-start rounded-lg">
          <div className="mb-12 sm:mb-0 sm:w-1/3">
            <EmailInput />
          </div>
          <div className="mb-12 sm:mb-0 sm:w-1/3">
            <div className="text-center">
              <Image
                src="/images/icons/piclab.png"
                alt="logo"
                width={106}
                height={36}
              />
            </div>
          </div>
          <div className="mb-12 sm:mb-0 sm:w-1/3">
            <div className="text-right">
              <button
                type="submit"
                className="px-6 text-base font-semibold py-2 text-red-600 items-center flex ml-auto"
              >
                <Image
                  src="/images/icons/signout.svg"
                  alt="mail"
                  width={17}
                  height={22}
                />
                <span className="ml-3">Sign in</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
