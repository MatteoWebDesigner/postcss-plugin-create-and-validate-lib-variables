var postcss = require('postcss');
var fs = require('fs'); 

module.exports = postcss.plugin('listLibAPI', function myplugin(options) {

   return function (css) {
        options = options || {};

        let database = [];

        css.walkDecls(decl => {
            if (decl.prop.indexOf('$lib-s') === 0) {

                database.push(decl.prop)

            }
        });

        createDatabase({list: database});
   }

});

function createDatabase(content) {
    fs.writeFile("./database.json", JSON.stringify(content, null, 2), (err) => {
        if (err) throw err;
    });
}