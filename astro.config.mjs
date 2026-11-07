// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// En GitHub Actions, GITHUB_REPOSITORY tiene el formato "owner/repo".
const repository = process.env.GITHUB_REPOSITORY ?? '';
const [owner, repo] = repository.split('/');
const isUserSite = Boolean(owner && repo === `${owner}.github.io`);

const site = owner ? `https://${owner}.github.io` : undefined;
const base = owner && repo && !isUserSite ? `/${repo}/` : '/';

// https://astro.build/config
export default defineConfig({
  ...(site ? { site } : {}),
  base,
  vite: {
    plugins: [tailwindcss()],
  },
});
