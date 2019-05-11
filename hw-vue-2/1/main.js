var app = new Vue({
    el: '#app',
    data: {
        info: {
            name: {
                name: 'Name',
                value: '',
                pattern: /^[a-zA-Z]{2,30}$/
            },
            phone: {
                name: 'Phone',
                value: '',
                pattern: /^[0-9]{7,14}$/
            },
            email: {
                name: 'Email',
                value: '',
                pattern: /.+/
            },
            field1: {
                name: 'Some Field 1',
                value: '',
                pattern: /.+/
            },
            field2: {
                name: 'Some Field 2',
                value: '',
                pattern: /.+/
            }
        }
    },
    methods: {
        
    }
});