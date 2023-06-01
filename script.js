let btn = document.getElementById('plans');
let btnb = document.getElementById('plansb');
let btnc = document.getElementById('plansc');
let btnd = document.getElementById('plansd');

let bill = document.getElementById('bill');
let billb = document.getElementById('billb');
let billc = document.getElementById('billc');
let billd = document.getElementById('billd');
let bille = document.getElementById('bille');
let billf = document.getElementById('billf');
let ons = document.getElementById('ons');
let onsb = document.getElementById('onsb');
let onsc = document.getElementById('onsc');
let onsd = document.getElementById('onsd');
let onse = document.getElementById('onse');
let onsf = document.getElementById('onsf');



let steps = document.getElementById('plans');
let button = document.getElementById('button');
let stepsb = document.getElementById('plansb');

let buttonb = document.getElementById('buttonb');
let buttonc = document.getElementById('buttonc')
let buttond = document.getElementById('buttond');
let previousb = document.getElementById('previousb');
let previousc = document.getElementById('previousc')
let stepsc = document.getElementById('plansc')
let stepsd = document.getElementById('plansd')



let previous = document.getElementById('previous')

let control = document.getElementById('control');

let change = document.getElementById('change');
let changeb = document.getElementById('changeb');
let changec = document.getElementById('changec');
let changed = document.getElementById('changed');
let changee = document.getElementById('changee');
let changef = document.getElementById('changef');


btn.addEventListener('click', () => {
    let number = document.getElementById('numbers');
    number.classList.remove('numbers');
    number.classList.add('clicked');

    let others = document.getElementById('numbersb')
    others.classList.remove('clicked')
    others.classList.add('numbers')

    let othersb = document.getElementById('numbersc')
    othersb.classList.remove('clicked')
    othersb.classList.add('numbers')

    let othersc = document.getElementById('numbersd')
    othersc.classList.remove('clicked')
    othersc.classList.add('numbers')
})

btnb.addEventListener('click', () => {
    let number = document.getElementById('numbersb');
    number.classList.remove('numbers');
    number.classList.add('clicked')

    let others = document.getElementById('numbers')
    others.classList.remove('clicked')
    others.classList.add('numbers')

    let othersb = document.getElementById('numbersc')
    othersb.classList.remove('clicked')
    othersb.classList.add('numbers')

    let othersc = document.getElementById('numbersd')
    othersc.classList.remove('clicked')
    othersc.classList.add('numbers')
})

btnc.addEventListener('click', () => {
    let number = document.getElementById('numbersc');
    number.classList.remove('numbers');
    number.classList.add('clicked');

    let others = document.getElementById('numbers')
    others.classList.remove('clicked')
    others.classList.add('numbers')

    let othersb = document.getElementById('numbersb')
    othersb.classList.remove('clicked')
    othersb.classList.add('numbers')

    let othersc = document.getElementById('numbersd')
    othersc.classList.remove('clicked')
    othersc.classList.add('numbers')
})

btnd.addEventListener('click', () => {
    let number = document.getElementById('numbersd');
    number.classList.remove('numbers');
    number.classList.add('clicked')

    let others = document.getElementById('numbers')
    others.classList.remove('clicked')
    others.classList.add('numbers')

    let othersb = document.getElementById('numbersb')
    othersb.classList.remove('clicked')
    othersb.classList.add('numbers')

    let othersc = document.getElementById('numbersc')
    othersc.classList.remove('clicked')
    othersc.classList.add('numbers')
})

