const state = {
  randomIdea: {},
  items: {
    1: {
      id: 1,
      name: 'sskj scrapper'
    },
    2: {
      id: 2,
      name: 'slovenski learn word-a-day',
      dependencies: [1]
    },
    3: {
      id: 3,
      name: 'generated pictonary card app',
      dependencies: [1]
    },
    4: {
      id: 4,
      name: 'stress-free habits (roulette)',
      description: 'without decision fatigue'
    },
    5: {
      id: 5,
      name: 'vreme na poti',
      description:
        'pokaze kaksno bo vreme od casa odhoda iz kraja na poti do casa prihoda v koncen kraj. pokaze tudi ce bo vmes padla noc'
    },
    6: {
      id: 6,
      name: 'naroci vegansko pico na ehrana',
      description: 'ehrana/wolt scrapper'
    },
    7: {
      id: 7,
      name: 'vegan food delivery ljubljana',
      description: 'na enem mestu'
    }
  }
};

const getters = {
  count: state => Object.keys(state.items).length,
  ideaArray: state => Object.values(state.items)
};

const actions = {
  pickIdea: ({ commit, getters }) => {
    const index = Math.floor(Math.random() * Math.floor(getters.count));
    const idea = getters.ideaArray[index];
    commit('setRandomIdea', idea);
  },
  clearIdea: ({ commit }) => {
    commit('setRandomIdea', {});
  }
};

const mutations = {
  setRandomIdea: (state, idea) => (state.randomIdea = idea)
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
