	
	// 4)  Запрашивать у пользователя возраст (метод prompt()).
	// В зависимости от введенного возраста выдавать сообщение «Вы слишком молоды» (в случае введенного значения менее 20 лет) 
	// или «Вы нам подходите» (в случае введенного значения более или равного 20 годам).

	var userAge = prompt('Напишите ваш возраст?');

	if (userAge <= 19) {
		alert('«Вы слишком молоды»');
	}
	else {
		alert('«Вы нам подходите»');
	}
	