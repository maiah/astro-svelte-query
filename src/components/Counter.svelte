<script lang="ts">
  let count = $state({ value: 0 });
</script>

<h2>Counter</h2>
<p>{count.value}</p>
<button onclick={() => count.value++}>Add</button>
