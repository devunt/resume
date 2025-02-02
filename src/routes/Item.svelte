<script lang="ts">
  import { css } from '$styled-system/css';
  import { flex } from '$styled-system/patterns';

  type Props = {
    content: string;
    skills?: string[];
  };

  let { content, skills }: Props = $props();
</script>

<li
  class={flex({
    alignItems: 'center',
    gap: '4px',
    fontSize: '15px',
    _before: {
      display: 'block',
      content: '""',
      flexShrink: 0,
      marginRight: '4px',
      borderRadius: 'full',
      size: '4px',
      backgroundColor: 'gray.950',
    },
    '& + &': {
      marginTop: '4px',
    },
  })}
>
  {content}

  {#if skills?.length}
    <div class={flex({ alignItems: 'center', gap: '4px', flexWrap: 'wrap' })}>
      {#each skills as skill, idx (idx)}
        <div class={css({ fontSize: '12px', color: 'gray.500' })}>
          {skill}
        </div>
      {/each}
    </div>
  {/if}
</li>
