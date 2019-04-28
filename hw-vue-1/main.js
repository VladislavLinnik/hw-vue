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
		guests: []
    },
    methods: {
        addUser(){
			this.users.push(Math.random());
		},
        sendForm(){
            var email = document.querySelector('#email').value,
                first_name = document.querySelector('#first_name').value,
                last_name = document.querySelector('#last_name').value,
                phone = document.querySelector('#phone').value;
            
            if(email != '' && first_name != '' && last_name != '' && phone != '') {
                this.form_sended = !this.form_sended;
                this.hideForm = !this.hideForm;
                
                var inputs = document.querySelectorAll('.input');
                for (var i = 0; i < inputs.length; i++){
                    this.guests.push(inputs[i].value)
                }
			} else {
                alert('Please, fill in all fields!');
            }
            
        },
        deleteGuest(index){
            console.log(index);
            this.users.splice(index, 1);
        }
    }
});