<template>
  <div class="header">
    <nav class="header__menu header-menu_mobile">
      <div class="header__menu__company-logo company-logo_mobile">
        <img
          class="header__menu__company-logo__image desktop"
          src="@/assets/Vg-logo.png"
        />
        <h2
          class="
            app-text app-text_mobile_header app-text_purple
            mobile
            app-text_font-family_peace
          "
        >
          BestBrain
        </h2>
      </div>
      <div
        :class="[
          'header__menu__list app-text_uppercase ',
          isMobileMenuOpen ? 'header__menu__list_mobile' : '',
        ]"
      >
        <div
          v-for="item in links"
          :key="item.link"
          :class="[
            'header__menu__list__item',
            item.active ? 'header__menu__list__item-active' : '',
          ]"
        >
          <a
            class="
              app-text app-text_small app-text_purple app-text_font-family_peace
            "
            @click="scrollTo(item.link)"
            >{{ item.title }}</a
          >
        </div>
      </div>
      <div
        :class="[
          'mobile',
          isMobileMenuOpen ? 'header__menu-footer_mobile' : 'display_none',
        ]"
      >
        <div class="logo"><img src="@/assets/Vg-logo.png" /></div>
        <div
          class="
            description
            app-text app-text_purple app-text_font-family_peace
          "
        >
          2020 @ Copyright <span class="app-text_green">VCorp</span>
        </div>
      </div>
      <div
        class="header__menu__burger-bar"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <img v-if="!isMobileMenuOpen" src="@/assets/burger-bar.svg" />
        <img v-else src="@/assets/close.svg" />
      </div>
    </nav>
  </div>
</template>

<script>
import "./Header.scss";

export default {
  name: "Header",
  components: {},
  data() {
    return {
      links: [
        // { link: 'demo', active: false, title: 'Demo' },
        // { link: 'about', active: false, title: 'About' },
        { link: "contact", active: false, title: "Contact" },
      ],
      mobileScreen: true,
      isMobileMenuOpen: false,
      slowScroll: false,
    };
  },
  methods: {
    scrollTo(link) {
      this.isMobileMenuOpen = false;
      this.$emit("clickRef", link);
    },
  },
};
</script>
