function log(content) {
    fs.appendFile("./log.txt", JSON.stringify(content, null, 2), (err) => {
        if (err) throw err;
    });
}

module.exports = log;