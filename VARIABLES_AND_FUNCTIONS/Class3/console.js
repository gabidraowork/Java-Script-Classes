// log => registro
console.clear();
const myVar = true;

console.log(245);
console.log("I'm a text!")
console.log(myVar)

console.log();
console.time("tablesTime");

const users = [
  { id: 1, name: 'Ana', role: 'Admin' },
  { id: 2, name: 'Bruno', role: 'Editor' }
];
console.table(users);
console.log();
const settings = { theme: 'dark', autoSave: true, timeout: 30 };
console.table(settings);
console.timeEnd("tablesTime");
console.log();

console.trace();
console.log("\n\n\n");
console.error(new Error("Error!"));