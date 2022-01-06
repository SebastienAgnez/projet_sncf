<template>
  <v-container class="titre">
  <h1>SATISF'RETARD</h1>
  </v-container>
  <v-container class="container">
      <v-card class="mx-auto pa-4">
        <v-card-header-text>
          Vous en avez marre des retards des trains ? Vous n'êtes pas satisfait
          de ces retards ? Votre coeur balance entre deux trajets ? Alors
          consultez notre site pour choisir votre meilleur trajet et savoir si
          oui ou non les clients en sont satisfait !
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
.v-container{
  max-width: 100%;
}

.titre{
  background-image: url("assets/images/background.png");
  background-size: cover;
  padding-top: 120px;
  padding-bottom: 100px;
}

h1 {
  font-family: "Gabi";
  color: #EDE000;
  font-size: 60px !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

footer{
  font-family: "Gabi";
  background-image: url("assets/images/footer.png");
  background-size: cover;
  color: #EDE000;
  margin-top: 80px;
}

.copyright{
  padding-top: 15px;
  padding-bottom: 15px;
}

</style>