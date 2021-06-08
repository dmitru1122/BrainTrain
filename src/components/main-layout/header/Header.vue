<template>
  <div class="header">
    <nav class="header__menu header-menu_mobile">
      <div class="header__menu__company-logo company-logo_mobile">
        <img class="header__menu__company-logo__image desktop" src="@/assets/logo_big.png" />
        <h2 class="app-text app-text_mobile_header app-text_purple mobile app-text_font-family_peace">ZUPPIO</h2>
      </div>
      <div :class="['header__menu__list app-text_uppercase ', isMobileMenuOpen ? 'header__menu__list_mobile' : '']">
        <div
          v-for="item in links"
          :key="item.link"
          :class="['header__menu__list__item', item.active ? 'header__menu__list__item-active' : '']"
        >
          <a class="app-text app-text_small app-text_purple app-text_font-family_peace" @click="scrollTo(item.link)">{{
            item.title
          }}</a>
        </div>
      </div>
      <div :class="['mobile', isMobileMenuOpen ? 'header__menu-footer_mobile' : 'display_none']">
        <div class="logo"><img src="@/assets/logo_sm.png" /></div>
        <div class="description app-text app-text_purple app-text_font-family_peace">
          2015-2020 @ Copyright <span class="app-text_green">Success Craft</span>
        </div>
      </div>
      <div class="header__menu__burger-bar" @click="isMobileMenuOpen = !isMobileMenuOpen">
        <img v-if="!isMobileMenuOpen" src="@/assets/burger-bar.svg" />
        <img v-else src="@/assets/close.svg" />
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { RouterLinks } from '@/interfaces/appInterfaces';
import './Header.scss';

@Component
export default class Header extends Vue {
  public links: RouterLinks[] = [
    // { link: 'demo', active: false, title: 'Demo' },
    // { link: 'about', active: false, title: 'About' },
    { link: 'contact', active: false, title: 'Contact' },
  ];
  public mobileScreen = true;
  public isMobileMenuOpen = false;
  public slowScroll = false;

  public scrollTo(link: string): void {
    this.isMobileMenuOpen = false;
    this.$emit('clickRef', link);
  }
}
</script>