bill.addEventListener('click', () => {
    let target = document.getElementById('bill');
    target.classList.add('bill');
    target.classList.remove('billings');

    let others = document.getElementById('billb');
    others.classList.remove('bill')
    others.classList.add('billings')

    let othersb = document.getElementById('billc');
    othersb.classList.remove('bill')
    othersb.classList.add('billings')

    let othersc = document.getElementById('billd');
    othersc.classList.remove('bill')
    othersc.classList.add('billings')

    let othersd = document.getElementById('bille');
    othersd.classList.remove('bill')
    othersd.classList.add('billings')

    let otherse = document.getElementById('billf');
    otherse.classList.remove('bill')
    otherse.classList.add('billings')



    let amonth = document.getElementById('amonth')
    amonth.classList.remove('hide')
    amonth.classList.add('rowb')

    let ayear = document.getElementById('ayear')
    ayear.classList.add('hide')
    ayear.classList.remove('rowb')

    let admonth = document.getElementById('admonth')
    admonth.classList.add('hide')
    admonth.classList.remove('rowb');

    let adyear = document.getElementById('adyear')
    adyear.classList.add('hide')
    adyear.classList.remove('rowb')

    let prmonth = document.getElementById('prmonth')
    prmonth.classList.add('hide')
    prmonth.classList.remove('rowb')

    let pryear = document.getElementById('pryear')
    pryear.classList.add('hide')
    pryear.classList.remove('rowb')
})

billb.addEventListener('click', () => {
    let target = document.getElementById('billb');
    target.classList.add('bill');
    target.classList.remove('billings')

    let others = document.getElementById('bill');
    others.classList.remove('bill')
    others.classList.add('billings')

    let othersb = document.getElementById('billc');
    othersb.classList.remove('bill')
    othersb.classList.add('billings')

    let othersc = document.getElementById('billd');
    othersc.classList.remove('bill')
    othersc.classList.add('billings')

    let othersd = document.getElementById('bille');
    othersd.classList.remove('bill')
    othersd.classList.add('billings')

    let otherse = document.getElementById('billf');
    otherse.classList.remove('bill')
    otherse.classList.add('billings')


    let admonth = document.getElementById('admonth')
    admonth.classList.remove('hide')
    admonth.classList.add('rowb')

    let amonth = document.getElementById('amonth')
    amonth.classList.add('hide')
    amonth.classList.remove('rowb')

    let ayear = document.getElementById('ayear')
    ayear.classList.add('hide')
    ayear.classList.remove('rowb');

    let adyear = document.getElementById('adyear')
    adyear.classList.add('hide')
    adyear.classList.remove('rowb')

    let prmonth = document.getElementById('prmonth')
    prmonth.classList.add('hide')
    prmonth.classList.remove('rowb')

    let pryear = document.getElementById('pryear')
    pryear.classList.add('hide')
    pryear.classList.remove('rowb')
})

billc.addEventListener('click', () => {
    let target = document.getElementById('billc');
    target.classList.add('bill');
    target.classList.remove('billings')

    let others = document.getElementById('bill');
    others.classList.remove('bill')
    others.classList.add('billings')

    let othersb = document.getElementById('billb');
    othersb.classList.remove('bill')
    othersb.classList.add('billings')

    let othersc = document.getElementById('billd');
    othersc.classList.remove('bill')
    othersc.classList.add('billings')

    let othersd = document.getElementById('bille');
    othersd.classList.remove('bill')
    othersd.classList.add('billings')

    let otherse = document.getElementById('billf');
    otherse.classList.remove('bill')
    otherse.classList.add('billings')

    let prmonth = document.getElementById('prmonth')
    prmonth.classList.remove('hide')
    prmonth.classList.add('rowb')

    let amonth = document.getElementById('amonth')
    amonth.classList.add('hide')
    amonth.classList.remove('rowb')

    let ayear = document.getElementById('ayear')
    ayear.classList.add('hide')
    ayear.classList.remove('rowb');

    let adyear = document.getElementById('adyear')
    adyear.classList.add('hide')
    adyear.classList.remove('rowb')

    let admonth = document.getElementById('admonth')
    admonth.classList.add('hide')
    admonth.classList.remove('rowb')


    let pryear = document.getElementById('pryear')
    pryear.classList.add('hide')
    pryear.classList.remove('rowb')
})



