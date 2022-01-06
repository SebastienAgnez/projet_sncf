<template>
  <v-container class="titre">
  <h1>SATISF'RETARD</h1>
  </v-container>
  <v-container class="container infos">
    <v-card class="texte mx-auto pa-4">
      <v-card-header-text>
        Vous souhaitez faire un <b>court</b> voyage ? Le temps d'un week-end ? Vous ne voulez pas trop <b>attendre</b> votre train en <b>retard</b>...
        <br>
        <b class="logo">Satisf'retard</b> permet de consulter les <b>retards</b> des trains sur un trajet choisi et de connaître les <b>causes</b> des retards de votre trajet 
        selon le mois choisi. 
        <br>
        Notre petit plus nous vous permettons de connaître la <b>satisfaction</b> des clients...
      </v-card-header-text>
    </v-card>
  </v-container>
  <BarChart />
  <PieChart />
  <SatisfactionClients />
  <footer class="text-center">
    <div class="copyright text-center">
      © 2021 Copyright : AGNEZ Sébastien - BACQUET Manon
    </div>
  </footer>
</template>

<script>
import BarChart from "./components/BarChart.vue";
import PieChart from "./components/PieChart.vue";
import SatisfactionClients from "./components/SatisfactionClients.vue";
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    BarChart,
    PieChart,
    SatisfactionClients,
  },
  computed: {
    ...mapGetters([
      "gareD",
      "gareA",
      "dateGares",
      "retardDepart",
      "retardArrivee",
      "trainsPrevus",
      "indicateurs",
      "infos",
      "gareDepDate",
      "gareArrDate",
      "dataFields",
    ]),
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


<style>
@font-face {
  font-family: "Gabi";
  src: url("fonts/gabriel_weiss_friends/GABRWFFR.TTF");
}

@font-face {
  font-family: "InFormal Style";
  src: url("fonts/informal_style/InFormal_Style_Regular.otf");
}

.titre{
  padding-top: 100px;
  padding-bottom: 50px;
  max-width: 100%;
}

h1 {
  font-family: "Gabi";
  color: #e1714c;
  font-size: 60px !important;
}

.infos{
  font-family: "InFormal Style";
  margin-top: 100px;
  margin-bottom: 100px;
  max-width: 90% !important;
}

.texte{
  background-color: rgb(45,22,15, 0.4);
  border: 3px solid rgb(45,22,15);
  box-shadow: 5px 5px 8px rgb(45,22,15);
  border-radius: 10px;
  font-size: 20px;
  color: white;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("assets/images/background-title.png");
  background-size: cover;
}

footer{
  font-family: "Gabi";
  background-color: rgb(0, 0, 0, 0.3);
  background-size: cover;
  color: #f6d4c9;
}

.copyright{
  padding-top: 15px;
  padding-bottom: 15px;
}

</style>