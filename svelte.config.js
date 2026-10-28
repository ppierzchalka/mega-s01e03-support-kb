import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';
import { resolve } from 'node:path';

export default {
  extensions: ['.svelte', '.svx'],
  preprocess: [mdsvex({ extensions: ['.svx'], layout: { runbook: resolve('./src/lib/layouts/runbook.svelte') } })],
  kit: { adapter: adapter(), alias: { '#lib': './src/lib' } }
};
