import type { V2_MetaFunction } from "@remix-run/cloudflare";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "jtiong.com" },
    { name: "description", content: "Johnathan Tiong" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>jtiong.com</h1>
      <p>
        Not a lot is going on here right now, but stay tuned!
      </p>
    </div>
  );
}
