function timestamp()
{
    var currDate = new Date();      
    var fileYear = currDate.getFullYear();
    var fileMonth = ("0" + (currDate.getMonth() + 1)).slice(-2);
    var fileDay = ("0" + currDate.getDate()).slice(-2);
    var fileHour = ("0" + currDate.getHours()).slice(-2);
    var fileMins = ("0" + currDate.getMinutes()).slice(-2);
    var fileSecs = ("0" + currDate.getSeconds()).slice(-2);
    var timeStamp = fileYear + fileMonth + fileDay + "_" + fileHour + fileMins + fileSecs;
    return timeStamp;
}
