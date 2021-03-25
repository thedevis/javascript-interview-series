var printerConnection= (function(){
    let connection;
    function createConnection(){
        var object = new Object("I am instance");
        return object;
    }
    return{
        getInstance:function(){
            if(!connection)
                connection = createConnection();
            return connection;
        }
    }
})();
function run(){
    var printerConnection1 = printerConnection.getInstance();
    var printerConnection2 = printerConnection.getInstance();
    console.log(printerConnection1 === printerConnection2)
}

//Create redis connection in singleton manner

