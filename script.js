function valorBTC(){
  const p = document.querySelector('p');
  p.innerHTML = 'Valor: R$ ';
  const url = 'https://blockchain.info/ticker';
  const valor = fetch(url);
  valor.then(v => v.json())
  .then(body => {
    const valoresBRL = body.BRL;
    const valorCompra = valoresBRL.buy;
    p.innerHTML += valorCompra;
  })
}
valorBTC();
setInterval(valorBTC, 30000);