// Builds links that work both locally and on GitHub Pages (which uses a sub-folder).
export const url = (path = '') =>
  import.meta.env.BASE_URL.replace(/\/$/, '') + '/' + path.replace(/^\//, '');
