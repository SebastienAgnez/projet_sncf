<template>
  <div class="PieChart">
    <v-container class="Causes_retard" v-if="seenCauses">
      <!-- Card Causes retard -->
      <v-card class="pa-3" variant="outlined">
        <v-card-header-text>
          <v-card-title>Causes des retards</v-card-title>
        </v-card-header-text>
        <form method="post">
          <div class="input-group mb-3">
            <label class="input-group-text" for="gareDepart">Départ</label>
            <select
              class="form-select"
              id="gareDepart"
              name="departCause"
              v-model="departCause"
              @change="correspondingLines($event)"
            >
              <option selected disabled>Choisissez votre gare de départ</option>
              <option
                v-for="gare in gareD"
                v-bind:key="gare"
                v-text="gare"
              ></option>
            </select>
            <label class="input-group-text" for="gareArrivee">Arrivée</label>
            <select
              class="form-select"
              id="gareArrivee"
              name="arriveeCause"
              v-model="arriveeCause"
            >
              <option selected disabled>Choisissez votre gare d'arrivée</option>
              <option
                v-for="gare in arrivalCorrespondence"
                v-bind:key="gare"
                v-text="gare"
              ></option>
            </select>
            <span class="input-group-text">Mois-Années</span>
            <select class="form-select" name="dateCause" v-model="dateCause">
              <option selected disabled>Choisissez le mois et l'année</option>
              <option
                v-for="dates in dateCorrespondence"
                v-bind:key="dates"
                v-text="dates"
              ></option>
            </select>
          </div>
          <v-card-actions
            class="justify-center"
            v-if="
              dateCause != 'Choisissez le mois et l\'année' &&
              arriveeCause != 'Choisissez votre gare d\'arrivée'
            "
          >
            <v-btn
              @click="doPieChart"
              class="mt-4"
              variant="outlined"
              rounded
              text
            >
              Valider
            </v-btn>
          </v-card-actions>
        </form>
      </v-card>
    </v-container>
    <v-container v-if="verifCauseBool" class="piechart-chart">
      <v-card class="pa-3" variant="outlined">
        <v-card-header-text>
          <v-card-title
            >Pourcentage des causes de retard : {{ departCause }} -
            {{ arriveeCause }} - {{ dateCause }}</v-card-title
          >
          <PieChart :chartData="dataPieChart" />
        </v-card-header-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { PieChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default {
  name: "Home",
  components: {
    PieChart,
  },
  data: () => ({
    departCause: "Choisissez votre gare de départ",
    arriveeCause: "Choisissez votre gare d'arrivée",
    dateCause: "Choisissez le mois et l'année",
  }),
  computed: {
    ...mapGetters([
      "gareD",
      "dateGares",
      "arrivalCorrespondence",
      "dateCorrespondence",
      "dataFields",
      "verifCauseBool",
      "dataPieChart",
      "seenCauses",
    ]),
  },
  methods: {
    ...mapActions(["correspondingLines", "causeRetByGare"]),
    doPieChart() {
      var { departCause, arriveeCause, dateCause } = this;
      dateCause = this.dateEnChiffre(dateCause);
      this.causeRetByGare({ departCause, arriveeCause, dateCause });
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

<style>
</style>