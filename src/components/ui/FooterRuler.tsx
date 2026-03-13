import { FaAtom } from "react-icons/fa";

const bars = [4,5,4,6,5,7,5,4,6,8,5,7,9,6,11,8,14,10,18,14,22,18,26,28,30,28,26,22,18,14,10,8,14,11,8,6,9,7,5,8,6,4,7,5,6,4,5,6,4,5];

export default function FooterRuler() {
  return (
    <div className="flex flex-col items-center gap-2 mt-10">
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center"
        style={{ background: "#0a4a45" }}
      >
        <FaAtom size={16} color="white" />
      </div>
      <div className="flex items-end gap-[2px]">
        {bars.map((h, i) => (
          <div
            key={i}
            className="w-px rounded-full"
            style={{ height: h, backgroundColor: "rgba(10,74,69,0.25)" }}
          />
        ))}
      </div>
    </div>
  );
}
