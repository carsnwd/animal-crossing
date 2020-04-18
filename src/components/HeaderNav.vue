<template>
    <div class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-menu">
            <div class="navbar-start">
                <router-link class="navbar-item" tag="a" to="/bugs"><font-awesome-icon icon="bug" size="lg" class="nav-fa-icon"/>Bugs</router-link>
                <router-link class="navbar-item" tag="a" to="/fish"><font-awesome-icon icon="fish" size="lg" class="nav-fa-icon"/>Fish</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeaderNav",
    components: "FontAwesomeIcon"
}
</script>

<style lang="less">
    .nav-fa-icon {
        padding-right: 5px;
    }
</style>