var satuan = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan"]
var puluhan = ["", "se", "dua ", "tiga ", "empat ", "lima ", "enam ", "tujuh ", "delapan ", "sembilan ", 
"sepuluh", "sebelas", "dua belas", "tiga belas", "empat belas", "lima belas", "enam belas", "tujuh belas", "delapan belas", "sembilan belas"]
function ratusan(num, above){
    num = num.toString().split("").reverse().map((x) =>parseInt(x));
    let hasil = ""
    if(num.length==1 && above){
        hasil +=  `${puluhan[num.pop()]}`
    }
    if(num.length==3){
        hasil +=  `${puluhan[num.pop()]}ratus `
    }
    if(num.length==2){
        let check = num.pop()
        if(check == 1){
            check = check * 10 + num.pop()
            hasil +=  `${puluhan[check]} `
        }else{
            if(check){hasil +=  `${puluhan[check]}puluh `}
        }   
    }
    if(num.length==1){
        let check = num.pop()
        if(check){hasil +=  `${satuan[check]}`}
    }
    return hasil;
}
function num_to_str(num){
    num = num.toString().split("").reverse().join("");
    console.log(num, num.length)
    hasil = ""
    if(num.length > 12){
        let tem = parseInt(num.slice(12).split("").reverse().join(""))
        if(tem != 0){hasil += ratusan(tem, false) + " triliun "}
    }
    if(num.length > 9){
        let tem = parseInt(num.slice(9, 12).split("").reverse().join(""))
        if(tem != 0){hasil += ratusan(tem, false) + " miliar "}
    }
    if(num.length > 6){
        let tem = parseInt(num.slice(6, 9).split("").reverse().join(""))
        if(tem != 0){hasil += ratusan(tem, false) + " juta "}
    }
    if(num.length > 3){
        let tem = parseInt(num.slice(3, 6).split("").reverse().join(""))
        if(tem != 0){hasil += ratusan(tem, true) + "ribu "}
    }
    if(num.length > 0){
        let tem = parseInt(num.slice(0, 3).split("").reverse().join(""))
        if(tem != 0){hasil += ratusan(tem, false)}
    }
    return hasil
}
console.log(num_to_str(1001034))
