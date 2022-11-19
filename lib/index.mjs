import { toRaw } from "vue-demi";
if (!console._log) {
  console._log = console.log;
  console.log = (...args) => {
    console._log(...args.map((arg) => toRaw(arg)));
  };
}
