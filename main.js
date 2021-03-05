const data = new Date();


const calendario=()=>{
    //Inicializa mes 
    data.setDate(1);

    //variaveis para controle de dia atual, anterior e futuro

    //determina a quantidade de dias para o mes 
    const diasDoMes = document.querySelector('.dias'); 
    
    //retorna o ultimo dia do mes 
    const ultimoDia = new Date(data.getFullYear(),data.getMonth()+1,0).getDate(); 

    // retorna o ultimo dia do mes anterior
    const proxUltimoDia = new Date(data.getFullYear(),data.getMonth(),0).getDate(); 

    // retorna a posicao do  primeiro dia do mes 
    const primeiroDia = data.getDay(); 

    // retorna a posicao do  ultimo  dia do mes 
    const proxUltimoDiaIndex = new Date(data.getFullYear(),data.getMonth()+1,0).getDay(); 
    
    //adicona no mes atual os dias do proximo mes 
    var  diasProximos = 0;
    if(primeiroDia>=5){
         diasProximos =7-proxUltimoDiaIndex-1;    
    }  else{   
        diasProximos =14-proxUltimoDiaIndex-1;
    }
    

    //declaracão dos meses 
    const mes = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ];
    
    //Adiciona  o mes e o ano atual no cabeçalho 
    document.querySelector('.dia-atual h1').innerHTML = mes[data.getMonth()];
    document.querySelector('.dia-atual p').innerHTML =  data.getMonth()+1 + " | "+ data.getFullYear();
    
    let dias = "";
     
    // controle do ultimo dia do mes anterior
    for(let x=primeiroDia; x>0; x-- ){
        dias+= `<div class= "dia-anterior">${proxUltimoDia-x+1}</div>`
        
        
    }
     

    //controle do mes atual
    for(let i=1; i<=ultimoDia; i++){
        if(i== new Date().getDate() && data.getMonth()==new Date().getMonth() && data.getFullYear()==new Date().getFullYear() ){
            dias+= `<div class="hoje">${i}</div>`;
        }
        else{
            dias+= `<div>${i}</div>`;
        }
        
    }
    //controle dos dias futuros 
    for(let j =1; j<=diasProximos;j++){
        dias+= `<div class = "proximo-dia">${j}</div>`
        diasDoMes.innerHTML = dias;
       
    }  
};



// evento para ir para o mes anterior 
document.querySelector('.prev').addEventListener('click',()=>{
    data.setMonth(data.getMonth()-1);
    calendario();
    
});


// evento para passar para o proximo mes 
document.querySelector('.next').addEventListener('click',()=>{
    data.setMonth(data.getMonth()+1);
    calendario();
});

calendario();