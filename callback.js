function learnJS(lang, callback){
    lang();
    callback();
}

function start(txt){
    txt = "Ruby";
    console.log("I learn " + txt);
}

function done(){
    console.log("I done three lesson");
}

learnJS(start, done);

function first(){
    setTimeout(function(){
        console.log("1");
    }, 500 );
}

function second(){
    console.log(2);
}

first();
second();