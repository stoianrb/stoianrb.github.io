// Array de nume
const names = ["John", "Jane", "Mark", "Bob", "Mary", "Jill"];

// Funcția care va verifica numele și va tipări mesajul corect
for (const name of names) {
    // Verifică dacă numele începe cu "J" sau "j"
    if (name.charAt(0).toLowerCase() === 'j') {
        console.log("Goodbye " + name);
    } else {
        console.log("Hello " + name);
    }
}
