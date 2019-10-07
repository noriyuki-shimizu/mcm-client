<template>
    <div class="side-bar">
        <span
            class="uk-margin-auto-right uk-text-large"
            uk-icon="menu"
            uk-sticky="bottom: #offset"
            uk-toggle="target: #offcanvas-push"
        />

        <div id="offcanvas-push"
uk-offcanvas="mode: push; overlay: true">
            <div class="uk-offcanvas-bar">
                <div class="uk-width-1-1@s uk-width-2-4@m">
                    <ul class="uk-nav-default uk-nav-parent-icon"
uk-nav>
                        <li>
                            <router-link to="/home">
                                <span uk-icon="icon: home" /> Home
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/map">
                                <span uk-icon="icon: location" /> Map
                            </router-link>
                        </li>
                        <li class="uk-parent">
                            <a href="#"
                                ><span uk-icon="icon: user" /> My Clothes</a
                            >
                            <ul class="uk-nav-sub">
                                <li>
                                    <router-link to="/clothesList">
                                        Clothes list
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/totalPrice">
                                        Total price
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="uk-parent">
                            <a href="#"
                                ><span uk-icon="icon: cog" /> Maintenance</a
                            >
                            <ul class="uk-nav-sub">
                                <li>
                                    <router-link to="/clothesMaintenance">
                                        Clothes
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/brandMaintenance">
                                        Brand
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/shopMaintenance">
                                        Shop
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="uk-nav-divider" />
                        <li>
                            <a
                                href="https://github.com/noriyuki-shimizu/mcm-client"
                                target="_blank"
                            >
                                <span
                                    class="uk-margin-small-right"
                                    uk-icon="icon: github"
                                />Git
                            </a>
                        </li>
                        <li class="uk-nav-divider" />
                        <li>
                            <a @click="signout"
href="#">
                                <span
                                    class="uk-margin-small-right"
                                    uk-icon="icon:  sign-out"
                                />Signout
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
import auth from '@/firebase/auth';

@Component
export default class SideBar extends Vue {
    private async signout(): Promise<any> {
        await auth.logout();
        await auth.onAuth();
        this.$router.push('/signin');
        location.reload();
    }
}
</script>
