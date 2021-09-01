const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

console.log('---Q1---')
const [players1, players2] = game.players
console.log(players1, players2)

console.log('---Q2---')
const [gk, ...fieldPlayers] = players1
console.log(gk, fieldPlayers)

console.log('---Q3---')
const allPlayers = [...players1, ...players2]
console.log(allPlayers)

console.log('---Q4---')
const players1Final = [...players1, 'Thiago', 'Coutino', 'Perisic']
console.log(players1Final)

console.log('---Q5---')
const { team1, x: draw, team2 } = game.odds
console.log(team1, draw, team2)

const printGoals = function (...players) {
    for (i = 0; i < players.length; i++) {
        console.log(players[i])
    }
    console.log(`The players ${players} all scored, for a total of ${players.length} goals`)

}
printGoals(...game.scored)

console.log(game.scored)
console.log(...game.scored)

console.log(`hi`)

// For Of - with a bit of destructuring too

// for (const player of allPlayers) {
//     console.log(player)
// }

// for (const [i, el] of allPlayers.entries()) {
//     console.log(i + 1, el)
// }

for (const [i, el] of game.scored.entries()) {
    console.log(`Goal ${i + 1} was scored by ${el}`)
}

const odds = game.odds
console.log(odds)

const oddsArr = Object.values(odds)
console.log(oddsArr)
let oddsTotal = 0
for (const odd of oddsArr) {
    oddsTotal += odd
}
const averageOdd = oddsTotal / oddsArr.length
console.log(`The average odds are ${averageOdd}`)

//-----------------------------------------------------------------------
const [o1, o2, o3] = Object.values(odds)
console.log(o1, o2, o3)

console.log(`Odds of victory; ${game.team1}: ${o1}
Odds of a draw: ${o2}
Odds of Victory; ${game.team2}: ${o3}`)

// ** - This for loop is Jonas' solution which does the same as my solution above
for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`);
}
//-------------------------------------------------------------------------