import DefaultLayout from "~/layouts/Default.vue";
import "tachyons";
import "~/assets/style.css";

export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);

  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Patrick+Hand|Signika"
  });

  head.meta.push({
    name: "author",
    content: "Matt Ondo"
  });
}
