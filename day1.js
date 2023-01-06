const data = await Deno.readTextFile('day_1_input.txt');
const elves = data.trim().split(/\n\n/);
//console.log("ELVES:",elves.length);
const calories = elves.map((elf,i)=> {
    return parseInt(elf.split(/\n/).reduce((a,c)=>{ 
        a = parseInt(c)+parseInt(a); 
        return a;
    }));
});
const max = [...calories];
max.sort((a,b)=>parseInt(a)-parseInt(b));
export const D1P1 = max.at(-1);
export const D1P2 = max.at(-1)+max.at(-2)+max.at(-3);