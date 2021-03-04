const data = new Date();


const calendario=()=>{
    //Inicializa mes 
    data.setDate(1);

    //variaveis para controle de dia atual, anterior e futuro
    const diasDoMes = document.querySelector('.dias');
    const ultimoDia = new Date(data.getFullYear(),data.getMonth()+1,0).getDate();
    const proxUltimoDia = new Date(data.getFullYear(),data.getMonth(),0).getDate();
    const primeiroDia = data.getDay();
    const proxUltimoDiaIndex = new Date(data.getFullYear(),data.getMonth()+1,0).getDay();
    const diasProximos = 7-proxUltimoDiaIndex-1;
    

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
    
    //controle da data atual no cabeçalho 
    document.querySelector('.dia-atual h1').innerHTML = mes[data.getMonth()];
    document.querySelector('.dia-atual p').innerHTML =  data.getMonth()+1 + " | "+ data.getFullYear();
    
    let dias = "";
     
    // controle do dia anterior 
    for(let x=primeiroDia; x>0; x-- ){
        dias+= `<div class= "dia-anterior">${proxUltimoDia-x+1}</div>`
        
    }
     

    //controle do dia atual 
    for(let i=1; i<=ultimoDia; i++){
        if(i== new Date().getDate() && data.getMonth()==new Date().getMonth()){
            dias+= `<div class="hoje">${i}</div>`;
        
        }else{
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
document.querySelector('.antes').addEventListener('click',()=>{
    data.setMonth(data.getMonth()-1);
    calendario();
    
});



// evento para passar para o proximo mes 
document.querySelector('.proximo').addEventListener('click',()=>{
    data.setMonth(data.getMonth()+1);
    calendario();
});

calendario();