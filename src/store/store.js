import { createStore } from 'vuex'
import * as _ from "underscore";

//getters = computed
//action = methods
//mutations = modifier les valeurs

const state = {
  infos: [],
  arrivalCorrespondence: [],
  gareD: [],
  gareA: [],
  gareDepDate: [],
  gareArrDate: [],
  dateGares: [],
  indicateurs: [],
  satisfaction: null,
  dateCorrespondence: [],
  dataFields: [],
  verifCauseBool: null,
  dataPieChart: {
    labels: [
      "Causes externes",
      "Cause gestion gare",
      "Cause gestion trafic",
      "Causes infrastructures",
      "Cause matériel roulant",
      "Cause prise en charge voyageurs",
    ],
    datasets: [
      {
        data: [],
        backgroundColor: [
          "#77CEFF",
          "#0079AF",
          "#123E6B",
          "#97B0C4",
          "#A5C8ED",
        ],
      },
    ],
  },
  dataBarChart: {
    labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet"],
    datasets: [
      {
        data: [],
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
  }
};

const getters = {
  gareD: state => {
    return state.gareD;
  },
  gareA: state => {
    return state.gareA;
  },
  gareDepDate: state => {
    return state.gareDepDate
  },
  gareArrDate: state => {
    return state.gareArrDate
  },
  dateGares: state => {
    return state.dateGares;
  },
  indicateurs: state => {
    return state.indicateurs;
  },
  infos: state => {
    return state.infos;
  },
  satisfaction: state => {
    return state.satisfaction;
  },
  arrivalCorrespondence: state => {
    return state.arrivalCorrespondence
  },
  dateCorrespondence: state => {
    return state.dateCorrespondence;
  },
  dataFields: state => {
    return state.dataFields
  },
  verifCauseBool: state => {
    return state.verifCauseBool
  },
  dataPieChart: state => {
    return state.dataPieChart
  },
  dataBarChart: state => {
    return state.dataBarChart
  }
}

const mutations = {
  //Faire correspondre les gares de départs et d'arrivées
  correspondingLines(state, item) {
    state.arrivalCorrespondence = [];
    for (let index = 0; index < state.gareDepDate.length; index++) {
      if (state.gareDepDate[index] == item.target.value) {
        state.arrivalCorrespondence.push(state.gareA[index]);
      }
    }
    state.arrivalCorrespondence = _.uniq(state.arrivalCorrespondence)
  },
  //Trier les dates selon le trajet
  correspondingDates(state, item) {
    var depart = item.depart
    var arrivee = item.arrivee
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    for (let index = 0; index < state.gareDepDate.length; index++) {
      if (state.gareDepDate[index] == depart && state.gareArrDate[index] == arrivee) {
        var date = new Date(state.dateGares[index]);
        let month = months[date.getMonth()]
        var dateStr = month + " " + date.getFullYear();
        state.dateCorrespondence.push(dateStr);
      }
    }
    console.log(state.dateCorrespondence);
  },
  //Calculer la moyenne des notes des clients selon la date choisie
  satisfByDate(state, item) {
    state.satisfaction = null;
    state.infos.forEach((element) => {
      if (item.date == element.fields.column_1 && item.indicateurSelect == element.fields.column_2) {
        var noteClients = element.fields.column_4;
        var noteFrancais = element.fields.column_3;
        var moy = (noteClients + noteFrancais) / 2;
        state.satisfaction = moy.toFixed(1);
      }
    });
  },
  //Ajout des pourcentages de cause des retards
  causeRetByGare(state, item) {
    var depart = item.departCause
    var arrivee = item.arriveeCause
    var date = item.dateCause
    state.dataPieChart.datasets[0].data = []
    for (var i = 0; i < state.dataFields.length; i++) {
      if (state.gareDepDate[i] == depart && state.gareArrDate[i] == arrivee && state.dateGares[i] == date) {
        state.dataPieChart.datasets[0].data.push(state.dataFields[i].prct_cause_externe.toFixed(1))
        state.dataPieChart.datasets[0].data.push(state.dataFields[i].prct_cause_gestion_gare.toFixed(1))
        state.dataPieChart.datasets[0].data.push(state.dataFields[i].prct_cause_gestion_trafic.toFixed(1))
        state.dataPieChart.datasets[0].data.push(state.dataFields[i].prct_cause_infra.toFixed(1))
        state.dataPieChart.datasets[0].data.push(state.dataFields[i].prct_cause_materiel_roulant.toFixed(1))
        state.dataPieChart.datasets[0].data.push(state.dataFields[i].prct_cause_prise_en_charge_voyageurs.toFixed(1))
      }
    }
    state.verifCauseBool = 1
  },
  withoutDoublonDeparts(state) {
    state.gareD = _.uniq(state.gareD);
  },
  withoutDoublonCorrespondence(state) {
    state.arrivalCorrespondence = _.uniq(state.arrivalCorrespondence);
  },
  whithoutDoublonIndicators(state) {
    state.indicateurs = _.uniq(state.indicateurs);
  }
}

const actions = {
  correspondingLines({ commit }, item) {
    commit('correspondingLines', item);
  },
  correspondingDates({ commit }, item) {
    commit('correspondingDates', item)
  },
  satisfByDate({ commit }, item) {
    commit('satisfByDate', item);
  },
  causeRetByGare({ commit }, item) {
    commit('causeRetByGare', item);
  },
  withoutDoublonDeparts({ commit }, item) {
    commit('withoutDoublonDeparts', item)
  },
  withoutDoublonCorrespondence({ commit }, item) {
    commit('withoutDoublonCorrespondence', item)
  },
  whithoutDoublonIndicators({ commit }, item) {
    commit('whithoutDoublonIndicators', item)
  }
}

export const store = createStore({
  state,
  getters,
  mutations,
  actions
});
