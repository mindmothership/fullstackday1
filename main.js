/**
 * Created by WWCD on 27/6/16.
 */

//Load Express
var express = require("express");

//Create an instance of express application
var app = express();

var pValue=3000;
var dValue= __dirname + "/public";
var vValue = 1.0;
var i=2;
// while(process.argv[i]!=undefined)
// {
//     if (process.argv[i] == "-p")
//     {
//         pValue = process.argv[i+1];
//     }
//     else if (process.argv[i] == "-d")
//     {
//         dValue = process.argv[i+1];
//     }
//     else if (process.argv[i] == "-v")
//     {
//         // assign current version to vValue;
//         vValue = version;
//     }
//     i++;
// }

while(i< process.argv.length )
{
    switch (process.argv[i])
    {
        case "-v":
            break;
        case "-p":
            i = i+1;
            pValue = process.argv[i];
            break;
        case "-d":
            i = i+1;
            dValue = process.argv[i];
            break;
        
        default:
            
    }
    i++;
}

app.use(express.static(dValue)  );
// app.use(express.static(__dirname + "/public"));
// console.log("hello __dirname: %s", __dirname );

app.set("port", pValue);

//start the server on port
app.listen(
    app.get("port"),
    function(){
        console.info("application started on port %d", app.get("port"));
    }
)




