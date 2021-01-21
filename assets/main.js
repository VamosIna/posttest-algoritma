//PROMPT



// const alas = prompt('Masukkan alas ');
// const tinggi = prompt('Masukkan tinggi segitiga');
// const luas = 0.5 * parseInt(alas) * parseInt(tinggi);
// console.log(luas);

function inputJeje() {
    let jariJari = prompt("Masukan jari-jari")
    let phi = 3.14
    
    document.querySelector("#hasilLingkaran").innerHTML =
    "hasilnya " + phi * jariJari * jariJari;
}

function inputSegi(){
    const alas = prompt('Masukkan alas ');
    const tinggi = prompt('Masukkan tinggi segitiga');
    const hasil = 0.5 * alas * tinggi;
    document.querySelector("#hasilSegi").innerHTML =
    "hasilnya " + hasil;
}


let pamungkasAlbum = {
    namalengkap :"Rizky Rahmahadian Pamungkas",
    namaalbum : "Solipsism 2.0",
    tahun :"2020",
    tersedia :"deezer,yutub",
    label :" 26 juni 2020"
}; 
console.log(pamungkasAlbum)

const Solipsism = [

    "Queen of the Hearts",
    "Intentions",
    "Be okay Again Today",
    "Be my friend",
    "deeper"
]
Solipsism.forEach(function(lagu){
    console.log(lagu)
})

