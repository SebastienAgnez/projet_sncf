<template>
  <div class="home">
    <h1>SATISF'RETARD</h1>
    <v-container class="container">
      <v-col>
        <v-card class="mx-auto pa-4" max-width="900px">
          <v-card-header-text>
            Vous en avez marre des retards des trains ? Vous n'êtes pas
            satisfait de ces retards ? Votre coeur balance entre deux trajets ?
            Alors consultez notre site pour choisir votre meilleur trajet et
            savoir si oui ou non les clients en sont satisfait !
          </v-card-header-text>
        </v-card>
      </v-col>
    </v-container>
    <v-container>
      <!-- Card gares départ/arrivée -->
      <v-card class="pa-3" variant="outlined">
        <v-card-header>
          <v-card-title>Ligne directe</v-card-title>
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
              <option selected>Choisissez votre gare de départ</option>
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
              <option selected>Choisissez votre gare d'arrivée</option>
              <option
                v-for="gare in arrivalCorrespondence"
                v-bind:key="gare"
                v-text="gare"
              ></option>
            </select>
          </div>
          <v-card-actions class="justify-center">
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
    <v-container class="bar-chart">
      <v-card class="pa-3" variant="outlined">
        <v-card-header-text>
          <v-card-title
            >Retard des trains pour le trajet : {{ depart }} -
            {{ arrivee }}</v-card-title
          >
          <BarChart :chartData="testData" />
        </v-card-header-text>
      </v-card>
    </v-container>
    <v-container class="dates">
      <!-- Card dates -->
      <v-card class="pa-3" variant="outlined">
        <v-card-header-text>
          <v-card-title>Dates</v-card-title>
        </v-card-header-text>
        <form method="post">
          <div class="input-group">
            <span class="input-group-text">Mois-Années</span>
            <input
              type="month"
              class="form-control supp-border"
              name="date"
              v-model="date"
            />
            <span class="input-group-text border-droit">Indicateurs</span>
            <select
              class="form-select"
              id="indicateurs"
              name="indicateurSelect"
              v-model="indicateurSelect"
            >
              <option selected>Choisissez votre indicateur</option>
              <option
                v-for="indicateur in indicateurs"
                v-bind:key="indicateur"
                v-text="indicateur"
              ></option>
            </select>
          </div>
          <v-card-actions class="justify-center">
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
            <div v-if="10 >= this.satisfaction && this.satisfaction > 7">
              <span class="material-icons emoticonsGood">insert_emoticon</span>
              <div>{{ satisfaction }} / 10</div>
            </div>
            <div v-else-if="7 >= this.satisfaction && this.satisfaction > 4">
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
    <footer class="text-center text-white mt-4">
      <div class="text-center p-3" style="background-color: #333333">
        © 2021 Copyright : AGNEZ Sébastien - BACQUET Manon
      </div>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
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
    indicateurSelect: null,
    date: null,
    depart: null,
    arrivee: null,
  }),
  computed: {
    ...mapGetters([
      "retardDepart",
      "retardArrivee",
      "departLate",
      "arriveeLate",
      "trainsPrevus",
      "retards",
      "gareD",
      "gareA",
      "dateGares",
      "gareDepDate",
      "gareArrDate",
      "indicateurs",
      "infos",
      "satisfaction",
      "arrivalCorrespondence",
      "indicateurs",
      "dateCorrespondence",
      "moyenneLate",
    ]),
  },
  methods: {
    ...mapActions(["satisfByDate", "correspondingLines", "correspondingDates", "correspondingLates", "moyenneRetard"]),
    doBarChart() {
      const { depart, arrivee } = this;
      this.correspondingDates({ depart, arrivee });
      this.correspondingLates({ depart, arrivee });
      this.moyenneRetard();
    },
    doSatisf() {
      const { indicateurSelect, date } = this;
      this.satisfByDate({ indicateurSelect, date });
    },
  },
  setup() {
    const testData = {
      labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet"],
      datasets: [
        {
          data: [30, 40, 60, 70, 5, 85, 56],
          backgroundColor: [
            "#77CEFF",
            "#0079AF",
            "#123E6B",
            "#97B0C4",
            "#A5C8ED",
            "#77CEFF",
            "#0079AF",
          ],
        },
      ],
    };
    return { testData };
  },
  async mounted() {
    //Récupération des données du jeu de données : régularité mensuelle TGV par liaisons
    const responseReg = await axios.get(
      "https://data.sncf.com/api/records/1.0/search/?dataset=regularite-mensuelle-tgv-aqst&q=&rows=5500&sort=date&facet=date&facet=service&facet=gare_depart&facet=gare_arrivee"
    );
    responseReg.data.records.forEach((element) => {
      var gareDepart = element.fields.gare_depart;
      var gareArrivee = element.fields.gare_arrivee;
      var dates = element.fields.date;
      this.retardDepart.push(element.fields.nb_train_depart_retard);
      this.retardArrivee.push(element.fields.nb_train_retard_arrivee);
      this.trainsPrevus.push(element.fields.nb_train_prevu);
      this.gareD.push(gareDepart);
      this.gareA.push(gareArrivee);
      this.gareDepDate.push(gareDepart);
      this.gareArrDate.push(gareArrivee);
      this.dateGares.push(dates);
    });
    this.$store.dispatch("withoutDoublonDeparts");
    this.$store.dispatch("withoutDoublonCorrespondence");

    //Récupération des données du jeu de données : Baromètre notes d'opinion SNCF
    const responseNotes = await axios.get(
      "https://data.sncf.com/api/records/1.0/search/?dataset=barometre-notes-dopinion-sncf-gmv&q=&rows=5500&sort=column_1&facet=column_1&facet=column_2"
    );
    responseNotes.data.records.forEach((element) => {
      this.infos.push(element);
      this.indicateurs.push(element.fields.column_2);
    });
    this.$store.dispatch("whithoutDoublonIndicators");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-family: "Gabi";
}

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

/* .dates {
  visibility: hidden;
} */

</style>
