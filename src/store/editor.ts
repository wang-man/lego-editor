import { Module } from 'vuex'
import { v4 as uuidv4 } from 'uuid';
import { GlobalDataProps } from '.'

export interface EditorProps {
  components: ComponentData[],
  currentElement: string
}

interface ComponentData {
  props: { [key: string]: any },
  id: string,   // 使用uuid包创建
  name: string
}


export const testComponents: ComponentData[] = [
  { id: uuidv4(), name: 'l-text', props: { text: 'Hello', fontSize: '12px' } },
  { id: uuidv4(), name: 'l-text', props: { text: 'Hello2', fontSize: '14px' } },
  { id: uuidv4(), name: 'l-text', props: { text: 'Hello3', fontSize: '16px' } }
]

const editor: Module<EditorProps, GlobalDataProps> = {
  state: {
    components: testComponents,
    currentElement: ''
  }
}

export default editor;