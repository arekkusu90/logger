<template>
  <div class="console-line" :class="`console-line--${type}`">
    <template v-if="type === 'print-debug'">
      {{ message }}
    </template>
    <template v-else>
      <span class="console-line__message">
        <span class="console-line__source-code">
          <span class="console-line__message-text" v-html="messageHtml"></span>
        </span>
      </span>
    </template>
  </div>
</template>

<script>
export default {
  name: "ConsoleLine",
  props: {
    message: { type: Array, default: () => [] },
    type: { type: String, default: "log" },
  },
  computed: {
    messageHtml() {
      let [message = "", ...substitutionList] = this.message;

      let substring = "";
      let parts = [];

      message.split("").forEach((char, index) => {
        substring += char;

        if (substring.endsWith("%c%s")) {
          let style = substitutionList.shift();
          let text = substitutionList.shift();
          let formatted = this.getFormattedText(text, style);
          parts.push(formatted);
        }

        if (substring.endsWith("%o")) {
          let expression = substitutionList.shift();
          let formatted = this.getFormattedExpression(expression);
          parts.push(formatted);
        }
      });

      return parts.join("");
    },
  },
  methods: {
    getFormattedText(text, styles) {
      return `<span style="${styles}">${text}</span>`;
    },
    getFormattedExpression(expression) {
      return expression?.toString?.() ?? expression;
    },
  },
};
</script>

<style scoped>
.console-line {
  font-family: var(--console-line-font-family);
  font-size: var(--console-line-font-size);
  white-space: pre-wrap;
  padding: 6px 12px;
  display: flex;
}

.console-line:not(:first-of-type) {
  border-top: 1px solid var(--console-line-border);
}

.console-line__message {
  flex: 1 1 auto;
  display: flex;
}

.console-line__source-code {
  flex: 1 1 auto;
  line-height: 1.2;
}

.console-line__message-text :deep(span) {
  display: inline-block;
  max-width: 100%;
}

.console-line--warn {
  background-color: var(--console-line-warn-bg);
  border-top-color: var(--console-line-warn-border);
  color: var(--console-line-warn-color);
}

.console-line--error {
  background-color: var(--console-line-error-bg);
  border-top-color: var(--console-line-error-border);
  color: var(--console-line-error-color);
}
</style>
