import Theme from "vitepress/theme";
import Example from "./Example.vue";
import Console from "./Console.vue";
import { EnhanceAppContext } from "vitepress/dist/client";
import "./styles.css";

export default {
  ...Theme,
  enhanceApp({ app }: EnhanceAppContext) {
    app.component("Example", Example);
    app.component("Console", Console);
  },
};
