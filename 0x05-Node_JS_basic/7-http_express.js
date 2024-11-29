const express = require('express');

const { readFile } = require('fs');

const app = express();
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

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});
app.get('/students', (request, response) => {
  countStudents(process.argv[2].toString()).then((output) => {
    response.send(['This is the list of our students', output].join('\n'));
  }).catch(() => {
    response.send('This is the list of our students\nCannot load the database');
  });
});

app.listen(port, () => {
});

module.exports = app;