billd.addEventListener('click', () => {
    let target = document.getElementById('billd');
    target.classList.add('bill');
    target.classList.remove('billings')

    let others = document.getElementById('bille');
    others.classList.remove('bill')
    others.classList.add('billings')

    let othersb = document.getElementById('billf');
    othersb.classList.remove('bill')
    othersb.classList.add('billings')

    let othersc = document.getElementById('bill');
    othersc.classList.remove('bill')
    othersc.classList.add('billings')

    let othersd = document.getElementById('billb');
    othersd.classList.remove('bill')
    othersd.classList.add('billings')

    let otherse = document.getElementById('billc');
    otherse.classList.remove('bill')
    otherse.classList.add('billings')



    let ayear = document.getElementById('ayear')
    ayear.classList.remove('hide')
    ayear.classList.add('rowb')

    let amonth = document.getElementById('amonth')
    amonth.classList.add('hide')
    amonth.classList.remove('rowb')

    let admonth = document.getElementById('admonth')
    admonth.classList.add('hide')
    admonth.classList.remove('rowb');

    let adyear = document.getElementById('adyear')
    adyear.classList.add('hide')
    adyear.classList.remove('rowb')

    let prmonth = document.getElementById('prmonth')
    prmonth.classList.add('hide')
    prmonth.classList.remove('rowb')

    let pryear = document.getElementById('pryear')
    pryear.classList.add('hide')
    pryear.classList.remove('rowb')
})



bille.addEventListener('click', () => {
    let target = document.getElementById('bille');
    target.classList.add('bill');
    target.classList.remove('billings')

    let others = document.getElementById('billd');
    others.classList.remove('bill')
    others.classList.add('billings')

    let othersb = document.getElementById('billf');
    othersb.classList.remove('bill')
    othersb.classList.add('billings')


    let othersc = document.getElementById('bill');
    othersc.classList.remove('bill')
    othersc.classList.add('billings')

    let othersd = document.getElementById('billb');
    othersd.classList.remove('bill')
    othersd.classList.add('billings')

    let otherse = document.getElementById('billc');
    otherse.classList.remove('bill')
    otherse.classList.add('billings')


    let adyear = document.getElementById('adyear')
    adyear.classList.remove('hide')
    adyear.classList.add('rowb')

    let amonth = document.getElementById('amonth')
    amonth.classList.add('hide')
    amonth.classList.remove('rowb')

    let ayear = document.getElementById('ayear')
    ayear.classList.add('hide')
    ayear.classList.remove('rowb');


    let admonth = document.getElementById('admonth')
    admonth.classList.add('hide')
    admonth.classList.remove('rowb')

    let prmonth = document.getElementById('prmonth')
    prmonth.classList.add('hide')
    prmonth.classList.remove('rowb')

    let pryear = document.getElementById('pryear')
    pryear.classList.add('hide')
    pryear.classList.remove('rowb')
})



billf.addEventListener('click', () => {
    let target = document.getElementById('billf');
    target.classList.add('bill');
    target.classList.remove('billings')

    let others = document.getElementById('billd');
    others.classList.remove('bill')
    others.classList.add('billings')

    let othersb = document.getElementById('bille');
    othersb.classList.remove('bill')
    othersb.classList.add('billings')

    let othersc = document.getElementById('bill');
    othersc.classList.remove('bill')
    othersc.classList.add('billings')

    let othersd = document.getElementById('billb');
    othersd.classList.remove('bill')
    othersd.classList.add('billings')

    let otherse = document.getElementById('billc');
    otherse.classList.remove('bill')
    otherse.classList.add('billings')


    let pryear = document.getElementById('pryear')
    pryear.classList.remove('hide')
    pryear.classList.add('rowb')

    let amonth = document.getElementById('amonth')
    amonth.classList.add('hide')
    amonth.classList.remove('rowb')

    let ayear = document.getElementById('ayear')
    ayear.classList.add('hide')
    ayear.classList.remove('rowb');


    let admonth = document.getElementById('admonth')
    admonth.classList.add('hide')
    admonth.classList.remove('rowb')

    let prmonth = document.getElementById('prmonth')
    prmonth.classList.add('hide')
    prmonth.classList.remove('rowb')

    let adyear = document.getElementById('adyear')
    adyear.classList.add('hide')
    adyear.classList.remove('rowb')

})


