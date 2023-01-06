/*
AX1 - Rock, BY2 - Paper, CZ3 - Scissors
Loss - 0, Draw - 3, Win - 6
*/

const RPS = {
    'Rock':1,
    'Paper':2,
    'Scissors':3
};


function* RPSNext(index) {  
    while (true) {
        yield index;
        index = (index >= 3) ? 1 : index+1;
    }
}

const Outcome = {
    'Loss': 0,
    'Draw': 3,
    'Win': 6
};

const strategy = await Deno.readTextFile('./day_2_input.txt');
const turns = strategy.split(/\n/);
const opp = {A:RPS.Rock,B:RPS.Paper,C:RPS.Scissors};
const me = {X:RPS.Rock,Y:RPS.Paper,Z:RPS.Scissors};
const roundResult = {X:Outcome.Loss,Y:Outcome.Draw,Z:Outcome.Win};

function part1(game) {
    let score = 0;
    score += me[game[1]];
    if (opp[game[0]] === me[game[1]]) {
        score += 3;
    } else {
        switch (opp[game[0]]) {
            case RPS.Rock:
                score += me[game[1]] === RPS.Paper ? 6 : 0;
            break;
            case RPS.Paper:
                score += me[game[1]] === RPS.Scissors ? 6 : 0;
                break;
            case RPS.Scissors:
                score += me[game[1]] === RPS.Rock ? 6 : 0;
                break;
        }
    }
    return score;
}

export const D2P1 = turns.reduce((a,c)=>{
    return a + part1(c.split(' '));
},0);

function part2(game) {
    let score = 0;
    const pick = RPSNext(opp[game[0]]);
    let req = 0;
    switch (roundResult[game[1]]) {
        case Outcome.Loss:
            pick.next();
            pick.next();
            req = req + (pick.next().value || 0);
            score += req;
        break;
        case Outcome.Draw:
            score += 3;
            req = opp[game[0]];
            score += req;
            break;
        case Outcome.Win:
            score += 6;
            pick.next();
            req = req + (pick.next().value || 0);
            score += req;
            break;
    }
    return score;
}

    
export const D2P2 = turns.reduce((a,c)=>{
    return a + part2(c.split(' '))
},0)
