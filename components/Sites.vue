<template>
  <div class="panel">
    <b-loading :is-full-page="isFullPage" :active.sync="isLoading"></b-loading>
    <p class="panel-heading">Sites</p>
    <div class="panel-block">
      <div class="control has-icons-left">
        <input
          v-model="searchText"
          class="input"
          type="text"
          placeholder="Search"
          v-on:change="search"
        />
        <span class="icon is-left">
          <i class="fas fa-search" aria-hidden="true"></i>
        </span>
      </div>
    </div>

    <a class="panel-block" v-for="site in data" :key="site.id" v-on:click="showDetails(site.id)">
      <span class="panel-icon">
        <i class="fas fa-angle-double-right" aria-hidden="true"></i>
      </span>
      <img :src="site.images[0 || 1 || 2]" class="img-rounded" />
      {{ site.title }}
    </a>

    <div class="panel-block">
      <button class="button is-link is-outlined is-fullwidth" v-on:click="add">{{ text }}</button>
    </div>
  </div>
</template>

<script>
//Event
import { EventBus } from "./eventBus";
//Services
import { getSites, searchForSite } from "../services/services";

export default {
  name: "Sites",
  data() {
    return {
      loading: true,
      data: [],
      count: 5,
      searchText: "",
      text: "show more",
      isLoading: false,
      isFullPage: true
    };
  },
  watch: {
    count: function(newCounter) {
      this.isLoading = true;
      getSites(newCounter).then(res => {
        this.data = res;
        this.isLoading = false;
        this.text = "show more";
        this.searchText = "";
      });
    }
  },
  methods: {
    showDetails: function(id) {
      EventBus.$emit("showDetails", { show: false, id });
    },
    add: function() {
      this.count += 3;
    },
    search: function() {
      searchForSite(this.searchText, this.count).then(data => {
        if (data.length > 0) {
          this.data = data;
          this.text = "Back home";
        } else {
          this.$buefy.toast.open(`${this.searchText} not found`);
        }
      });
    }
  },
  created() {
    this.isLoading = true;
    getSites(this.count).then(res => {
      this.data = res;
      this.isLoading = false;
    });
  }
};
</script>
