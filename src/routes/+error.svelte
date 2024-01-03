<script lang="ts">
  import { page } from '$app/stores';
</script>

<h1>Error: error.svelte</h1>
<p>status: {$page.status}</p>
<p>error message: {$page.error?.message}</p>
