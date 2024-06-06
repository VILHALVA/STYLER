$(() => {
    const ws = new WebSocket("wss://api-pub.bitfinex.com/ws/2");

    const from = 'BTC'
    const to = 'USD'
    const subscriptionMsg = {
        event: 'subscribe',
        channel: 'ticker',
        symbol: 't' + from + to
    }

    ws.onerror = function () {
        console.log("Erro ao tentar comunicação com o servidor.");
    };

    let channelId = 0

    ws.onmessage = (msg) => {
        const dados = msg.data = JSON.parse(msg.data)   
        if (dados['event'] === 'subscribed') {
            channelId = dados.chanId
            const str = 'Registrada assinatura de cotação de ' + from + ' para ' + to
            console.log(str)
            $("#status").html(str)                    
        } 
        else if (dados[0] === channelId && dados[1][6] !== undefined) {
            const str = from + ': ' + dados[1][6] + ' ' + to
            $("#message").html(str)
            $('#message').fadeOut(100);
            $('#message').fadeIn(100);      
            
            console.log(str)
        }
    }
    ws.onopen = () => {
        console.log('Enviando solicitação de assinatura de cotação de ' + subscriptionMsg.from + ' para '+ subscriptionMsg.to)
        ws.send(JSON.stringify(subscriptionMsg))
    }
})