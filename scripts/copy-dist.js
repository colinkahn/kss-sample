const copy = require("copy");

copy(["package.json", "CHANGELOG.md"], "dist", {flatten: true}, function(err, file) {});
copy(["src/_*.scss"], "dist/scss", {flatten: true}, function(err, file) {});
