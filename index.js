let str  =  'aaa@bbb@ccc'  
console.log(
str.replace('@',  '!').replace('@' , '!')
)
let rts = "HELLOWORLD"
console.log(
rts.slice(rts.search('H'),rts.search('H') + 1) + 
rts.slice(rts.search('ELLO'),rts.search('ELLO') + 4).toLowerCase() + " " +
rts.slice(rts.search('WORLD'), rts.search('WORLD') + 5).toLowerCase()
)
let trs = "Hello it is HTML"
console.log(
    trs.replace('HTML', 'not JS')
)
let srt = "alex"
console.log(
    srt.slice (srt.search('a'), srt.search('a') + 1).toUpperCase() +
    srt.slice(srt.search('lex'), srt.search('lex') + 3)
)