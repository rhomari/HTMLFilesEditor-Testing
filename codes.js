let myfile
let savedfile
async function  openFile(){
    
    [myfile] = await window.showOpenFilePicker()
    if (!myfile){
        return
    }
    document.getElementById('filenamespan').innerText = myfile.name
    const filecontent= await myfile.getFile()
    
    document.getElementById('content').value=  await filecontent.text()
        


}
async function saveFile(){
    savedfile = await window.showSaveFilePicker()
    if(!savedfile){
        alert('aye')
        return
    }
    const writer = await savedfile.createWritable()
    
    await writer.write(document.getElementById('content').value)
   
    await writer.close()



}