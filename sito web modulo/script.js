let people = [];

// Funzione per aggiungere una persona
function addPerson() {
    const nome = document.getElementById('nome').value.trim();
    const cognome = document.getElementById('cognome').value.trim();
    const email = document.getElementById('email').value.trim();
    const dataNascita = document.getElementById('dataNascita').value;
    const telefono = document.getElementById('telefono').value.trim();
    const paese = document.getElementById('paese').value.trim();
    const provincia = document.getElementById('provincia').value.trim();

    // Validazione input
    if (!nome || !cognome || !email || !dataNascita || !telefono || !paese || !provincia) {
        alert('Per favore, compila tutti i campi.');
        return;
    }

    // Creo un oggetto persona
    const person = { nome, cognome, email, dataNascita, telefono, paese, provincia };
    
    // Aggiungo la persona all'array
    people.push(person);
    
    // Aggiorna la tabella e resetta il modulo
    updateTable();
    resetForm();
}

// Funzione per aggiornare la tabella
function updateTable() {
    const tableBody = document.querySelector('#tabellaPersone tbody');
    tableBody.innerHTML = ''; // Pulisci la tabella

    people.forEach((person, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${person.nome}</td>
            <td>${person.cognome}</td>
            <td>${person.email}</td>
            <td>${person.dataNascita}</td>
            <td>${person.telefono}</td>
            <td>${person.paese}</td>
            <td>${person.provincia}</td>
            <td><button onclick="removePerson(${index})">Rimuovi</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// Funzione per rimuovere una persona
function removePerson(index) {
    people.splice(index, 1); // Rimuovi l'oggetto all'indice specificato
    updateTable(); // Aggiorna la tabella
}

// Funzione per resettare il modulo
function resetForm() {
    document.getElementById('form').reset(); // Pulisci tutti i campi del modulo
}
