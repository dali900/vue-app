
new Vue({
	el: "#vue-app",
	methods: {
		goData: function () {
			var params = new URLSearchParams();
			params.append('name', 'value1');

			//axios.post('server.php', params).then(response => console.log(response.data));

			/*axios({
			  method: 'post',
			  url: 'server.php',
			  data: params,
			  headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}				
			}).then(response => console.log(response));*/


		}	
	}
})