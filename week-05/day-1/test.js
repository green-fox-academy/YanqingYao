const pa2 = ['shit', 'fuck'];
const a = 'shit.';
const b = 'shit,';
const c = 'shit';

console.log(pa2.includes((a.replace(/\./g, '')).toString().toLowerCase()));
console.log(pa2.includes((b.replace(/,/g, '')).toString().toLowerCase()));
console.log(pa2.includes((c.replace(/\./g, '')).toString().toLowerCase()));
console.log(pa2.includes((c.replace(/,/g, '')).toString().toLowerCase()));
