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
  }

}

const mutations = {
  //Faire correspondre les gares de départs et d'arrivées
  correspondingLines(state, item) {
    state.arrivalCorrespondence = [];
    for (let index = 0; index < state.gareD.length; index++) {
      if (state.gareD[index] == item.target.value) {
        state.arrivalCorrespondence.push(state.gareA[index]);
      }
    }
  },
  //Trier les dates selon le trajet
  correspondingDates(state, item) {
    var depart = item.depart
    var arrivee = item.arrivee
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    state.dateCorrespondence = [];
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
    console.log(state.departLate);
    console.log(state.arriveeLate);
    console.log(state.trierTrainsPrevus);
  },

  //Moyenne 
  moyenneRetard(state){
    state.moyenneLate = 0;
    for (let index = 0; index < state.departLate.length; index++) {
      state.moyenneLate = (state.departLate[index] + state.arriveeLate[index]) / state.trierTrainsPrevus[index];
      if (isNaN(state.moyenneLate)) {
        state.moyenneLate = 0.0;
      }
      console.log(state.moyenneLate);
    }
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
  correspondingLates({commit}, item) {
    commit('correspondingLates', item)
  },
  moyenneRetard({commit}){
    commit('moyenneRetard')
  },
  satisfByDate({ commit }, item) {
    commit('satisfByDate', item);
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
