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
        <div class="input-group mb-3">
          <label class="input-group-text" for="gareDepart">Départ</label>
          <select
            class="form-select"
            id="gareDepart"
            @change="correspondingLines($event)"
          >
            <option selected>Choisissez votre gare de départ</option>
            <option
              v-for="gare in withoutDoublonDeparts"
              v-bind:key="gare"
              v-text="gare"
            ></option>
          </select>
          <label class="input-group-text" for="gareArrivee">Arrivée</label>
          <select
            class="form-select"
            id="gareArrivee"
            @change="correspondingLines($event)"
          >
            <option selected>Choisissez votre gare d'arrivée</option>
            <option
              v-for="gare in withoutDoublonCorrespondence"
              v-bind:key="gare"
              v-text="gare"
            ></option>
          </select>
        </div>
        <v-card-actions class="justify-center">
          <v-btn class="mt-4" variant="outlined" rounded text> Valider </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
    <v-container class="bar-chart">
      <v-card class="pa-3" variant="outlined">
        <v-card-header-text>
          <v-card-title>Retard des trains</v-card-title>
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
          <form method="post" @submit="satisfByDate">
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
                  v-for="indicateurs in whithoutDoublonIndicators"
                  v-bind:key="indicateurs"
                  v-text="indicateurs"
                ></option>
              </select>
            </div>
            <v-card-actions class="justify-center">
              <v-btn class="mt-4" variant="outlined" type="submit" rounded text> Valider </v-btn>
            </v-card-actions>
          </form>
      </v-card>
    </v-container>
    <v-container class="smiley-satisf mb-5">
      <v-card class="pa-3" variant="outlined">
        <v-card-header-text>
          <v-card-title>Satisfaction Client Ponctualité</v-card-title>
          {{infos}}
        </v-card-header-text>
      </v-card>
    </v-container>
    <!-- <div class="row">
      <div class="col-md-6">
        <li v-for="gare in gareD" :key="gare">Gare de départ : {{ gare }}</li>
      </div>
      <div class="col-md-6">
        <li v-for="gare in gareA" :key="gare">Gare d'arrivée : {{ gare }}</li>
      </div>
    </div> -->
    <footer class="text-center text-white fixed-bottom">
      <div class="container p-4"></div>
      <div class="text-center p-3" style="background-color: #333333">
        © 2021 Copyright : AGNEZ Sébastien - BACQUET Manon
      </div>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
import * as _ from "underscore";
import { BarChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default {
  name: "Home",
  components: {
    BarChart,
  },
  data() {
    return {
      infos: [],
      arrivalCorrespondence: [],
      gareD: [],
      gareA: [],
      indicateurSelect: null,
      date: null,
      indicateurs: [],
      ponctuality: [],
      innovation: [],
      environment: [],
      overallScore: [],
      price: [],
      passengerInfo: []
    };
  },
  setup() {
    const testData = {
      labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
      datasets: [
        {
          data: [30, 40, 60, 70, 5, 85, 56],
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED', '#77CEFF', '#0079AF'],
        },
      ],
    };
    return { testData };
  },
  computed: {
    // Enlever les doublons des gares de départs avec underscore
    withoutDoublonDeparts() {
      return _.uniq(this.gareD);
    },

    withoutDoublonCorrespondence() {
      return _.uniq(this.arrivalCorrespondence);
    },
    whithoutDoublonIndicators() {
      return _.uniq(this.indicateurs)
    }
  },

  methods: {
    //Faire correspondre les gares de départs et d'arrivées
    correspondingLines(event) {
      console.log("Notre input : ", event.target.value);
      this.arrivalCorrespondence = [];
      for (let index = 0; index < this.gareD.length; index++) {
        if (this.gareD[index] == event.target.value) {
          this.arrivalCorrespondence.push(this.gareA[index]);
        }
      }
    },
    satisfByDate: function(e) {
      console.log(this.date)
      console.log(this.indicateurSelect)
      e.preventDefault();
    }
  },
  async mounted() {
    // axios
    //   .get(
    //     "https://data.sncf.com/api/records/1.0/search/?dataset=regularite-mensuelle-tgv-aqst&q=&rows=5500&sort=date&facet=date&facet=service&facet=gare_depart&facet=gare_arrivee"
    //   )
    //   .then((response) => (this.infos = response))
    //   .catch((error) => console.log(error));

    const responseReg = await axios.get(
      "https://data.sncf.com/api/records/1.0/search/?dataset=regularite-mensuelle-tgv-aqst&q=&rows=5500&sort=date&facet=date&facet=service&facet=gare_depart&facet=gare_arrivee"
    );
    responseReg.data.records.forEach((element) => {
      var gareDepart = element.fields.gare_depart;
      var gareArrivee = element.fields.gare_arrivee;
      this.gareD.push(gareDepart);
      this.gareA.push(gareArrivee);
    });

    const responseNotes = await axios.get(
      "https://data.sncf.com/api/records/1.0/search/?dataset=barometre-notes-dopinion-sncf-gmv&q=&sort=column_1&facet=column_1&facet=column_2"
    )
    responseNotes.data.records.forEach((element) => {
      this.infos.push(element);
      this.indicateurs.push(element.fields.column_2);
      if(element.fields.column_2 == 'Ponctualité') {
        this.ponctuality.push(element)
      } else if(element.fields.column_2 == 'Innovation') {
        this.innovation.push(element)
      } else if(element.fields.column_2 == 'Environnemnt') {
        this.environment.push(element)
      } else if(element.fields.column_2 == 'Note globale') {
        this.overallScore.push(element)
      } else if(element.fields.column_2 == 'Prix') {
        this.price.push(element)
      } else if(element.fields.column_2 == 'Information Voyageurs') {
        this.passengerInfo.push(element)
      } 
    })
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

/* .dates {
  visibility: hidden;
} */
</style>
