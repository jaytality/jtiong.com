import type { V2_MetaFunction } from "@remix-run/cloudflare";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "jtiong.com" },
    { name: "description", content: "Johnathan Tiong" },
  ];
};

export default function Index() {
  return (
    <div className="h-screen bg-slate-700 flex justify-center items-center">
      <h2 className="text-gray-200 font-extrabold text-5xl">jtiong.com</h2>
      <p className="text-white">
        More stuff coming soon!
      </p>
    </div>
  )
}