<template>
  <div>
    <Sites v-if="show"></Sites>
    <SiteDetails v-if="!show" :id="id"></SiteDetails>
  </div>
</template>

<script>
//Event
import { EventBus } from "./eventBus";
//Components
import Sites from "./Sites";
import SiteDetails from "./SiteDetails";
//style
import "./../public/css/app.scss";

export default {
  name: "App",
  data() {
    return {
      show: true,
      id: null
    };
  },
  components: { Sites, SiteDetails },
  created() {
    EventBus.$on("showDetails", ({ show, id }) => {
      this.show = show;
      this.id = id;
    });
    EventBus.$on("close", status => {
      this.show = status;
    });
  }
};
</script>
