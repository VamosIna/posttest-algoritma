
// If-Else hari esok
function Inputhari(){
    let hari = prompt('masukan hari');
    if(hari == 'senin'){
        document.querySelector("#hasilFunction").innerHTML = "BESOK HARI SELASA LOH";
    }else if(hari=='selasa'){
        document.querySelector("#hasilFunction").innerHTML = "BESOK HARI RABU";
    }else if(hari=='rabu'){
        document.querySelector("#hasilFunction").innerHTML = "BESOK HARI KAMIS";
    }else if(hari=='kamis'){
        document.querySelector("#hasilFunction").innerHTML = "BESOK HARI JUMAT";
    }else if(hari=='jumat'){
        document.querySelector("#hasilFunction").innerHTML = "BESOK HARI SABTU";
    }else if(hari=='sabtu'){
        document.querySelector("#hasilFunction").innerHTML = "BESOK HARI MINGGU";
    }else if(hari=='minggu'){
        document.querySelector("#hasilFunction").innerHTML = "BESOK HARI SENIN";
    }else{
        alert("masukan hari yang benar yaw, check lagi yukk!!");
    }
}

// switch case
function InputHaris(){
    let hari = prompt('masukan hari');
    
    switch(hari){
        case 'senin':
        document.querySelector("#hasilFunction").innerHTML = "BESOK HARI SELASA LOH";
        break;
        case 'selasa':
        document.querySelector("#hasilFunction").innerHTML = "BESOK HARI RABU LOH";
        break;
        case 'rabu':
        document.querySelector("#hasilFunction").innerHTML = "BESOK HARI KAMIS LOH";
        break;
        case 'kamis':
        document.querySelector("#hasilFunction").innerHTML = "BESOK HARI JUMAT LOH";
        break;
        case 'jumat':
        document.querySelector("#hasilFunction").innerHTML = "BESOK HARI SABTU LOH";
        break;
        case 'sabtu':
        document.querySelector("#hasilFunction").innerHTML = "BESOK HARI MINGGU LOH";
        break;
        case 'minggu':
        document.querySelector("#hasilFunction").innerHTML = "BESOK HARI SENIN LOH";
        break;
        default:
            alert('SALAH NIH, YUK DICHECK LAGI !!');
    }
}
//perulangan 2B
//for
function perulanganFor(){
    let input = prompt('nilai');
    check = parseInt(input);
    let textx= "";
    for (let a = 0; a <= check; a++) {
        if(a%2 == 0){
             console.log(a);
             textx +="Taraa hasilnyaa adalahhh = " +a+ "<br>";        
        };
        document.querySelector("#hasilFunction").innerHTML = textx;
    }
}
//2C
function forGanjil(){
    let input = prompt('nilai');
    check = parseInt(input);
    let textx= "";
    for (let a = 0; a <= check; a++) {
        if(a%2 != 0){
             console.log(a);
             textx +="Taraa hasilnyaa adalahhh = " +a+ "<br>";        
        };
        document.querySelector("#hasilFunction").innerHTML = textx;
    }
}
//2D
function primaGaya(){
    let input = prompt('nilai');
    check = parseInt(input);
    let textx= "";
    for(a=0; a <= check; a++){
    dibagi = 0;
    for(b=1; b <= a; b++) {
        if(a%b == 0){
            dibagi++;
        };
    };
    if (dibagi == 2){
        console.log(a);
        textx +="Taraa hasilnyaa adalahhh = " +a+ "<br>"; 
    };
        document.querySelector("#hasilFunction").innerHTML = textx;
    }
}
