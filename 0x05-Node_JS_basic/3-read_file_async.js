const { readFile } = require('fs');

function countStudents(fileName) {
  const stds = {};
  const fs = {};
  let leng = 0;
  return new Promise((resolve, reject) => {
    readFile(fileName, (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
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
        console.log(`Number of students: ${n}`);
        for (const [key, value] of Object.entries(fs)) {
          if (key !== 'field') {
            console.log(`Number of students in ${key}: ${value}. List: ${stds[key].join(', ')}`);
          }
        }
        resolve(data);
      }
    });
  });
}

module.exports = countStudents;
