<template>
  <div class="home">
    <h1>SATISF'RETARD</h1>
    <div class="container">
      <div class="col align-self-center">
        <div class="card">
          <div class="card-body">
            Vous en avez marre des retards des trains ? Vous n'êtes pas
            satisfait de ces retards ? Votre coeur balance entre deux trajets ?
            Alors consultez notre site pour choisir votre meilleur trajet et
            savoir si oui ou non les clients en sont satisfait !
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="card">
        <div class="card-header">Ligne directe</div>
        <div class="card-body">
          <div class="input-group">
            <span class="input-group-text">Départ</span>
            <select id="gareDepart" @change="correspondingLines($event)">
              <option
                v-for="gare in withoutDoublonDeparts"
                v-bind:key="gare"
                v-text="gare"
              ></option>
            </select>
            <span class="input-group-text border-droit">Arrivée</span>
            <select id="gareArrivee">
              <option
                v-for="gare in withoutDoublonCorrespondence"
                v-bind:key="gare"
                v-text="gare"
              ></option>
            </select>
          </div>
          <button type="button" class="btn btn-success mt-4">Valider</button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="card">
        <div class="card-header">Dates</div>
        <div class="card-body">
          <div class="input-group">
            <span class="input-group-text">Mois</span>
            <input
              type="month"
              aria-label="First name"
              class="form-control supp-border"
            />
            <span class="input-group-text border-droit">Années</span>
            <input
              type="number"
              min="2000"
              max=""
              aria-label="Last name"
              class="form-control"
            />
          </div>
          <button type="button" class="btn btn-success mt-4">Valider</button>
        </div>
      </div>
    </div>
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

export default {
  name: "Home",
  data() {
    return {
      infos: null,
      arrivalCorrespondence: [],
      gareD: [],
      gareA: [],
    };
  },

  computed: {
    // Enlever les doublons des gares de départs avec underscore
    withoutDoublonDeparts() {
      return _.uniq(this.gareD);
    },

    withoutDoublonCorrespondence() {
      return _.uniq(this.arrivalCorrespondence);
    },
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
  },
  async mounted() {
    axios
      .get(
        "https://data.sncf.com/api/records/1.0/search/?dataset=regularite-mensuelle-tgv-aqst&q=&rows=5500&sort=date&facet=date&facet=service&facet=gare_depart&facet=gare_arrivee"
      )
      .then((response) => (this.infos = response))
      .catch((error) => console.log(error));

    const response = await axios.get(
      "https://data.sncf.com/api/records/1.0/search/?dataset=regularite-mensuelle-tgv-aqst&q=&rows=5500&sort=date&facet=date&facet=service&facet=gare_depart&facet=gare_arrivee"
    );
    response.data.records.forEach((element) => {
      // let data = {};
      // let item = Object.create(data);
      var gareDepart = element.fields.gare_depart;
      var gareArrivee = element.fields.gare_arrivee;
      this.gareD.push(gareDepart);
      this.gareA.push(gareArrivee);
    });
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

.container {
  margin-bottom: 10px;
}
</style>
