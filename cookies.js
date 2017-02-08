;(function(){

	return cookies = {

		// Display the cookie bar when needed
		init: function(){
			if (cookies.accepted()) return;
			setTimeout(function(){
				var bar = document.querySelector('.cookie-bar');
				bar.style.display = 'block';
				document.querySelector('.cookie-bar .close').addEventListener('click', function(e){
					bar.style.display = 'none';
					cookies.set('visited','true',365*2);
				});
			}, 1000);
		},

		// Check if the navigator already has accepted cookies
		accepted: function(){
			return navigator.cookieEnabled && !!document.cookie && cookies.get('visited');
		},

		// Get a cookie
		get: function(name){
			var s = document.cookie,
				init = s.indexOf(name);
			if (init == -1) return false;
			var end = s.indexOf(';', init);
			if (end == -1) end = s.length;
			return unescape(s.substring(init + name.length + 1, end));
		},

		// Set a cookie with the name, value and expire date given
		set: function(name, value, days){
			var d = new Date();
			d.setTime(d.getTime() + (days*24*60*60*1000));
			document.cookie = name + '=' + value + ';expires=' + d.toUTCString() + ';path=' + window.location.pathname;
		},

		// Delete a cookie
		delete: function(name){
			if (cookies.get(name))
			document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=' + window.location.pathname;
		},

	}

})();