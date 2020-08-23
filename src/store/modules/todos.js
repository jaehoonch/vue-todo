const state = {
  todos: [
    { id: 1, name: "create vue project", duedate: "2020-08-23" },
    { id: 2, name: "create components", duedate: "2020-08-24" },
    { id: 3, name: "create stores", duedate: "2020-08-25" },
  ],
};

const getters = {
  allTodos: (state) => state.todos,
};

const actions = {
  // updateTodo({ rootState, commit }) {
  //   commit("setImages", response.data.data);
  // },
};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
