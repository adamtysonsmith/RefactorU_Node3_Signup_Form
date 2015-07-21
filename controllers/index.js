var indexController = {
	index: function(req, res) {
		res.render('index');
	},
    form: function(req, res) {
        console.log('Email from the request body (typically we would push this into a db)', req.body.email);
        res.redirect('/success');
    },
    success: function(req, res) {
		res.render('success');
	}
};

module.exports = indexController;