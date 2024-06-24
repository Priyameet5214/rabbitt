import FlipWords from "./flipWords";

export default function FlipWordsDemo() {
  const words = ["Smarter", "Custom", "Faster", "easier", "Better", "Accurate"];

  return (
    <div className="h-[15rem] flex justify-center items-center">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Build
        <FlipWords words={words} /> <br />
        Ai Solutions with Rabbitt.ai
      </div>
    </div>
  );
}
