var app = new Vue({
    el: '#app',
    data: {
        form_sended: false,
        email: '',
        first_name: '',
        last_name: '',
        phone: '',
        hideForm: true,
        users: [],
		tests: []
    },
    methods: {
        addUser(){
			this.users.push(Math.random());
		},
        send(){
            this.form_sended = !this.form_sended;
            this.hideForm = !this.hideForm;
            var inputs = document.querySelectorAll('.input');
			for (var i = 0; i < inputs.length; i++){
				this.tests.push(inputs[i].value)
			}
        },
        deleteGuest(index){
            console.log(index);
            this.users.splice(index, 1);
        }
    }
});