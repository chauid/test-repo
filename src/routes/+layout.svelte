<script lang="ts">
  import '../app.css';
  import type { LayoutData } from './$types';

  export let data: LayoutData;
</script>

<main>
  <p>layout : {data.layout.a}</p>
  <p>---contents---</p>
  <slot>No Contents</slot>
  <p>--------------</p>
</main>
