let pergunta;
let ent;
let inst
console.log('Voce toca algum instrumento?"s ou sim" para sim,"n ou nao" para não');
process.stdin.on('data', function(data){
    ent=data.toString().trim()
    if(!pergunta)
        {
        pergunta=ent;
        }
    if(pergunta=='n'||pergunta=='nao'||pergunta=='não')
        {
        console.log('voce não sabe tocar nada');
        process.exit()
        }

    if(pergunta=='s'||pergunta=='sim'&&!inst)
            {
        console.log('qual?');
        inst=ent;
            }
        
   
    if(inst=='violino')
            {
            console.log('voce sabe tocar violino');
            process.exit()
            }
    
})
