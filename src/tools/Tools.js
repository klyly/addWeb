const Tools = {
    exportJson(name,data){
        var blob = new Blob([data]);
        var link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = name;
        link.click();
    }
}
export default Tools;