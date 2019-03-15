<template>
  <div class="side-bar">
    <span class="uk-margin-auto-right uk-text-large" uk-icon="menu" uk-sticky="bottom: #offset" uk-toggle="target: #offcanvas-push"></span>

    <div id="offcanvas-push" uk-offcanvas="mode: push; overlay: true">
        <div class="uk-offcanvas-bar">

          <div class="uk-width-1-2@s uk-width-2-5@m">
            <ul class="uk-nav-default uk-nav-parent-icon" uk-nav>
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li class="uk-parent">
                  <a href="#">My Clothes</a>
                  <ul class="uk-nav-sub">
                      <li><a href="#">Sub item</a></li>
                      <li>
                          <a href="#">Sub item</a>
                          <ul>
                              <li><a href="#">Sub item</a></li>
                              <li><a href="#">Sub item</a></li>
                          </ul>
                      </li>
                  </ul>
              </li>
              <li class="uk-parent">
                  <a href="#">Parent</a>
                  <ul class="uk-nav-sub">
                      <li><a href="#">Sub item</a></li>
                      <li><a href="#">Sub item</a></li>
                  </ul>
              </li>
            </ul>
          </div>

        </div>
    </div>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SideBar extends Vue {

}

</script>