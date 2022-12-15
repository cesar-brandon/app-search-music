export const getDefaultTheme = () => {
  const localStorageTheme = localStorage.getItem("default-theme");

  return localStorageTheme ? localStorageTheme : "violet";
};
