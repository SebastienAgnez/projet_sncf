<template>
  <div class="BarChart">
    <v-container>
      <!-- Card gares départ/arrivée -->
      <v-card class="pa-3 chart" variant="outlined">
        <v-card-header>
          <v-card-title class="titre-choix">Retard d'un trajet TGV en ligne directe</v-card-title>
        </v-card-header>
        <form method="post">
          <div class="input-group mb-3">
            <label class="input-group-text" for="gareDepart">Départ</label>
            <select
              class="form-select"
              id="gareDepart"
              name="depart"
              v-model="depart"
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
              name="arrivee"
              v-model="arrivee"
            >
              <option selected disabled>Choisissez votre gare d'arrivée</option>
              <option
                v-for="gare in arrivalCorrespondence"
                v-bind:key="gare"
                v-text="gare"
              ></option>
            </select>
            <label class="input-group-text" for="annee">Années</label>
            <select class="form-select" id="annee" name="annee" v-model="annee">
              <option selected disabled>Choisissez l'année</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
            </select>
          </div>
          <v-card-actions
            class="justify-center"
            v-if="
              arrivee != 'Choisissez votre gare d\'arrivée' &&
              annee != 'Choisissez l\'année'
            "
          >
            <v-btn
              @click="doBarChart"
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
    <v-container class="bar-chart" v-if="verifBarBool">
      <v-card class="chart pa-3" variant="outlined">
        <v-card-header-text>
          <v-card-title class="titre-chart"
            >Nombre de trains en retard (en %) pour le trajet : {{ depart }} -
            {{ arrivee }}</v-card-title
          >
          <BarChart :chartData="dataBarChart" />
        </v-card-header-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { BarChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default {
  name: "Home",
  components: {
    BarChart,
  },
  data: () => ({
    depart: "Choisissez votre gare de départ",
    arrivee: "Choisissez votre gare d'arrivée",
    annee: "Choisissez l'année",
  }),
  computed: {
    ...mapGetters([
      "gareD",
      "retardDepart",
      "retardArrivee",
      "departLate",
      "arriveeLate",
      "trainsPrevus",
      "retards",
      "moyenneLate",
      "arrivalCorrespondence",
      "dateCorrespondence",
      "dataBarChart",
      "dataLates",
      "verifBarBool",
    ]),
  },
  methods: {
    ...mapActions([
      "correspondingLines",
      "correspondingDates",
      "correspondingLates",
      "moyenneRetard",
    ]),
    doBarChart() {
      const { depart, arrivee, annee } = this;
      this.correspondingDates({ depart, arrivee });
      this.correspondingLates({ depart, arrivee });
      this.moyenneRetard({ annee });
    },
  },
};
</script>

<style>

.chart{
  background-color: rgb(0,0,0,0.6);
  border: 1px solib black;
  border-radius: 6px;
  box-shadow: 4px 4px 3px;
}

.titre-choix{
  font-family: "Gabi";
  font-size: 30px;
  color: #f9e2db;
  margin-bottom: 10px;
}

label{
  font-family: "InFormal Style";
  background-color: #ea9b81 !important;
}

select{
  background-color: #f0b8a5 !important;
  font-family: "InFormal Style" !important;
}

button{
  background-color: #e78d6f !important;
  font-family: "Gabi" !important;
  color: #f9e2db !important;
}

.titre-chart{
  font-family: "InFormal Style";
  color: #f9e2db;
}

canvas{
  background-color: rgb(246,212,201,1);
  border: 1px solid rgb(246,212,201,1);
  border-radius: 10px;
}

</style>