ons.addEventListener('click', () => {
    ons.classList.toggle('cols');
    ons.classList.toggle('colsb');

    let others = document.getElementById('onsd');
    others.classList.remove('colsb')
    others.classList.add('cols')

    let othersb = document.getElementById('onse');
    othersb.classList.remove('colsb')
    othersb.classList.add('cols')

    let othersc = document.getElementById('onsf');
    othersc.classList.remove('colsb')
    othersc.classList.add('cols')

    let serve = document.getElementById('serve');
    serve.classList.toggle('rowb');
    serve.classList.toggle('hide');


    let serveb = document.getElementById('served')
    serveb.classList.add('hide')
    serveb.classList.remove('rowb')

    let servec = document.getElementById('servee')
    servec.classList.add('hide')
    servec.classList.remove('rowb')

    let served = document.getElementById('servef')
    served.classList.add('hide')
    served.classList.remove('rowb')

    let img = document.getElementById('imga')
    img.classList.toggle('blue')
    img.classList.toggle('imgcheck')
})

onsb.addEventListener('click', () => {
    onsb.classList.toggle('cols');
    onsb.classList.toggle('colsb')

    let others = document.getElementById('onsd');
    others.classList.remove('colsb')
    others.classList.add('cols')

    let othersb = document.getElementById('onse');
    othersb.classList.remove('colsb')
    othersb.classList.add('cols')

    let othersc = document.getElementById('onsf');
    othersc.classList.remove('colsb')
    othersc.classList.add('cols')

    let serve = document.getElementById('serveb');
    serve.classList.toggle('rowb');
    serve.classList.toggle('hide');

    let serveb = document.getElementById('served')
    serveb.classList.add('hide')
    serveb.classList.remove('rowb')

    let servec = document.getElementById('servee')
    servec.classList.add('hide')
    servec.classList.remove('rowb')

    let served = document.getElementById('servef')
    served.classList.add('hide')
    served.classList.remove('rowb')

    let img = document.getElementById('imgb')
    img.classList.toggle('blue')
    img.classList.toggle('imgcheck')
})

onsc.addEventListener('click', () => {
    onsc.classList.toggle('cols');
    onsc.classList.toggle('colsb')

    let others = document.getElementById('onsd');
    others.classList.remove('colsb')
    others.classList.add('cols')

    let othersb = document.getElementById('onse');
    othersb.classList.remove('colsb')
    othersb.classList.add('cols')

    let othersc = document.getElementById('onsf');
    othersc.classList.remove('colsb')
    othersc.classList.add('cols')

    let serve = document.getElementById('servec');
    serve.classList.toggle('rowb');
    serve.classList.toggle('hide');

    let serveb = document.getElementById('served')
    serveb.classList.add('hide')
    serveb.classList.remove('rowb')

    let servec = document.getElementById('servee')
    servec.classList.add('hide')
    servec.classList.remove('rowb')

    let served = document.getElementById('servef')
    served.classList.add('hide')
    served.classList.remove('rowb')

    let img = document.getElementById('imgc')
    img.classList.toggle('blue')
    img.classList.toggle('imgcheck')
})

onsd.addEventListener('click', () => {
    onsd.classList.toggle('cols');
    onsd.classList.toggle('colsb')

    let others = document.getElementById('ons');
    others.classList.remove('colsb')
    others.classList.add('cols')

    let othersb = document.getElementById('onsb');
    othersb.classList.remove('colsb')
    othersb.classList.add('cols')

    let othersc = document.getElementById('onsc');
    othersc.classList.remove('colsb')
    othersc.classList.add('cols')

    let serve = document.getElementById('served');
    serve.classList.toggle('rowb');
    serve.classList.toggle('hide');

    let serveb = document.getElementById('serve')
    serveb.classList.add('hide')
    serveb.classList.remove('rowb')

    let servec = document.getElementById('serveb')
    servec.classList.add('hide')
    servec.classList.remove('rowb')

    let served = document.getElementById('servec')
    served.classList.add('hide')
    served.classList.remove('rowb')

    let img = document.getElementById('imgd')
    img.classList.toggle('blue')
    img.classList.toggle('imgcheck')
})

