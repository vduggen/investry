import Vue, { VueConstructor } from 'vue';
import TheSidebar from '../components/layout/TheSidebar.vue';

const layout = {
  default: (component: VueConstructor<Vue>) => ({
    TheSidebar,
    default: component,
  }),
};

export default layout;
