<script lang="ts">
  import { createRouter } from "@nanostores/router";
  import { addMinutes } from "date-fns/addMinutes";
  import { addSeconds } from "date-fns/addSeconds";

  import { onMount } from "svelte";
  import {
    revalidationSchedules,
    setRouteRevalidationSchedule,
  } from "../runes/page-route-pattern-revalidate-schedule.svelte";
  import Counter from "./Counter.svelte";

  const props: { pageRoutePattern: string } = $props();

  onMount(() => {
    const now = new Date();
    const schedule = revalidationSchedules[props.pageRoutePattern];

    // const controller = new AbortController();
    // const ABORT_REASON = "component unmounted";

    if (schedule && schedule <= now) {
      console.log("revalidation schedule triggered!");

      // fetch("/api/spa-build-manager", { signal: controller.signal })
      // .then((response) => response.text())
      // .then((result) => {
      //   if (!isUnmouted && result !== SPA_BUILD_ID) {
      //     console.log(
      //       "========= SPA Build Manager result",
      //       result,
      //       SPA_BUILD_ID
      //     );

      //     location.reload();
      //   }
      // })
      // .catch((error) => {
      //   if (error !== ABORT_REASON) {
      //     console.error("got error when getting SPA Build Manager info", error);
      //   }
      // });

      window.location.reload();
    } else {
      console.log("no revalidation schedule yet, setting a new one");

      setRouteRevalidationSchedule(props.pageRoutePattern, addMinutes(now, 5));
      setRouteRevalidationSchedule(props.pageRoutePattern, addSeconds(now, 5));
    }

    return () => {
      // controller.abort(ABORT_REASON);
      // isUnmouted.current = true;
    };
  });

  // const router = createRouter({
  //   home: "/app",
  //   about: "/app/about",
  // });

  // let page = $state({ value: "home" });

  // router.subscribe((route) => {
  //   console.log("==== current route:", route?.path, route?.route);

  //   if (!route) {
  //     return;
  //   }

  //   page.value = route.route;
  // });
</script>

<!-- <div>
  <a href="/app">Home</a>
  <a href="/app/about">About</a>
</div> -->

<!-- {#if page.value === "home"}
  <Counter />
{:else if page.value === "about"}
  <h3>This is the about page!</h3>
{/if} -->

<h3>Home here</h3>
