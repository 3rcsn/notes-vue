import { defineStore } from 'pinia'


export const useNotesStore = defineStore('notes', {
  state: () => ({
    /** @type {{ text: string, id: number, isFinished: boolean }[]} */
    notes: [],
    /** @type {'all' | 'finished' | 'unfinished'} */
    filter: 'all',
    // type will be automatically inferred to number
    nextId: 0,
  }),
  getters: {
    finishedTodos(state) {
      // autocompletion! ✨
      return state.notes.filter((todo) => todo.isFinished)
    },
    unfinishedTodos(state) {
      return state.notes.filter((todo) => !todo.isFinished)
    },
    /**
     * @returns {{ text: string, id: number, isFinished: boolean }[]}
     */
    filteredTodos(state) {
      if (this.filter === 'finished') {
        // call other getters with autocompletion ✨
        return this.finishedTodos
      } else if (this.filter === 'unfinished') {
        return this.unfinishedTodos
      }
      return this.notes
    },
  },
  actions: {
    // any amount of arguments, return a promise or not
    addTodo(text) {
      // you can directly mutate the state
      this.notes.push({ text, id: this.nextId++, isFinished: false })
    },
  },
})



