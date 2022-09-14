<template>
  <div class="console">
    <div class="console__header">
      <div class="console__header-tab">Console</div>

      <div class="console__header-actions">
        <button title="Run in the browser console" @click="onRunInTheBrowser">
          ▶️
        </button>
      </div>
    </div>
    <div class="console__line-list">
      <console-line
        v-for="message in messageList"
        :key="message.id"
        :message="message.message"
        :type="message.type"
      />
    </div>
  </div>
</template>

<script>
import ConsoleLine from "./ConsoleLine.vue";
import Logger from "../../../src";

const uuid = () => {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
};

let _ConsoleLogger = null;

export default {
  name: "Console",
  components: { ConsoleLine },
  props: {
    code: { type: String, default: "" },
  },
  data() {
    return {
      messageList: [],
    };
  },
  created() {
    let self = this;

    class _ConsoleLogger extends Logger {
      printDebug() {
        self.messageList.push({
          id: uuid(),
          message: this.build(),
          type: "print-debug",
        });
      }

      print(method) {
        self.messageList.push({
          id: uuid(),
          message: this.build(),
          type: method.name,
        });
        this.clear();
      }
    }

    this.ConsoleLogger = _ConsoleLogger;
  },
  watch: {
    code: {
      immediate: true,
      handler(newValue) {
        if (!newValue) return;

        this.messageList = [];
        let code = this.getClearCode(newValue);
        let consoleLoggerClass = this.getConsoleLoggerClass();
        const logger = new consoleLoggerClass();
        eval(code);
      },
    },
  },
  methods: {
    getConsoleLoggerClass() {
      if (this.$_class) return this.$_class;

      const self = this;

      class ConsoleLogger extends Logger {
        printDebug() {
          self.messageList.push({
            id: uuid(),
            message: this.build(),
            type: "print-debug",
          });
        }

        print(method) {
          self.messageList.push({
            id: uuid(),
            message: this.build(),
            type: method.name,
          });
          this.clear();
        }
      }

      this.$_class = ConsoleLogger;
      return ConsoleLogger;
    },
    getClearCode(code) {
      // Remove useless and invalid lines like import from the code
      let lines = code.split("\n");
      lines = lines.filter((l) => !l.startsWith("import "));
      lines = lines.filter((l) => !l.startsWith("import "));
      lines = lines.filter((l) => !l.startsWith("const logger ="));
      lines = lines.filter((l) => !l.startsWith("//"));

      return lines.join(" ");
    },
    onRunInTheBrowser() {
      let code = this.getClearCode(this.code);
      const logger = new Logger();
      eval(code);
    },
  },
};
</script>

<style scoped>
.console {
  background-color: var(--console-bg);
  border-radius: 0 0 8px 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.console__header {
  background-color: var(--console-header-bg);
  font-family: var(--console-line-font-family);
  font-size: var(--console-line-font-size);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.console__header-tab {
  display: inline-block;
  width: auto;
  padding: 2px 12px;
  color: var(--console-tab-color);
  border-bottom: 2px solid var(--console-tab-border);
}

.console__header-actions {
  padding: 0 4px;
}
</style>
