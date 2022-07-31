
exports.loadMainPage = function(req, res){
    var html_data = {
        title : "Question of the Day"
    };


    res.render("layer", html_data);
}