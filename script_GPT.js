async function msgGPT(){
    chat.innerHTML += `<div class="msg-me">${msgInput.value}</div>`;
    chat.innerHTML += `<div class="msg">${await askChatGPT(msgInput.value)}</div>`;
    msgInput.value = '';
}

async function askChatGPT(question) {
    const apiKey = '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';
    const apiUrl = 'https://api.openai.com/v1/chat/completions';

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: 'gpt-4',
            messages: [
                {
                    role: 'user',
                    content: question
                }
            ],
            max_tokens: 150
        })
    });

    if (!response.ok) {
        throw new Error(`Fehler: ${response.statusText}`);
    }

    const data = await response.json();
    return data.choices[0].message.content.trim();
}

function back() {
    window.location = "index_2.html"
}