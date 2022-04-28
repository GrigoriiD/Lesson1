var btn = document.querySelectorAll('button')
var braket = document.getElementById('braket')
var title = document.querySelectorAll('h2')
var prise = document.querySelectorAll('span')
var kilk1 = 0
var kilk2 = 0
var kilk3 = 0
var h1,h2,h3, a
var genPrise = document.createElement('h2')
genPrise.className = 'gen-prise'
braket.appendChild(genPrise)
function brack(e) {
    a =e.target 
    a = a.className
    a = a.split('_')
    a = a[1]
    if (a == 0) {
        if (kilk1 == 0) {
            kilk1++
            h1 = document.createElement('h3')
            h1.className = 'tovar'
            braket.appendChild(h1)
            h1.textContent =('Назва пристрою '+(title[a].textContent)+' Ціна '+(prise[a].textContent)+'    Кількість товару: '+kilk1)
        }
        else{
            kilk1++
            h1.textContent =('Назва пристрою '+(title[a].textContent)+' Ціна '+(prise[a].textContent)+'    Кількість товару: '+kilk1)
            
        }
    }
    if (a == 1) {
        if (kilk2 == 0) {
            kilk2++
            h2 = document.createElement('h3')
            h2.className = 'tovar'
            braket.appendChild(h2)
            h2.textContent =('Назва пристрою '+(title[a].textContent)+' Ціна '+(prise[a].textContent)+'    Кількість товару: '+kilk2)
        }
        else{
            kilk2++
            h2.textContent =('Назва пристрою '+(title[a].textContent)+' Ціна '+(prise[a].textContent)+'    Кількість товару: '+kilk2)    
        }
    }
    if (a == 2) {
        if (kilk3 == 0) {
            kilk3++
            h3 = document.createElement('h3')
            h3.className = 'tovar'
            braket.appendChild(h3)
            h3.textContent =('Назва пристрою '+(title[a].textContent)+' Ціна '+(prise[a].textContent)+'    Кількість товару: '+kilk3)
            }
        else{
            kilk3++
            h3.textContent =('Назва пристрою '+(title[a].textContent)+' Ціна '+(prise[a].textContent)+'    Кількість товару: '+kilk3)   
            }
    }
    var b = (kilk1 * 12000)+(kilk2 * 32000)+(kilk3 * 10000)
    genPrise.textContent = 'Загальна ціна кошика : '+b
}
for (const item of btn) {
    item.onclick = brack
}
////
let abr = 'John';
let greet = `Hell0 ${abr.toUpperCase()} .` 
console.log(greet);