const app = Vue.createApp({
    data() {
        return {
            EnteredTaskValue: '',
            Tasks: []
        };
    },
    methods: {
        AddTasks() {
            this.Tasks.push(this.EnteredTaskValue);
        }
    }
});

app.mount('#assignment');