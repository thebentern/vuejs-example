window.NewPerson = Vue.component('new-person', {
  data() {
    return {
      person: {
        FirstName: '',
        LastName: '',
        Country: '',
        Email: ''
      }
    }
  },
  computed: {
    fullName() {
      return `${this.person.FirstName} ${this.person.LastName}`
    },
    isValid() {
      return this.person.FirstName.length > 0 &&
        this.person.LastName.length > 0 &&
        this.person.Country.length > 0 &&
        this.person.Email.length > 0
    }
  },
  methods: {
    add() {
      this.$store.dispatch('addNewPerson', this.person)
      this.clear()
    },
    clear() {
      this.person.FirstName = ''
      this.person.LastName = ''
      this.person.Country = ''
      this.person.Email = ''
    }
  },
  template: `
      <form id="newperson-form">
          <h3>Add new person</h3>
          <div class="form-group">
              <input class="form-control" type="text" v-model="person.FirstName" required placeholder="Enter a first name" />
              <span class="Error"></span>
          </div>
          <div class="form-group">
              <input class="form-control" type="text" v-model="person.LastName" required placeholder="Enter a last name" />
              <span class="Error"></span>
          </div>
          <div class="form-group">
              <input class="form-control" type="email" v-model="person.Country" required placeholder="Enter a country" />
              <span class="Error"></span>
          </div>
          <div class="form-group">
              <input class="form-control" type="email" v-model="person.Email" required placeholder="Enter an email address" />
              <span class="Error"></span>
          </div>
          <button class="btn btn-primary" type="button" v-bind:disabled="!isValid" v-on:click="add()">Add</button>
      </form>
    `
})