onse.addEventListener('click', () => {
    onse.classList.toggle('cols');
    onse.classList.toggle('colsb')

    let others = document.getElementById('ons');
    others.classList.remove('colsb')
    others.classList.add('cols')

    let othersb = document.getElementById('onsb');
    othersb.classList.remove('colsb')
    othersb.classList.add('cols')

    let othersc = document.getElementById('onsc');
    othersc.classList.remove('colsb')
    othersc.classList.add('cols')

    let serve = document.getElementById('servee');
    serve.classList.toggle('rowb');
    serve.classList.toggle('hide');

    let serveb = document.getElementById('serve')
    serveb.classList.add('hide')
    serveb.classList.remove('rowb')

    let servec = document.getElementById('serveb')
    servec.classList.add('hide')
    servec.classList.remove('rowb')

    let served = document.getElementById('servec')
    served.classList.add('hide')
    served.classList.remove('rowb')

    let img = document.getElementById('imge')
    img.classList.toggle('blue')
    img.classList.toggle('imgcheck')
})

onsf.addEventListener('click', () => {
    onsf.classList.toggle('cols');
    onsf.classList.toggle('colsb')

    let others = document.getElementById('ons');
    others.classList.remove('colsb')
    others.classList.add('cols')

    let othersb = document.getElementById('onsb');
    othersb.classList.remove('colsb')
    othersb.classList.add('cols')

    let othersc = document.getElementById('onsc');
    othersc.classList.remove('colsb')
    othersc.classList.add('cols')

    let serve = document.getElementById('servef');
    serve.classList.toggle('rowb');
    serve.classList.toggle('hide');

    let serveb = document.getElementById('serve')
    serveb.classList.add('hide')
    serveb.classList.remove('rowb')

    let servec = document.getElementById('serveb')
    servec.classList.add('hide')
    servec.classList.remove('rowb')

    let served = document.getElementById('servec')
    served.classList.add('hide')
    served.classList.remove('rowb')

    let img = document.getElementById('imgf')
    img.classList.toggle('blue')
    img.classList.toggle('imgcheck')
})

button.addEventListener('click', () => {
    let current = document.getElementById('first')
    current.classList.add('hide')
    let next = document.getElementById('second');
    next.classList.remove('hide')

    let number = document.getElementById('numbers');
    number.classList.remove('clicked');
    number.classList.add('numbers');
    let second = document.getElementById('numbersb')
    second.classList.remove('numbers')
    second.classList.add('clicked')
})

buttonb.addEventListener('click', () => {
    let current = document.getElementById('second')
    current.classList.add('hide')
    let next = document.getElementById('third');
    next.classList.remove('hide')

    let number = document.getElementById('numbersb');
    number.classList.remove('clicked');
    number.classList.add('numbers');
    let second = document.getElementById('numbersc')
    second.classList.remove('numbers')
    second.classList.add('clicked')
})

buttonc.addEventListener('click', () => {
    let current = document.getElementById('third')
    current.classList.add('hide')
    let next = document.getElementById('fourth');
    next.classList.remove('hide')

    let number = document.getElementById('numbersc');
    number.classList.remove('clicked');
    number.classList.add('numbers');
    let second = document.getElementById('numbersd')
    second.classList.remove('numbers')
    second.classList.add('clicked')
})



buttond.addEventListener('click', () => {
    let current = document.getElementById('fourth')
    current.classList.add('hide')
    let next = document.getElementById('last');
    next.classList.remove('hide')
})




