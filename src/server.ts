
import app from "./app"
import config from "./config"

async function main(){
    try{
        app.listen(config.port, ()=>{
            console.log(`server is running on port ${config.port}`)
        })
    }
    catch{
        console.log("server Connection failed")
    }
}
main()