import fs from 'fs';

function readConfigFile(fileName,callback){
    fs.readFile(fileName,'utf8',(err,data)=>{
        if(err){
            if(err.code==='ENOENT'){
                return callback(new Error(`config file ${fileName} not found`));
            }else if(err.code==='EACCES'){
                return callback(new Error(`No permission to read ${fileName}`));
            }
            return callback(err);

        }
        try{
            const config= JSON.parse(data);
            callback(null,config);
        }catch(parseError){
            callback(new Error (`Invalid JSON in ${fileName}`));
        }
    });
}

readConfigFile('config.json',(err,config)=>{
    if(err){
        console.error('Error to read config file:',err.message);
        return;
    }
    console.log('Config loaded successfully:',config);
})