<template>
  <div class="side-bar">
    <span class="uk-margin-auto-right uk-text-large" uk-icon="menu" uk-sticky="bottom: #offset" uk-toggle="target: #offcanvas-push"></span>

    <div id="offcanvas-push" uk-offcanvas="mode: push; overlay: true">
        <div class="uk-offcanvas-bar">

          <div class="uk-width-1-1@s uk-width-2-4@m">
            <ul class="uk-nav-default uk-nav-parent-icon" uk-nav>
              <li>
                <router-link to="/">
                  <span uk-icon="icon: home"></span> Home
                </router-link>
              </li>
              <li class="uk-parent">
                  <a href="#"><span uk-icon="icon: user"></span> My Clothes</a>
                  <ul class="uk-nav-sub">
                      <li>
                        <router-link to="/clothesList"> Clothes list</router-link>
                      </li>
                      <li>
                        <router-link to="/totalPrice"> Total price</router-link>
                      </li>
                  </ul>
              </li>
              <li class="uk-parent">
                  <a href="#"><span uk-icon="icon: cog"></span> Master</a>
                  <ul class="uk-nav-sub">
                    <li>
                      <a href="#"><span uk-icon="icon: pencil"></span> Maintenance</a>
                        <ul>
                          <li><router-link to="/brandMaintenance"> Brand</router-link></li>
                          <li><router-link to="/shopMaintenance"> Shop</router-link></li>
                          <li><a href="#">Genre</a></li>
                        </ul>
                    </li>
                  </ul>
              </li>
              <li class="uk-nav-divider"></li>
              <li>
                <a href="https://github.com/noriyuki-shimizu/mcm-client" target="_blank">
                  <span class="uk-margin-small-right" uk-icon="icon: github"></span>Git
                </a>
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