import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [
        {
          id: 'c1',
          firstName: 'John',
          lastName: 'Jaystar Ayilara',
          areas: ['frontend', 'backend', 'career'],
          description:
            'I am Jaystar and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 40,
        },
        {
          id: 'c2',
          firstName: 'Fatai',
          lastName: 'M. Abiodun',
          areas: ['frontend', 'career'],
          description:
            "I'm Fatai and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30,
        },
      ],
    };
  },
  mutations: mutations,
  actions,
  getters,
};
