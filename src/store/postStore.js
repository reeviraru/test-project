import {create} from "zustand";

const defaultState = [{
    title: 'Компоненты высшего порядка',
    description: 'Компонент высшего порядка — это продвинутый метод в React для повторного использования логики компонента. Как таковые не являются частью React API. Это шаблон, возникающий из композиционной природы React.',
    tags: ['Theme #1', 'Theme #3'],
    id: 0
}, {
    title: 'Интеграция с другими библиотеками',
    description: 'React можно использовать в любом веб-приложении. Его можно встроить в другие приложения, и, при некоторой осторожности, другие приложения могут быть встроены в React.',
    tags: ['Theme #1', 'Theme #5', 'Theme #6'],
    id: 1
}]

const usePostStore = create((set, get) => ({
    posts: defaultState,
    addPost: (post) => set((prev) => ({posts: [...prev.posts, post]})),
    removePost: (id) => set((prev) => ({posts: prev.posts.filter(it => it.id !== id)})),
}))

export default usePostStore
