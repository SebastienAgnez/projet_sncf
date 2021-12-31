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
  dateGares: [],
  indicateurs: [],
  satisfaction: null,
};

const getters = {
  gareD: state => {
    return state.gareD;
  },
  gareA: state => {
    return state.gareA;
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
