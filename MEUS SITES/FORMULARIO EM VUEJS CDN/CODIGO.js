const MyNameApp = {
  data() {
    return {
      submittedData: "",
      name: "",
      age: null,
      email: "",
      phone: "",
    }
  },
  methods: {
    submitForm() {
      if (this.isValidForm()) {
        this.submittedData = `NOME: ${this.name}<br>IDADE: ${this.age}<br>EMAIL: ${this.email}<br>TELEFONE: ${this.phone}`;
      } 
      else {
        alert("ERRO: Por favor, preencha todos os campos corretamente!");
      }
    },
    isValidForm() {
      return this.name && this.age && this.isValidEmail(this.email) && this.isValidPhone(this.phone);
    },
    isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    isValidPhone(phone) {
      return /^\d{10}$/.test(phone);
    }
  }
}

Vue.createApp(MyNameApp).mount('#app');
