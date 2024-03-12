const readLine = require('./src/utils/fileHandler')
const robotModel = require('./src/models/robotModel')

robotObj = new robotModel()
const data = readLine('./example.txt')
for( let i = 0; i < data.length; i++ ){
    if ( data[i].includes('PLACE') ){
        let inputs = data[i].replace('PLACE ','').split(',')
        robotObj.Place(parseInt(inputs[0]),parseInt(inputs[1]),inputs[2])
    }
    else if( data[i].includes('MOVE') ){ robotObj.Move() }
    else if( data[i].includes('RIGHT') ){ robotObj.Right() }
    else if( data[i].includes('LEFT') ){ robotObj.Left() }
    else if( data[i].includes('REPORT') ){ robotObj.Report() }
}