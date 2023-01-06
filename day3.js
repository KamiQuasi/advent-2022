/*
    [a-z] Char Codes 97-122 = priority Char Code - 96
    [A-Z] Char Codes 65-90 = priority Char Code - 38
*/
const input = await Deno.readTextFile('./day_3_input.txt');
const rucksacks = input.split(/\n/);

function getCharVal(c) { return c > 91 ? c - 96 : c - 38;}

function getPriorityAmt(rs) {
    const size = rs.length/2;
    const comps = rs.split('');
    const priority = comps.filter((v,i)=> {
        return i < size && rs.slice(size).indexOf(v) >= 0;
    }); 
    const code = priority[0].charCodeAt(0);
    return getCharVal(code);
}



export const D3P1 = rucksacks.reduce((a,c)=> {
    a = a + getPriorityAmt(c);
    return a;
}, 0);

let groupAmt = 0;
while (rucksacks.length) {
    const group = rucksacks.splice(0,3);
    const badges = group[0].split('').filter(v=>group[1].indexOf(v)>=0 && group[2].indexOf(v)>=0)
    const code = badges[0].charCodeAt(0);
    groupAmt = groupAmt + getCharVal(code);
}

export const D3P2 = groupAmt;

console.log("D3P1:",D3P1);
console.log("D3P2:",D3P2);