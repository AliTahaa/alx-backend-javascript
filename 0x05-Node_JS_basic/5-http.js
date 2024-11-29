const http = require('http');
const { readFile } = require('fs');

const hostname = '127.0.0.1';
const port = 1245;

function countStudents(fileName) {
  const stds = {};
  const fs = {};
  let leng = 0;
  return new Promise((resolve, reject) => {
    readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        let out = '';
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            leng += 1;
            const field = lines[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(stds, field[3])) {
              stds[field[3]].push(field[0]);
            } else {
              stds[field[3]] = [field[0]];
            }
            if (Object.prototype.hasOwnProperty.call(fs, field[3])) {
              fs[field[3]] += 1;
            } else {
              fs[field[3]] = 1;
            }
          }
        }
        const n = leng - 1;
        out += `Number of students: ${n}\n`;
        for (const [key, value] of Object.entries(fs)) {
          if (key !== 'field') {
            out += `Number of students in ${key}: ${value}. `;
            out += `List: ${stds[key].join(', ')}\n`;
          }
        }
        resolve(out);
      }
    });
  });
}

const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  if (request.url === '/') {
    response.write('Hello Holberton School!');
    response.end();
  }
  if (request.url === '/students') {
    response.write('This is the list of our students\n');
    countStudents(process.argv[2].toString()).then((output) => {
      const outString = output.slice(0, -1);
      response.end(outString);
    }).catch(() => {
      response.statusCode = 404;
      response.end('Cannot load the database');
    });
  }
});

app.listen(port, hostname, () => {
});

module.exports = app;
