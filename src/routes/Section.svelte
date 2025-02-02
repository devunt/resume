<script lang="ts">
  import { css } from '$styled-system/css';
  import type { Snippet } from 'svelte';

  type Props = {
    title: string;
    children: Snippet;
  };

  let { title, children }: Props = $props();
</script>

<section>
  <h2 class={css({ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' })}>{title}</h2>

  {@render children()}
</section>
