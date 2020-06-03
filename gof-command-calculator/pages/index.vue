<template lang="pug">
  v-container
    v-row(no-gutters)
      v-col(cols="3" v-for="num in buttons" :key="num")
        v-btn.display-2(
          block
          height="100"
          @click="click(num)"
        )  {{num}}
    v-row(no-gutters)
      v-col(cols="6" v-for="ed in edits" :key="ed")
        v-btn.display-1(
          block
          height="100"
        )  {{ed}}
    p.digit-area.display-2 {{ inputs || '0' }}
    p {{ inputs || '0' }}
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Calculator extends Vue {
  public click(ch: string): void {
    console.log(ch);
    this.inputs += ch;
  }
  inputs: string = "";
  edits: string[] = ["元に戻す", "やり直す"];
  buttons: string[] = [
    "7",
    "8",
    "9",
    "C",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "/",
    "0",
    "=",
    "+",
    "-"
  ];
}
</script>

<style lang="sass">
.digit-area
  text-align: right
  border: solid 1px
</style>