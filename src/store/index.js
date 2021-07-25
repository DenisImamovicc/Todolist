import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todolist: [
      {
        desc: "What",
        date: "26/01/2021, 07:40:44",
        author: "By",
        completed: false
      },
      {
        desc: "Are",
        date: "28/01/2021, 14:37:32",
        author: "Yours",
        completed: false
      },
      {
        desc: "We",
        date: "30/12/2020, 23:56:12",
        author: "Truly",
        completed: false
      },
      {
        desc: "Doing?",
        date: "29/01/2021, 05:58:54",
        author: "X0",
        completed: false
      }
    ]
  },
  mutations: {
    addTodo: (state, payload) => {
      state.todolist.unshift(payload)
    },
    removeTodo(state, payload) {
      state.todolist = state.todolist.filter(todo => todo !== payload)
    },
    completeTodo(state, payload) {
      payload.completed = !payload.completed;
      state.todolist.splice(state.todolist.indexOf(payload), 1);
      state.todolist.push(payload);
    },
    moveTodoUp(state, payload) {
      let payloadIndex = state.todolist.indexOf(payload);
      if (payloadIndex !== 0) {
        state.todolist.splice(payloadIndex - 1, 0, payload);
        state.todolist.splice(payloadIndex + 1, 1);
      }
    },
    moveTodoDown(state, payload) {
      let payloadIndex = state.todolist.indexOf(payload);
      state.todolist.splice(payloadIndex + 2, 0, payload);
      state.todolist.splice(payloadIndex, 1);
    }
  },
})
