<script lang="ts">
  import { createRouter } from "@nanostores/router";

  import Counter from "./Counter.svelte";

  const router = createRouter({
    home: "/app",
    about: "/app/about",
  });

  let page = $state({ value: "home" });

  router.subscribe((route) => {
    console.log("==== current route:", route?.path, route?.route);

    if (!route) {
      return;
    }

    page.value = route.route;
  });
</script>

<div>
  <a href="/app">Home</a>
  <a href="/app/about">About</a>
</div>

{#if page.value === "home"}
  <Counter />
{:else if page.value === "about"}
  <h3>This is the about page!</h3>
{/if}
