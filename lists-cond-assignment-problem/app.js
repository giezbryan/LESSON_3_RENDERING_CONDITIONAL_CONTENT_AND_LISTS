const app = Vue.createApp({
    data() {
        return {
            EnteredTaskValue: '',
            Tasks: [],
            Button: true,
            HideButton: 'Hide'
        };
    },
    methods: {
        AddTasks() {
            this.Tasks.push(this.EnteredTaskValue);
        },
        HideAndReveal() {
            this.Button = !this.Button;
            if (this.Button === true) {
                this.HideButton = 'Hide';
                this.Button = 'Tago';
            } else {
                this.HideButton = 'Show List'
            }
        }
    }
});

app.mount('#assignment');