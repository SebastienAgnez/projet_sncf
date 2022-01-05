<template>
  <div class="SatisfactionClients">
    <v-container class="Satisfaction" v-if="seenSatisf">
      <!-- Card Satisfaction -->
      <v-card class="pa-3" variant="outlined">
        <v-card-header-text>
          <v-card-title>Satisfaction</v-card-title>
        </v-card-header-text>
        <form method="post">
          <div class="input-group">
            <span class="input-group-text">Mois-Années</span>
            <select class="form-select" name="date" v-model="date">
              <option selected disabled>Choisissez le mois et l'année</option>
              <option
                v-for="dates in dateCorrespondence"
                v-bind:key="dates"
                v-text="dates"
              ></option>
            </select>
            <span class="input-group-text border-droit">Indicateurs</span>
            <select
              class="form-select"
              id="indicateurs"
              name="indicateurSelect"
              v-model="indicateurSelect"
            >
              <option selected disabled>Choisissez votre indicateur</option>
              <option
                v-for="indicateur in indicateurs"
                v-bind:key="indicateur"
                v-text="indicateur"
              ></option>
            </select>
          </div>
          <v-card-actions
            class="justify-center"
            v-if="
              indicateurSelect != 'Choisissez votre indicateur' &&
              date != 'Choisissez le mois et l\'année'
            "
          >
            <v-btn
              class="mt-4"
              variant="outlined"
              @click="doSatisf"
              rounded
              text
            >
              Valider
            </v-btn>
          </v-card-actions>
        </form>
      </v-card>
    </v-container>
    <v-container v-if="satisfaction" class="smiley-satisf">
      <!-- Card notes satisfaction client -->
      <v-card class="pa-3" variant="outlined">
        <v-card-header-text>
          <v-card-title>Satisfaction Client</v-card-title>
          <span v-if="satisfaction">
            <div v-if="10 >= this.satisfaction && this.satisfaction > 6.5">
              <span class="material-icons emoticonsGood">insert_emoticon</span>
              <div>{{ satisfaction }} / 10</div>
            </div>
            <div v-else-if="6.5 >= this.satisfaction && this.satisfaction > 4">
              <span class="material-icons emoticonsNeutral"
                >sentiment_neutral</span
              >
              <div>{{ satisfaction }} / 10</div>
            </div>
            <div v-else-if="4 >= this.satisfaction && this.satisfaction >= 0">
              <span class="material-icons emoticonsBad">mood_bad</span>
              <div>{{ satisfaction }} / 10</div>
            </div>
          </span>
        </v-card-header-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SatisfactionClients",
  data: () => ({
    indicateurSelect: "Choisissez votre indicateur",
    date: "Choisissez le mois et l'année",
  }),
  computed: {
    ...mapGetters([
      "satisfaction",
      "indicateurs",
      "dateCorrespondence",
      "seenSatisf",
    ]),
  },
  methods: {
    ...mapActions(["satisfByDate"]),
    doSatisf() {
      var { indicateurSelect, date } = this;
      date = this.dateEnChiffre(date);
      this.satisfByDate({ indicateurSelect, date });
    },
    dateEnChiffre(date) {
      var dateChiffre;
      date = date.split(" ");
      switch (date[0]) {
        case "Janvier":
          dateChiffre = date[1] + "-01";
          break;
        case "Février":
          dateChiffre = date[1] + "-02";
          break;
        case "Mars":
          dateChiffre = date[1] + "-03";
          break;
        case "Avril":
          dateChiffre = date[1] + "-04";
          break;
        case "Mai":
          dateChiffre = date[1] + "-05";
          break;
        case "Juin":
          dateChiffre = date[1] + "-06";
          break;
        case "Juillet":
          dateChiffre = date[1] + "-07";
          break;
        case "Août":
          dateChiffre = date[1] + "-08";
          break;
        case "Septembre":
          dateChiffre = date[1] + "-09";
          break;
        case "Octobre":
          dateChiffre = date[1] + "-10";
          break;
        case "Novembre":
          dateChiffre = date[1] + "-11";
          break;
        case "Décembre":
          dateChiffre = date[1] + "-12";
          break;
      }
      return dateChiffre;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input-group-text {
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
  border-right: 0 !important;
}
.supp-border {
  border-right: 0 !important;
}
.border-droit {
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}
.v-container {
  margin-bottom: 10px;
}
.emoticonsGood {
  font-size: 130px;
  color: green;
}
.emoticonsNeutral {
  font-size: 130px;
  color: orange;
}
.emoticonsBad {
  font-size: 130px;
  color: red;
}
</style>