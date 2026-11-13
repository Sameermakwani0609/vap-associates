import { UPDATES } from "@/data/site";

export default function Ticker() {
  const items = [...UPDATES, ...UPDATES]; // doubled for the seamless loop
  return (
    <div className="tick" aria-label="Latest compliance headlines">
      <div id="tk">
        {items.map((u, i) => (
          <span key={i}>
            <b>{u.c}</b> {u.t}
          </span>
        ))}
      </div>
    </div>
  );
}
