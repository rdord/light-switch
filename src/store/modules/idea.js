const state = {
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

const getters = {};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
