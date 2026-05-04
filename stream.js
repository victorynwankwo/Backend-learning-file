const fs = require("fs")
const path = require ("path")

const rs = fs.createReadStream(path.join(__dirname, "files", "lorem.txt"), {encoding : "utf8"})
// console.log(rs)
const ws = fs.createWriteStream(path.join(__dirname, "files", "new-lorem.txt"))
// console.log("File Size:", fs.statSync(path.join(__dirname, "files", "new-lorem.txt")).size, "bytes");



rs.on("data", (chunk)=>{
    console.log(`New chunk received${chunk.length} bytes`)  
    ws.write(chunk)
 })

// rs.pipe(ws)