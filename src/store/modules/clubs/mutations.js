const mutations = {
  addClub(state, club) {
    state.clubs.push(club);
  },

  setClubs(state, clubs) {
    state.clubs = clubs;
  },

  setCurrentClub(state, club) {
    state.currentClub = club;
  },

  setClub(state, club) {
    const index = state.clubs.findIndex((p) => p.id === club.id);
    state.clubs[index] = club;
  },

  deleteClub(state, id) {
    state.clubs = state.clubs.filter((p) => p.id !== id);
  },
};

export default mutations;
