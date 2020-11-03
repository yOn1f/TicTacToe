Vue.component('grid', {
	template:
	`
	<table>
		<tr>
			<cell id="11"></cell>
			<cell id="12"></cell>
			<cell id="13"></cell>
		</tr>
		<tr>
			<cell id="21"></cell>
			<cell id="22"></cell>
			<cell id="23"></cell>
		</tr>
		<tr>
			<cell id="31"></cell>
			<cell id="32"></cell>
			<cell id="33"></cell>
		</tr>
	</table>
	`
})

Vue.component('cell', {
	template:
	`
		<td @click="updateSign">{{ sign }}</td>
	`,
	data() {
		return {
			sign: ""
		}
	},
	methods: {
		updateSign() {
			this.sign = "X"
		}
	}
})

var app = new Vue({
	el: '#app'
})