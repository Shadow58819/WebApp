async function msgGPT(){
    chat.innerHTML += `<div class="msg-me">${msgInput.value}</div>`;
    chat.innerHTML += `<div class="msg">${await askChatGPT(msgInput.value)}</div>`;
    msgInput.value = '';
}

async function askChatGPT(question) {
    // const apiKey = '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';
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
    window.location = "../index_2.html"
}