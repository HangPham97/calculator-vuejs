new Vue({
	el: "#app";
	data() {
		return {
			logList: "",
			current: "",
			answer: "",

		}
	},
	methods: {
		append(number){
			current=number;
		},
	}
})