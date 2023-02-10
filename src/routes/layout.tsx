import { component$, Slot } from "@builder.io/qwik";
import { loader$ } from "@builder.io/qwik-city";

import Header from "../components/header/header";

export const serverTimeLoader = loader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer class="flex flex-1 justify-center p-4">
        <a>Made with ♡ by Stefan</a>
      </footer>
    </>
  );
});
