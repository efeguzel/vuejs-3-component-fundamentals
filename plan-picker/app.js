const app = Vue.createApp({});
app.component("plan-picker", {
  template: "#plan-picker-template",
  data() {
    return {
      plans: ["The Single", "The Curious", "The Addict"],
    };
  },
}),
  app.component("plan-element", {
    template: "#plan-template",
    props: {
      name: String,
      price: Number,
    },
  });
app.mount("#app");
