module.exports = {
    'Env': {
        'development': {
            'Database': 'mongodb://127.0.0.1/travel',
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
 