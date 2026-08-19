export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

/* Browser-chrome colour per theme. Mirrors `--site-background` in
   globals.css — the address bar can't read a CSS variable. */
export const themeColors: Record<Theme, string> = {
  light: "#ffffff",
  dark: "#08090c",
};

/* Runs synchronously in <head> while the HTML is still parsing, so a stored
   preference is on the element before the first paint rather than after
   hydration — the difference between a correct page and a visible flash of the
   wrong theme.

   Absent a stored choice it deliberately writes nothing: no attribute means the
   `prefers-color-scheme` rules in globals.css stay in charge, so a first-time
   visitor gets their OS theme and keeps following it if they change it. */
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}})();`;
