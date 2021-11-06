import styles from "./styles.module.scss";
export default function TextTag({ text, className }) {
  return (
    <div
      className={`text-white inline-block rounded-full border px-4 py-1 ${className} ${styles.backDropStyle}`}
    >
      <span className="opacity-60 pr-1">#</span>
      {text}
    </div>
  );
}
