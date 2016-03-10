module.exports = {
    'Env': {
        'development': {
            'Database': 'mongodb://nvs2394:son231994@ds017258.mlab.com:17258/heroku_d6kzn3vq',
        },
        'test':{
            'Database':'mongodb://127.0.0.1/travel'
        }
    },
    'User':{
    	'Role':{
    		'Admin':1,
    		'User':2
    	},
    	'Status':{
    		'Active':1,
    		'Inactive':2,
    	}
    }
};
 