stepsb.addEventListener('click', () => {
    let current = document.getElementById('first')
    current.classList.add('hide')
    let next = document.getElementById('second');
    next.classList.remove('hide')

    let number = document.getElementById('numbers');
    number.classList.remove('clicked');
    number.classList.add('numbers');
    let second = document.getElementById('numbersb')
    second.classList.remove('numbers')
    second.classList.add('clicked')



    let others = document.getElementById('third');
    others.classList.add('hide')
    let third = document.getElementById('numbersc');
    third.classList.remove('clicked')
    third.classList.add('numbers')

    let othersb = document.getElementById('fourth');
    othersb.classList.add('hide')
    let fourth = document.getElementById('numbersd');
    fourth.classList.remove('clicked')
    fourth.classList.add('numbers')

    let last = document.getElementById('last');
    last.classList.add('hide')
})


stepsc.addEventListener('click', () => {
    let current = document.getElementById('second')
    current.classList.add('hide')
    let next = document.getElementById('third');
    next.classList.remove('hide')

    let number = document.getElementById('numbersb');
    number.classList.remove('clicked');
    number.classList.add('numbers');
    let second = document.getElementById('numbersc')
    second.classList.remove('numbers')
    second.classList.add('clicked')


    let others = document.getElementById('first');
    others.classList.add('hide')
    let first = document.getElementById('numbers');
    first.classList.remove('clicked')
    first.classList.add('numbers')

    let othersb = document.getElementById('fourth');
    othersb.classList.add('hide')
    let fourth = document.getElementById('numbersd');
    fourth.classList.remove('clicked')
    fourth.classList.add('numbers')

    let last = document.getElementById('last');
    last.classList.add('hide')
})


steps.addEventListener('click', () => {
    let current = document.getElementById('second')
    current.classList.add('hide')
    let next = document.getElementById('first');
    next.classList.remove('hide')

    let number = document.getElementById('numbersb');
    number.classList.remove('clicked');
    number.classList.add('numbers');
    let second = document.getElementById('numbers')
    second.classList.remove('numbers')
    second.classList.add('clicked')


    let others = document.getElementById('third');
    others.classList.add('hide')
    let first = document.getElementById('numbersc');
    first.classList.remove('clicked')
    first.classList.add('numbers')

    let othersb = document.getElementById('fourth');
    othersb.classList.add('hide')
    let fourth = document.getElementById('numbersd');
    fourth.classList.remove('clicked')
    fourth.classList.add('numbers')

    let last = document.getElementById('last');
    last.classList.add('hide')
})


stepsd.addEventListener('click', () => {
    let current = document.getElementById('first')
    current.classList.add('hide')
    let next = document.getElementById('fourth');
    next.classList.remove('hide')

    let number = document.getElementById('numbers');
    number.classList.remove('clicked');
    number.classList.add('numbers');
    let second = document.getElementById('numbersd')
    second.classList.remove('numbers')
    second.classList.add('clicked')



    let others = document.getElementById('third');
    others.classList.add('hide')
    let third = document.getElementById('numbersc');
    third.classList.remove('clicked')
    third.classList.add('numbers')

    let othersb = document.getElementById('second');
    othersb.classList.add('hide')
    let fourth = document.getElementById('numbersb');
    fourth.classList.remove('clicked')
    fourth.classList.add('numbers')

    let last = document.getElementById('last');
    last.classList.add('hide')
})

previous.addEventListener('click', () => {
    let current = document.getElementById('second')
    current.classList.add('hide')
    let next = document.getElementById('first');
    next.classList.remove('hide')

    let second = document.getElementById('numbersb');
    second.classList.remove('clicked');
    second.classList.add('numbers');
    let number = document.getElementById('numbers')
    number.classList.remove('numbers')
    number.classList.add('clicked')
})

previousb.addEventListener('click', () => {
    let current = document.getElementById('third')
    current.classList.add('hide')
    let next = document.getElementById('second');
    next.classList.remove('hide')

    let second = document.getElementById('numbersc');
    second.classList.remove('clicked');
    second.classList.add('numbers');
    let number = document.getElementById('numbersb')
    number.classList.remove('numbers')
    number.classList.add('clicked')
})

