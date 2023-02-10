import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="flex flex-1 text-3xl justify-center">Individuelle Lösungen</div>
  );
});

export const head: DocumentHead = {
  title: "software-solutions",
};
