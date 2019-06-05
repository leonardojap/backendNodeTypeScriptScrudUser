# backendNodeTypeScriptScrudUser
#By Leonardo Alvarado.
#ing.leonardo92@gmail.com

This is a simple CRUD user made with typeScript and nodeJs

Is a simple project but made with best practices.

You can test it creating an user, updatind, find it and delete it.

1 First, clone this porject:

	 git clone https://github.com/leonardojap/backendNodeTypeScriptScrudUser.git
 
2 Go to the folder projec

	cd backendNodeTypeScriptScrudUser

3 install dependencies

	npm i

4 run project:

	npm run start

This is the list of services, feel free to test it and update it:

Create user:

	Url: localhost:3000/api/user/create
	Metoth: POST
	Data:

	{
		"name":"Leonardo",
		"lastName": "Alvarado",
		"email":"ing.leonardo92@gmail.com",
		"password":"12345678"
	}

Update user:

	Url: localhost:3000/api/user/update
	Metoth: POST
	Data:
	{
		"name":"Leonardo Jose",
		"lastName": "Alvarado Padua",
		"email":"ing.leonardo92@gmail.com",
		"password":"newpass"
	}
	

Find user:

	Url: localhost:3000/api/user/:emailUser

	Metoth: GET

Delete user:

	Url: localhost:3000/api/user/:emailUser
	Metoth: DELETE

Responses:

	{
		code:200,
		message:"...",
		data{...} //an object or empty
	}