previousc.addEventListener('click', () => {
    let current = document.getElementById('fourth')
    current.classList.add('hide')
    let next = document.getElementById('third');
    next.classList.remove('hide')

    let second = document.getElementById('numbersd');
    second.classList.remove('clicked');
    second.classList.add('numbers');
    let number = document.getElementById('numbersc')
    number.classList.remove('numbers')
    number.classList.add('clicked')
})



toggle.addEventListener('input', e => {
    const isChecked = e.target.checked;

    if (isChecked) {
        let monthly = document.getElementById('monthly');
        let yearly = document.getElementById('yearly');
        monthly.classList.add('rowhide')
        yearly.classList.add('row')
        monthly.classList.remove('row')
        yearly.classList.remove('rowhide')

        let add = document.getElementById('add')
        add.classList.add('hide');
        add.classList.remove('column')
        let addb = document.getElementById('addb')
        addb.classList.remove('hide')
        addb.classList.add('column')

    }
    else {
        let monthly = document.getElementById('monthly');
        let yearly = document.getElementById('yearly');
        monthly.classList.remove('rowhide')
        monthly.classList.add('row')
        yearly.classList.add('rowhide')
        yearly.classList.remove('row')



        let add = document.getElementById('add')
        add.classList.remove('hide');
        add.classList.add('column')
        let addb = document.getElementById('addb')
        addb.classList.add('hide')
        addb.classList.remove('column')
    }
})

change.addEventListener('click', () => {
    let current = document.getElementById('fourth')
    current.classList.add('hide')
    let next = document.getElementById('second');
    next.classList.remove('hide')

    let number = document.getElementById('numbersd');
    number.classList.remove('clicked');
    number.classList.add('numbers');
    let second = document.getElementById('numbersb')
    second.classList.remove('numbers')
    second.classList.add('clicked')
})

changeb.addEventListener('click', () => {
    let current = document.getElementById('fourth')
    current.classList.add('hide')
    let next = document.getElementById('second');
    next.classList.remove('hide')

    let number = document.getElementById('numbersd');
    number.classList.remove('clicked');
    number.classList.add('numbers');
    let second = document.getElementById('numbersb')
    second.classList.remove('numbers')
    second.classList.add('clicked')
})

changec.addEventListener('click', () => {
    let current = document.getElementById('fourth')
    current.classList.add('hide')
    let next = document.getElementById('second');
    next.classList.remove('hide')

    let number = document.getElementById('numbersd');
    number.classList.remove('clicked');
    number.classList.add('numbers');
    let second = document.getElementById('numbersb')
    second.classList.remove('numbers')
    second.classList.add('clicked')
})

changed.addEventListener('click', () => {
    let current = document.getElementById('fourth')
    current.classList.add('hide')
    let next = document.getElementById('second');
    next.classList.remove('hide')

    let number = document.getElementById('numbersd');
    number.classList.remove('clicked');
    number.classList.add('numbers');
    let second = document.getElementById('numbersb')
    second.classList.remove('numbers')
    second.classList.add('clicked')
})


changee.addEventListener('click', () => {
    let current = document.getElementById('fourth')
    current.classList.add('hide')
    let next = document.getElementById('second');
    next.classList.remove('hide')

    let number = document.getElementById('numbersd');
    number.classList.remove('clicked');
    number.classList.add('numbers');
    let second = document.getElementById('numbersb')
    second.classList.remove('numbers')
    second.classList.add('clicked')
})

changef.addEventListener('click', () => {
    let current = document.getElementById('fourth')
    current.classList.add('hide')
    let next = document.getElementById('second');
    next.classList.remove('hide')

    let number = document.getElementById('numbersd');
    number.classList.remove('clicked');
    number.classList.add('numbers');
    let second = document.getElementById('numbersb')
    second.classList.remove('numbers')
    second.classList.add('clicked')
})