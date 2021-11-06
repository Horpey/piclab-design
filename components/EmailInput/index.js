import Image from "next/image";

export default function index() {
  return (
    <div className="relative rounded-md shadow-sm border">
      <form>
        <div className="absolute inset-y-0 left-0 px-5 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm">
            <Image
              src="/images/icons/mail.svg"
              alt="mail"
              width={12.6}
              height={9}
            />
          </span>
        </div>
        <input
          type="email"
          name="email"
          required
          id="email"
          className="block w-full pl-10 pr-12 sm:text-sm rounded-md outline-none py-5"
          placeholder="Enter email"
        />
        <div className="absolute inset-y-0 my-2 right-0 flex items-center">
          <button
            type="submit"
            className="px-6 border-l text-sm font-semibold py-2 text-red-600 "
          >
            Request Beta
          </button>
        </div>
      </form>
    </div>
  );
}
