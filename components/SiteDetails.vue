<template>
  <div>
    <b-loading :is-full-page="isFullPage" :active.sync="isLoading"></b-loading>
    <div class="card">
      <div class="card-image">
        <figure class="image">
          <img :src="image" class="img-site" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ site.title }}</p>
            <p class="subtitle is-6">
              {{ firstname }}
              <br />
            </p>
          </div>
        </div>

        <div class="content">
          <span class="site-info">
            <i class="fas fa-envelope"></i>
            {{ email }}
            <br />
          </span>
          <span class="site-info">
            <i class="fas fa-phone"></i>
            {{ phone }}
            <br />
          </span>
          <span class="site-info">
            <i class="fas fa-map-marker"></i>
            {{ address.city }}
            <br />
          </span>

          <div class="address-block">
            {{ address.country }}
            <br />
            {{ address.street }}
            <br />
            {{ address.zipCode }}
            <br />
          </div>

          <time>{{ site.createAt }}</time>
          <SiteTags :tags="tags"></SiteTags>
        </div>
        <b-button rounded v-on:click="close">
          <i class="fas fa-angle-left"></i> Back
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
//Event
import { EventBus } from "./eventBus";
//Services
import { getSiteWithId } from "../services/services";
//Components
import SiteTags from "./SiteTags";

export default {
  name: "SiteDetails",
  props: {
    id: String
  },
  data() {
    return {
      show: true,
      site: {},
      isLoading: false,
      isFullPage: true
    };
  },
  components: { SiteTags },
  computed: {
    email() {
      return this.site?.contacts?.main?.email || "not found";
    },
    phone() {
      return this.site?.contacts?.main?.phoneNumber || "not found";
    },
    firstname() {
      return this.site?.contacts?.main?.firstname || "not found";
    },
    address() {
      return {
        city: this.site?.address?.city || "not found",
        country: this.site?.address?.country || "not found",
        street: this.site?.address?.street || "not found",
        zipCode: this.site?.address?.zipCode || "not found"
      };
    },
    image() {
      return (
        this.site?.images?.[0] ||
        "https://bulma.io/images/placeholders/1280x960.png"
      );
    },
    tags() {
      return this.site?.tags;
    }
  },
  methods: {
    close: function() {
      EventBus.$emit("close", true);
    },
    add: function() {
      this.count += 3;
    }
  },
  created() {
    this.isLoading = true;
    getSiteWithId(this.id).then(details => {
      this.site = details;
      this.isLoading = false;
    });
  }
};
</script>
