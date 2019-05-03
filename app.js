Vue.use(Vuex)

const people = [{
    "FirstName": "Gary",
    "LastName": "Ortiz",
    "Email": "gortiz0@mapy.cz",
    "Country": "Indonesia"
  },
  {
    "FirstName": "Albert",
    "LastName": "Williamson",
    "Email": "awilliamson1@narod.ru",
    "Country": "China"
  },
  {
    "FirstName": "Mildred",
    "LastName": "Fuller",
    "Email": "mfuller2@npr.org",
    "Country": "Peru"
  },
  {
    "FirstName": "Russell",
    "LastName": "Robinson",
    "Email": "rrobinson3@google.pl",
    "Country": "Belarus"
  },
  {
    "FirstName": "Laura",
    "LastName": "Harper",
    "Email": "lharper4@boston.com",
    "Country": "Philippines"
  },
  {
    "FirstName": "Larry",
    "LastName": "Sanders",
    "Email": "lsanders5@cornell.edu",
    "Country": "China"
  },
  {
    "FirstName": "Michael",
    "LastName": "Rice",
    "Email": "mrice6@geocities.jp",
    "Country": "Philippines"
  },
  {
    "FirstName": "Sara",
    "LastName": "Harris",
    "Email": "sharris7@deliciousdays.com",
    "Country": "Indonesia"
  },
  {
    "FirstName": "Phyllis",
    "LastName": "Webb",
    "Email": "pwebb8@reddit.com",
    "Country": "China"
  },
  {
    "FirstName": "Roger",
    "LastName": "Alvarez",
    "Email": "ralvarez9@nsw.gov.au",
    "Country": "Mexico"
  }
]

Vue.config.devtools = true

const store = new Vuex.Store({
  state: {
    person: {
      list: people
    }
  },
  mutations: {
    addToList(state, newPerson) {
      // Clone object
      const clone = Object.assign({}, newPerson)
      state.person.list.unshift(clone)
    }
  },
  actions: {
    addNewPerson(context, newPerson) {
      context.commit('addToList', newPerson)
    }
  }
})

const app = new Vue({
  el: '#persons',
  store,
  components: {
    NewPerson: window.NewPerson
  },
  computed: {
    persons() {
      return store.state.person.list
    }
  }
})

// Hack because we aren't using any build system
window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor
