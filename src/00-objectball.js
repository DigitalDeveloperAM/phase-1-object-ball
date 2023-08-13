
const gameObject = () => {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: "Black, White",
            players: {
                number: [0, 30, 11, 1, 31],
                shoes: [16, 14, 17, 19, 15],
                points: [22, 12, 17, 19, 15],
                rebounds: [12, 12, 19, 12, 2],
                assists: [12, 12, 10, 3, 3, 4],
                steals: [2, 12, 3, 3, 4,],
                blocks: [1, 12, 1, 8, 11],
                slamDunks: [1, 7, 15, 5, 1],
            },
            away: {
                teamName: "Charlotte Hornets",
                colors: "Turquoise, Purple",
                players: {
                    number: [0, 30, 11, 1, 31],
                    shoes: [16, 14, 17, 19, 15],
                    points: [22, 12, 17, 19, 15],
                    rebounds: [12, 12, 19, 12, 2],
                    assists: [12, 12, 10, 3, 3, 4],
                    steals: [2, 12, 3, 3, 4,],
                    blocks: [1, 12, 1, 8, 11],
                    slamDunks: [1, 7, 15, 5, 1],
                },
            }

        }
    }
}

const gameInfo = gameObject();

console.log(gameInfo);