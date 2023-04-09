export const getHostname = (url: string = '') => {
  const matches = String(url).match(/^(?:https?:)?(?:\/\/)?([^\/\?]+)/i);
  return matches && matches[1];
};
