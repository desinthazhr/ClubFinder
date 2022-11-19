// class DataSource {
//   constructor (onSuccess, onFailed) {
//   this.onSuccess = onSuccess;
//   this.onFailed = onFailed;
//   }


//   searchClub (keyword) {
//     super(onSuccess, onFailed){
//       const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));

//       if (filteredClubs.length) {
//         this.onSuccess(filteredClubs);
//       } else {
//         this.onFailed(`${keyword} is not found`);
//       }
//     }
// };
// }

// latiahan class constructor

// class DataSource {
//   constructor (onSuccess, onFailed) {
//     this.onSuccess = onSuccess;
//     this.onFailed = onFailed;
//   }

  

//     searchClub(keyword) {
//       const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));

//   if (filteredClubs.length) {
//     this.onSuccess(filteredClubs);
//   } else {
//     this.onFailed(`${keyword} is not found`);
//   }
//   }
// }

import clubs from './clubs.js';
// latihan promise

class DataSource {
  static searchClub(keyword) {
    return new Promise((resolve, reject) => {
      const filteredClubs = clubs.filter((club) =>  club.name.toUpperCase().includes(keyword.toUpperCase()));

      if (filteredClubs.length) {
        resolve(filteredClubs);
      } else {
        reject(`${keyword} is not found`);
      }
  });
  }
}

export default DataSource;