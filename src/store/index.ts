import { createStore } from 'vuex'
import editor, { EditorProps } from './editor'
export interface GlobalDataProps {
  editor: EditorProps;
}

export default createStore({
  mutations: {
  },
  actions: {
  },
  modules: {
    editor
  }
})

