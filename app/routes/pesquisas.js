module.exports = function(app){
    app.get('/pesquisas', function(req,res){
        res.render("secao/pesquisa");
    })
}