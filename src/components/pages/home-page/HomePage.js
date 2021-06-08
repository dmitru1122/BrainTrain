import Spinner from "../../spinner/Spinner";

export default {
  name: "Home",
  components: {
    Spinner: Spinner,
  },

  props: {
    msg: String,
  },
  data() {
    return {
      currentNumber: 0,
      isShowNumber: false,
      currentNumberSize: 1,
      numberSize: [1, 2, 3, 4, 5],
      currentDuration: 0.2,
      sizeShowPeriod: [
        0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6,
        1.7, 1.8, 1.9, 2,
      ],
    };
  },
  methods: {
    showCurrentNumber: function () {
      this.isShowNumber = true;
      this.currentNumber = (
        Math.random() *
        10 ** this.currentNumberSize
      ).toFixed(0);
      const hideNumer = () => (this.isShowNumber = false);
      setTimeout(hideNumer, this.currentDuration * 1000);
    },
  },
};
