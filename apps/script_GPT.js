async function msgGPT() {
    const userInput = msgInput.value.trim();
    if (!userInput) {
        alert('Bitte geben Sie eine Nachricht ein.');
        return;
    }

    chat.innerHTML += `<div class="msg-me">${userInput}</div>`;
    try {
        const response = await askChatGPT(userInput);
        chat.innerHTML += `<div class="msg">${response}</div>`;
    } catch (error) {
        chat.innerHTML += `<div class="msg error">Fehler: ${error.message}</div>`;
    } finally {
        msgInput.value = '';
    }
}

async function askChatGPT(question) {
    try {
        const response = await fetch('/api/chat', { // Backend-Endpunkt
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: question })
        });

        if (!response.ok) {
            throw new Error(`Fehler: ${response.statusText}`);
        }

        const data = await response.json();
        return data.response.trim();
    } catch (error) {
        console.error('Fehler bei der API-Anfrage:', error);
        throw error;
    }
}


// async function msgGPT(){
//     chat.innerHTML += `<div class="msg-me">${msgInput.value}</div>`;
//     chat.innerHTML += `<div class="msg">${await askChatGPT(msgInput.value)}</div>`;
//     msgInput.value = '';
// }

// async function askChatGPT(question) {
//     const apiKey = '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';
//     const apiUrl = 'https://api.openai.com/v1/chat/completions';

//     const response = await fetch(apiUrl, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${apiKey}`
//         },
//         body: JSON.stringify({
//             model: 'gpt-4',
//             messages: [
//                 {
//                     role: 'user',
//                     content: question
//                 }
//             ],
//             max_tokens: 150
//         })
//     });

//     if (!response.ok) {
//         throw new Error(`Fehler: ${response.statusText}`);
//     }

//     const data = await response.json();
//     return data.choices[0].message.content.trim();
// }

function back() {
    window.location = "../index_2.html"
}