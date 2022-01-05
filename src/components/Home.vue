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
          </div>
          <v-card-actions
            class="justify-center"
            v-if="arrivee != 'Choisissez votre gare d\'arrivée'"
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
    <v-container class="bar-chart">
      <v-card class="pa-3" variant="outlined">
        <v-card-header-text>
          <v-card-title
            >Retard des trains pour le trajet : {{ depart }} -
            {{ arrivee }}</v-card-title
          >
          <BarChart :chartData="dataBarChart" />
        </v-card-header-text>
      </v-card>
    </v-container>
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
    <v-container v-if="verifCauseBool && seenCauses" class="piechart-chart">
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
    <v-container class="dates" v-if="seenDates">
      <!-- Card dates -->
      <v-card class="pa-3" variant="outlined">
        <v-card-header-text>
          <v-card-title>Dates</v-card-title>
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
    <v-container v-if="satisfaction && seenDates" class="smiley-satisf">
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
import { BarChart, PieChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
export default {
  name: "Home",
  components: {
    BarChart,
    PieChart,
  },
  data: () => ({
    indicateurSelect: "Choisissez votre indicateur",
    date: "Choisissez le mois et l'année",
    depart: "Choisissez votre gare de départ",
    arrivee: "Choisissez votre gare d'arrivée",
    departCause: "Choisissez votre gare de départ",
    arriveeCause: "Choisissez votre gare d'arrivée",
    dateCause: "Choisissez le mois et l'année",
    seenCauses: false,
    seenDates: false,
  }),
  computed: {
    ...mapGetters([
      "gareD",
      "gareA",
      "dateGares",
      "retardDepart",
      "retardArrivee",
      "departLate",
      "arriveeLate",
      "trainsPrevus",
      "retards",
      "moyenneLate",
      "indicateurs",
      "infos",
      "satisfaction",
      "arrivalCorrespondence",
      "indicateurs",
      "dateCorrespondence",
      "gareDepDate",
      "gareArrDate",
      "dataFields",
      "verifCauseBool",
      "dataPieChart",
      "dataBarChart",
    ]),
  },
  methods: {
    ...mapActions([
      "satisfByDate",
      "correspondingLines",
      "correspondingDates",
      "correspondingLates",
      "moyenneRetard",
      "causeRetByGare",
    ]),
    doBarChart() {
      const { depart, arrivee } = this;
      this.correspondingDates({ depart, arrivee });
      this.correspondingLates({ depart, arrivee });
      this.moyenneRetard();
      this.seenCauses = true;
    },
    doPieChart() {
      var { departCause, arriveeCause, dateCause } = this;
      dateCause = this.dateEnChiffre(dateCause);
      this.causeRetByGare({ departCause, arriveeCause, dateCause });
      this.seenDates = true;
    },
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
  async mounted() {
    //Récupération des données du jeu de données : régularité mensuelle TGV par liaisons
    const responseReg = await axios.get(
      "https://data.sncf.com/api/records/1.0/search/?dataset=regularite-mensuelle-tgv-aqst&q=&rows=5500&sort=date&facet=date&facet=service&facet=gare_depart&facet=gare_arrivee"
    );
    responseReg.data.records.forEach((element) => {
      var gareDepart = element.fields.gare_depart;
      var gareArrivee = element.fields.gare_arrivee;
      var dates = element.fields.date;
      this.gareD.push(gareDepart);
      this.gareA.push(gareArrivee);
      this.gareDepDate.push(gareDepart);
      this.gareArrDate.push(gareArrivee);
      this.dateGares.push(dates);
      this.retardDepart.push(element.fields.nb_train_depart_retard);
      this.retardArrivee.push(element.fields.nb_train_retard_arrivee);
      this.trainsPrevus.push(element.fields.nb_train_prevu);
      this.dataFields.push(element.fields);
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