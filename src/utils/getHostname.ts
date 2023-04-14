export const getHostname = (str: string = '') => {
  const { hostname } = new URL(str);
  return hostname;
};

/*
export const getHostname = (url: string = '') => {
  const matches = String(url).match(/^(?:https?:)?(?:\/\/)?([^\/\?]+)/i);
  return matches && matches[1];
};
*/
