import Link from "next/link";

export default function Home() {
  return (
    <body class="__className_aaf875">
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div class="z-10 max-w-5xl w-full items-center justify-between text-sm">
          <h1 class="text-4xl font-bold mb-5">CPRG 306: Web Development 2 - Assignments</h1>
          <div class="text-lg">
            <ul>
              <li class="hover:text-green-400 hover:underline">
                <a href="/week-2">Week 2 Assignment</a>
              </li>
              <li class="hover:text-green-400 hover:underline">
                <a href="/week-3">Week 3 Assignment</a>
              </li>
              <li class="hover:text-green-400 hover:underline">
                <a href="/week-4">Week 4 Assignment</a>
              </li>
              <li class="hover:text-green-400 hover:underline">
                <a href="/week-5">Week 5 Assignment</a>
              </li>
              <li class="hover:text-green-400 hover:underline">
                <a href="/week-6">Week 6 Assignment</a>
              </li>
              <li class="hover:text-green-400 hover:underline">
                <a href="/week-7">Week 7 Assignment</a>
              </li>
              <li class="hover:text-green-400 hover:underline">
                <a href="/week-8">Week 8 Assignment</a>
              </li>
              <li class="hover:text-green-400 hover:underline">
                <a href="/week-10">Week 10 Assignment</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </body>
  );
}
