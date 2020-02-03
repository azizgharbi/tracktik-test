import Vue from "vue";
import App from "../../components/App";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

//async await
import "@babel/polyfill";

Vue.use(Buefy);

new Vue({
  el: "#app",
  render: h => h(App)
});
