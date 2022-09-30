import { createStore } from 'vuex'
import weatherData from './weatherData'

const store = createStore({
  modules: {
    w: weatherData
  },
  state () {
    return {
      articles: [],
      dates: [],
      loading: false,
      currentPage: 0,
      observer: new IntersectionObserver((item) => {if(item[0].intersectionRatio > 0) store.dispatch('getArticles')})
    }
  },
  getters: {
    sortedArticles(state) {
      if(state.articles.length > 0) {
        let data = []
        for(let i = 0; i < state.articles.length; i++) {
          let selectedColumn = 2
          let modifiteData = [[], [], [], []]
          modifiteData.unshift(state.articles[i].slice(0, 8))
          modifiteData.unshift(state.dates[i])
          for(let j = 8; j < state.articles[i].length; j++) {
            modifiteData[selectedColumn].push(state.articles[i][j])
            selectedColumn++
            if (selectedColumn > 5) selectedColumn = 2
          }
          data.push(modifiteData)
        }
        return data
      }
    },
    listOfArticles(state) {
      return state.articles.flat()
    },
    loading(state) {
      return state.loading
    },
    observer(state) {
      return state.observer
    },
    currentPage(state) {
      return state.currentPage
    },
  },
  mutations: {
    findDate(state) {
      let now = new Date
      now.setDate(now.getDate() - state.currentPage)
      state.dates.push((state.currentPage === 0) ? 'today' : (state.currentPage === 1) ? 'yesterday' : now.toLocaleDateString())
    }
  },
  actions: {
    async getArticles( { commit, state } ) {
      state.observer.unobserve(document.querySelector('.bottom-edge'))
      commit('findDate')
      state.currentPage++
      state.loading = true
      let response = await fetch('https://jsonplaceholder.typicode.com/comments?_page=' + state.currentPage + '&_limit=50')
      let data = await response.json()
      state.loading = false
      if (data.length > 0) {
        state.articles.push(data)
        state.observer.observe(document.querySelector('.bottom-edge'))
      }
    },
    async fetchArticle({}, postId) {
      let response = await fetch('https://jsonplaceholder.typicode.com/comments?id=' + postId.id)
      let data = await response.json()
      return data[0]
    }
  }
})

export default store

  