<script lang="ts">
  import { css } from '$styled-system/css';
  import type { Snippet } from 'svelte';

  type Props = {
    date?: string;
    title?: string;
    description?: Snippet;
    children?: Snippet;
  };

  let { date, title, description, children }: Props = $props();
</script>

<div class={css({ borderLeftWidth: '1px', paddingLeft: '20px', marginTop: '20px' })}>
  <div class={css({ fontSize: '15px', color: 'gray.500' })}>
    {date}
  </div>

  {#if title}
    <h2 class={css({ fontSize: '20px', fontWeight: 'bold' })}>{title}</h2>
  {/if}

  {#if description}
    <div class={css({ marginTop: '4px', marginBottom: '12px', fontSize: '15px' })}>
      {@render description()}
    </div>
  {/if}

  {#if children}
    <ul>
      {@render children()}
    </ul>
  {/if}
</div>
