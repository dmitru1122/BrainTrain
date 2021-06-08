<template>
  <div class="footer">
    <div class="footer__logo"><img class="footer__logo__image" src="@/assets/logo_sm.png" /></div>
    <div class="footer__description app-text app-text_purple app-text_font-family_peace">
      2015-{{currentYear}} @ Copyright <span class="app-text_green">Success Craft</span>
    </div>
    <div class="footer__circle circle position_absolute">
      <img class="footer__circle__big position_absolute" src="@/assets/big-circle__footer.svg" />
      <img class="footer__circle__sm position_absolute" src="@/assets/circle__footer.svg" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import './Footer.scss';

@Component
export default class Footer extends Vue {
  public currentYear = new Date().getFullYear();
}
</script>
