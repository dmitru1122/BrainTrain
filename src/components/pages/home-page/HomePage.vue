<template>
  <div class="home">
    <section
      :class="['setting', isScreenOpacity ? 'screen--opacity' : 'screen']"
    >
      <h3 class="setting__title app-text app-text--xxl">Развивай себя</h3>
      <div class="setting__inline-container">
        <div class="setting__number-size block-cs">
          <h3 class="app-text app-text--l">Размер числа</h3>
          <select class="select" v-model="currentNumberSize">
            <option v-for="size in numberSize" :key="size" :value="size">
              {{ size }}
            </option>
          </select>
        </div>
        <div class="setting__duration block-cs">
          <h3 class="app-text app-text--l">Продолжительность показа (c.)</h3>
          <select class="select" v-model="currentDuration">
            <option
              v-for="duration in sizeShowPeriod"
              :key="duration"
              :value="duration"
            >
              {{ duration }}
            </option>
          </select>
        </div>
      </div>
      <div>
        <button
          @click="showTest"
          class="setting__btn-show app-text app-text--uppercase"
        >
          Проверить
        </button>
      </div>
    </section>
    <div v-if="isTestVisible" class="block-cs--fixed">
      <section v-if="isShowNotice" class="notice">
        <Spinner :current-number="timer" />
      </section>
      <section v-if="isShowNumber" class="show-number">
        <Spinner :current-number="currentNumber" />
      </section>
      <section v-if="isShowInput" class="input-form">
        <div class="input-form__row-cs">
          <h3 class="input-form__title app-text--xl app-text">Введите число</h3>
          <div class="input-form__close" @click="closeInput">
            <img
              class="input-form__close__img"
              src="@/assets/close.svg"
              alt="close"
            />
          </div>
        </div>
        <form @submit.prevent="sendInputNumber">
          <input
            v-model="inputNumber"
            type="text"
            class="input-field field_padding custom_border app-text--l"
            placeholder="*Число"
            oninvalid="setCustomValidity('Пожалуйста введите число')"
            onchange="setCustomValidity('')"
            required
          />
          <button
            type="submit"
            class="
              submit-btn
              field_padding
              app-text_uppercase
              app-text app-text--l
            "
          >
            Отправить
          </button>
        </form>
      </section>
      <section v-if="isResponse.status" class="response">
        <h3 class="response__title app-text app-text--xxl app-text--green">
          {{ isResponse.value ? "Правильно" : "Неправильно" }}
        </h3>
      </section>
    </div>
  </div>
</template>

<script src="./HomePage.js"></script>

<style scoped lang="scss">
@import "./HomePage.scss";
</style>
