import { component$ } from "@builder.io/qwik";
import { QwikLogo } from "../icons/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <header class="flex flex-1 justify-between h-20 p-4">
      <div class="flex">
        <a
          href="https://app.kasasi.de"
          target="_blank"
          title="qwik"
          rel="noopener noreferrer"
        >
          <QwikLogo />
        </a>
      </div>
      <ul class="flex gap-3">
        <Link class="cursor-pointer" href="/software-solutions/">
          Softwarelösungen
        </Link>
        <Link class="cursor-pointer" href="/individual-solutions/">
          Individuelle Lösungen
        </Link>
        <Link class="cursor-pointer" href="/about-kasasi/">
          Über kasasi
        </Link>
      </ul>
    </header>
  );
});
