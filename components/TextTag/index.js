export default function TextTag({ text, className }) {
  return (
    <div className="textTag">
      <div
        className={`text-white inline-block rounded-full border px-4 py-1 ${className} backDropStyle`}
      >
        <span className="opacity-60 pr-1">#</span>
        {text}
      </div>
    </div>
  );
}
