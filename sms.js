var url = 'https://grafite.herokuapp.com/api/v1/mensagens';

var sms = {
   contacto: from_number,
   data: (new Date()).toISOString(),
   conteudo: content,
};

var smsJson = JSON.stringify(smsObj);

var response = httpClient.request(url, {
   method: "POST",
   data: smsJson,
});
