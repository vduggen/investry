declare module '*.vue' {
  import Vue from 'vue';

  export default Vue;
}

declare module 'v-money' {
  import money, { VMoney } from 'v-money';

  export default money;
  export { VMoney };
}
