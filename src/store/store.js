import { createStore } from 'vuex'
import * as _ from "underscore";

//getters = computed
//action = methods
//mutations = modifier les valeurs

const state = {
  retardDepart: [],
  departLate: [],
  retardArrivee: [],
  arriveeLate: [],
  trainsPrevus: [],
  trierTrainsPrevus: [],
  retards: [],
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
  moyenneLate: null,
  dataFields: [],
  verifCauseBool: null,
  verifBarBool: null,
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
    labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
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
  },
  posDate: [],
  dataLates: []
};

const getters = {
  retardDepart: state => {
    return state.retardDepart;
  },
  retardArrivee: state => {
    return state.retardArrivee;
  },
  departLate: state => {
    return state.departLate;
  },
  arriveeLate: state => {
    return state.arriveeLate;
  },
  trainsPrevus: state => {
    return state.trainsPrevus;
  },
  retards: state => {
    return state.retards;
  },
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
  moyenneLate: state => {
    return state.moyenneLate;
  },
  dataFields: state => {
    return state.dataFields
  },
  verifCauseBool: state => {
    return state.verifCauseBool
  },
  verifBarBool: state => {
    return state.verifBarBool
  },
  dataPieChart: state => {
    return state.dataPieChart
  },
  dataBarChart: state => {
    return state.dataBarChart
  },
  dataLates: state => {
    return state.dataLates
  }
};

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
    let years = [];
    state.dateCorrespondence = []
    for (let index = 0; index < state.gareDepDate.length; index++) {
      if (state.gareDepDate[index] == depart && state.gareArrDate[index] == arrivee) {
        var date = new Date(state.dateGares[index]);
        let year = date.getFullYear();
        years.push(year);
        let month = months[date.getMonth()]
        var dateStr = month + " " + year;
        state.dateCorrespondence.push(dateStr);
      }
    }
    state.posDate = []
    for (let index = 0; index < state.dateCorrespondence.length; index++) {
      if (years[index] == "2020") {
        state.posDate.push(index);
      }
    }
  },

  //Trier les retards selon le trajet
  correspondingLates(state, item) {
    var depart = item.depart;
    var arrivee = item.arrivee;
    state.departLate = [];
    state.arriveeLate = [];
    state.trierTrainsPrevus = [];
    for (let index = 0; index < state.gareDepDate.length; index++) {
      if (state.gareDepDate[index] == depart && state.gareArrDate[index] == arrivee) {
        state.departLate.push(state.retardDepart[index]);
        state.arriveeLate.push(state.retardArrivee[index]);
        state.trierTrainsPrevus.push(state.trainsPrevus[index]);
      }
    }
  },

  //Moyenne 
  moyenneRetard(state, item) {
    state.moyenneLate = 0;
    state.dataLates = []
    for (let index = 0; index < state.departLate.length; index++) {
      state.moyenneLate = (state.departLate[index] + state.arriveeLate[index]) / state.trierTrainsPrevus[index];
      if (isNaN(state.moyenneLate)) {
        state.moyenneLate = 0;
      } else if (state.moyenneLate > 1) {
        state.moyenneLate = 1;
      }
      state.dataLates.push((state.moyenneLate * 100).toFixed(0));
    }
    state.dataLates = state.dataLates.reverse()
    state.dataBarChart.datasets[0].data = []
    var year = item.annee
    if (year == '2018') {
      var data2018 = state.dataLates.slice(0, 12)
      for (var l = 0; l < data2018.length; l++)
        state.dataBarChart.datasets[0].data.push(data2018[l])
    } else if (year == '2019') {
      var data2019 = state.dataLates.slice(12, 24)
      for (var k = 0; k < data2019.length; k++)
        state.dataBarChart.datasets[0].data.push(data2019[k])
    } else if (year == '2020') {
      var data2020 = state.dataLates.slice(24, 36)
      for (var j = 0; j < data2020.length; j++)
        state.dataBarChart.datasets[0].data.push(data2020[j])
    } else if (year == '2021') {
      var data2021 = state.dataLates.slice(36, 42)
      for (var i = 0; i < data2021.length; i++)
        state.dataBarChart.datasets[0].data.push(data2021[i])
    }
    state.verifBarBool = 1
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

  //Enlever les doublons des gares de depart
  withoutDoublonDeparts(state) {
    state.gareD = _.uniq(state.gareD);
  },

  //Enlever les doublons des gares d'arrivee
  withoutDoublonCorrespondence(state) {
    state.arrivalCorrespondence = _.uniq(state.arrivalCorrespondence);
  },

  //Enlever les doublons des indicateurs
  whithoutDoublonIndicators(state) {
    state.indicateurs = _.uniq(state.indicateurs);
  },
};

const actions = {
  correspondingLines({ commit }, item) {
    commit('correspondingLines', item);
  },
  correspondingDates({ commit }, item) {
    commit('correspondingDates', item)
  },
  correspondingLates({ commit }, item) {
    commit('correspondingLates', item)
  },
  moyenneRetard({ commit }, item) {
    commit('moyenneRetard', item)
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
};

export const store = createStore({
  state,
  getters,
  mutations,
  actions
});