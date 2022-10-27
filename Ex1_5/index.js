var proj = {
    Name : "quocminh",
};
const fs = require('fs');
fs.writeFile(`file.json`, JSON.stringify(proj), (error) => {
    if (error) throw error;
});