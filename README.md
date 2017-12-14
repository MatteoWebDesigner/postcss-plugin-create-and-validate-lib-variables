# List and check unreferenced lib variable in sass

first you run `gulp createRules` to define which variables are defined in lib.scss.
It will produce a database.json which contains an array with all the variable following a certain pattern.

when you run `gulp validate` it use the database array to check if any variable using the pattern `$lib-s` is matching. If it does not match it will throw an error.