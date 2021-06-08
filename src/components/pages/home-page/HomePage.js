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
      isTestVisible: false,
      isShowNotice: false,
      isShowNumber: false,
      isShowInput: false,
      isResponse: {
        status: false,
        value: false,
      },
      inputNumber: "",
      isScreenOpacity: false,
      timer: 3,
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
    showTest: function () {
      this.isScreenOpacity = true;
      this.isTestVisible = true;
      this.isShowNotice = true;
      this.timer = 3;
      let changeTimer = setInterval(() => {
        this.timer--;
      }, 1000);
      setTimeout(() => {
        clearInterval(changeTimer);
        this.showNumber();
      }, 3000);
    },

    showNumber: function () {
      this.isShowNotice = false;
      this.isShowNumber = true;
      this.currentNumber = +(
        Math.random() *
        10 ** this.currentNumberSize
      ).toFixed(0);
      const showNumber = () => {
        this.isShowNumber = false;
        this.isShowInput = true;
      };
      setTimeout(showNumber, this.currentDuration * 1000);
    },

    sendInputNumber: function () {
      this.isShowInput = false;
      this.isResponse.status = true;
      if (+this.inputNumber === +this.currentNumber) {
        this.isResponse.value = true;
      } else {
        this.isResponse.value = false;
      }
      setTimeout(this.closeInput, 3000);
    },

    closeInput: function () {
      this.inputNumber = "";
      this.isScreenOpacity = false;
      this.isShowInput = false;
      this.isResponse.status = false;
      this.isTestVisible = true;
    },
  },
};
