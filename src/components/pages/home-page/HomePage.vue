<template>
  <div class="home">
    <section class="">
      Запомни число
      <div>
        <h3>Выберите размер числа</h3>
        <select v-model="currentNumberSize">
          <option v-for="size in numberSize" v-bind:value="size" :key="size">
            {{ size }}
          </option>
        </select>
      </div>
      <div>
        <h3>Выберите продолжительность показа (c.)</h3>
        <select v-model="currentDuration">
          <option
            v-for="duration in sizeShowPeriod"
            v-bind:value="duration"
            :key="duration"
          >
            {{ duration }}
          </option>
        </select>
      </div>
      <div @click="showCurrentNumber">Показать</div>
    </section>
    <!-- <section :class="[isShowNumber ? 'visible' : 'hidden']"> -->
    <Spinner v-if="isShowNumber" :currentNumber="currentNumber" />
    <!-- </section> -->
    <section class=""></section>
    <section> REply</section>
  </div>
</template>

<script src="./HomePage.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./HomePage.scss";
</style>
