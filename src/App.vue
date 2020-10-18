<template>
<v-app>
  <div id="app">
    <how-to-play></how-to-play>
    <v-btn class="start-button" @click="dealCards">STARTA</v-btn>
    <div class="piles-container">
      <div v-for="(pile, index) in piles" :key="index" style="width: 230px">
        <v-btn
          v-show="turn !== 3"
          class="pile-button"
          large
          color="deep-purple"
          :disabled="isDealing || !gameStarted"
          @click="onPileSelected(index)"
        >Välj</v-btn>
        <card-pile :order="index" :pile="pile" :turn="turn"></card-pile>
      </div>
    </div>
     <magic-card :card="deck[10]" :turned="turn === 3"></magic-card>
  </div>
</v-app>
</template>

<script>
import CardPile from "./components/card-pile/card-pile.vue";
import MagicCard from "./components/magic-card/magic-card.vue";
import HowToPlay from "./components/how-to-play/how-to-play.vue";
import { shuffledDeckOf21 } from "./components/utils/card-util";

export default {
  name: "App",
  components: { CardPile, HowToPlay, MagicCard },
  data: () => ({
    deck: shuffledDeckOf21,
    pileA: [],
    pileB: [],
    pileC: [],
    turn: 0,
    gameStarted: false,
    isDealing: false
  }), 
  mounted() {
    // this.dealCards();
  },
  computed: {
    piles() {
      return [this.pileA, this.pileB, this.pileC];
    },
    magicCard() {
      return this.deck[10];
    }
  },
  methods: {
    dealCards() {
      if (!this.gameStarted) {
        this.gameStarted = true;
      }

      this.isDealing = true;
      setTimeout(() => {
        this.isDealing = false;
      }, 7500);

      this.resetPiles();
      this.deck.forEach((card, index) => {
        switch (index % 3) {
          case 0:
            this.pileA.push(card);
            break;
          case 1:
            this.pileB.push(card);
            break;
          case 2:
            this.pileC.push(card);
            break;
        }
      });
    },
    resetPiles() {
      this.pileA = [];
      this.pileB = [];
      this.pileC = [];
    },
    onPileSelected(index) {
      this.stackPiles(index);
      this.dealCards();
    },
    stackPiles(index) {
      console.log("i was clocked with index", index);
      this.turn += 1;
      switch (index) {
        case 0:
          this.deck = this.pileB.concat(this.pileA).concat(this.pileC);
          break;
        case 1:
          this.deck = this.pileA.concat(this.pileB).concat(this.pileC);
          break;
        case 2:
          this.deck = this.pileA.concat(this.pileC).concat(this.pileB);
          break;
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

.piles-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.pile-button {
  color: white !important;
}

.start-button, .pile-button {
  margin-bottom: 40px;
}
</style>
