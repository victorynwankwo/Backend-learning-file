const fsPromises = require("fs").promises
const path = require("path")

const fileOps = async () =>{
    try{
    
     const data = await fsPromises.readFile(path.join(__dirname, "files", "starter.txt"),"utf8")
     console.log(data)
      await fsPromises.writeFile(path.join(__dirname, "files", "promise.txt"),data)
      await fsPromises.unlink(path.join(__dirname, "files", "test.txt"))
      await fsPromises.appendFile(path.join(__dirname, "files", "promise.txt"), `\n\nNice to meet you`)
      await fsPromises.rename(path.join(__dirname, "files", "promise.txt"), path.join(__dirname, "files", "vortex.txt"), )
     console.log(data)
    }
    catch(error){
      console.log(error)
    }
}
fileOps()


// fs.readFile(path.join(__dirname, "files", "starter.txt"),"utf8", (err, data)=>{
    // if(err) throw err
    // console.log(data)
// })
// 
// fs.writeFile(path.join(__dirname, "files", "reply.txt"),"Nice to meet you", (err)=>{
    // if(err) throw err
    // console.log("write complete")
// 
    //   fs.appendFile(path.join(__dirname, "files", "reply.txt"),"Good and you", (err)=>{
    //   if(err) throw err
    //   console.log("write complete done")
// 
// 
    //   fs.rename(path.join(__dirname, "files", "reply.txt"),path.join(__dirname, "files", "Newreply.txt"), (err)=>{
    //   if(err) throw err
    //   console.log("Rename complete")
//    })
// 
// 
//    })
// 
// })









process.on("uncaughtException", err =>{
    console.error(`There was an uncaught error: ${err}`)
    process.exit(1)
})