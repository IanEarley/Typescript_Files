// ? before : sets item as conditional

// function printAddress(street: string, streetTwo?: string, state = 'AZ') {
//   console.log(street);
//   if (streetTwo) {
//     console.log(streetTwo);
//   }
//   console.log(state);
// }

// printAddress('123 Any St');
// printAddress('123 Any St', 'Apt 234');
// printAddress('123 Any St', 'Apt 234', 'UT');

// rest argument ... takes an array

function lineupCard(team: string, ...players: string[]) {
  console.log('Team: ' + team);
  for (let player of players) {
    console.log(player);
  }
}

lineupCard('Astros', 'Altuve', 'Correra', 'Bregman');