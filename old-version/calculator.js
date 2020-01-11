/*
    Time-to-Pages Calculator
*/

var prevListenedSeconds,
    prevListenedMinutes,
    prevListenedHours,
    prevTotalSeconds,
    prevTotalMinutes,
    prevTotalHours,
    prevIntroSeconds,
    prevIntroMinutes,
    prevOutroSeconds,
    prevOutroMinutes;
var prevReadPages,
    prevTotalPages,
    prevPageStart;

function GetListenedSeconds () {
    var hours = parseInt(document.getElementById("listenedHours").value);
    var minutes = parseInt(document.getElementById("listenedMins").value);
    var seconds = parseInt(document.getElementById("listenedSecs").value);
    
    var introMinutes = parseInt(document.getElementById("introMins").value);
    var introSeconds = parseInt(document.getElementById("introSecs").value);
    
    var time = (((hours * 60) + minutes) * 60) + seconds;
    
    if (introMinutes > 0) {
        time -= introMinutes * 60;
    }
    if (introSeconds > 0) {
        time -= introSeconds;
    }
    
    return time;
}

function GetTotalSeconds () {
    var hours = parseInt(document.getElementById("totalHours").value);
    var minutes = parseInt(document.getElementById("totalMins").value);
    var seconds = parseInt(document.getElementById("totalSecs").value);
    
    var outroMinutes = parseInt(document.getElementById("outroMins").value);
    var outroSeconds = parseInt(document.getElementById("outroSecs").value);
    var introMinutes = parseInt(document.getElementById("introMins").value);
    var introSeconds = parseInt(document.getElementById("introSecs").value);
    
    var time = (((hours * 60) + minutes) * 60) + seconds;
    
    if (outroMinutes > 0) {
        time -= (outroMinutes * 60) + (introMinutes * 60);
    }
    if (outroSeconds > 0) {
        time -= outroSeconds + introSeconds;
    }
    
    return time;
}

function UpdateCurrentPage () {
    var totalPages = parseInt(document.getElementById("totalPages").value);
    var fraction = GetListenedSeconds() / GetTotalSeconds();
    
    var pageStart = parseInt(document.getElementById("pageStart").value);
    prevPageStart = pageStart;
    
    var pagesRead = ((totalPages * fraction) + ((pageStart > 1)?(pageStart):0)).toFixed(2);
    
    if (pagesRead < pageStart) {
        pagesRead = pageStart;
    }
    
    prevReadPages = pagesRead.toString();
    
    document.getElementById("readPages").value = prevReadPages;
}

function UpdateCurrentTime () {
    var pageStart = parseInt(document.getElementById("pageStart").value);
    var readPages = parseFloat(document.getElementById("readPages").value) - pageStart;
    var totalPages = parseInt(document.getElementById("totalPages").value) - pageStart;
    
    var fraction = readPages / totalPages;
    
    var listenedSeconds = GetTotalSeconds() * fraction;
    
    var introMinutes = parseInt(document.getElementById("introMins").value);
    var introSeconds = parseInt(document.getElementById("introSecs").value);
    
    if (introMinutes > 0) {
        listenedSeconds += introMinutes * 60;
    }
    if (introSeconds > 0) {
        listenedSeconds += introSeconds;
    }
    
    var hours = Math.floor(listenedSeconds / 3600);
    var minutes = Math.floor((listenedSeconds - (hours * 3600)) / 60);
    var seconds = Math.floor(listenedSeconds - ((hours * 3600) + (minutes * 60)));
    
    document.getElementById("listenedHours").value = hours.toString();
    document.getElementById("listenedMins").value = minutes.toString();
    document.getElementById("listenedSecs").value = seconds.toString();
    
    prevListenedSeconds = seconds.toString();
    prevListenedMinutes = minutes.toString();
    prevListenedHours = hours.toString();
}

window.CheckInput = function ()
{
    var updatePages = false;
    var updateTime = false;
    
    var currentListenedHours = document.getElementById("listenedHours").value;
    var currentListenedMinutes = document.getElementById("listenedMins").value;
    var currentListenedSeconds = document.getElementById("listenedSecs").value;
    var currentTotalHours = document.getElementById("totalHours").value;
    var currentTotalMinutes = document.getElementById("totalMins").value;
    var currentTotalSeconds = document.getElementById("totalSecs").value;
    var currentReadPages = document.getElementById("readPages").value;
    var currentTotalPages = document.getElementById("totalPages").value;
    var currentIntroMinutes = document.getElementById("introMins").value;
    var currentIntroSeconds = document.getElementById("introSecs").value;
    var currentOutroMinutes = document.getElementById("outroMins").value;
    var currentOutroSeconds = document.getElementById("outroSecs").value;
    var currentPageStart = document.getElementById("pageStart").value;
    
    // If a number is not entered, change it to 0
    if (!isInt(currentListenedHours)) {
        document.getElementById("listenedHours").value = "0";
        currentListenedHours = document.getElementById("listenedHours").value;
    }
    if (!isInt(currentListenedMinutes)) {
        document.getElementById("listenedMins").value = "0";
        currentListenedMinutes = document.getElementById("listenedMins").value;
    }
    if (!isInt(currentListenedSeconds)) {
        document.getElementById("listenedSecs").value = "0";
        currentListenedSeconds = document.getElementById("listenedSecs").value;
    }
    if (!isInt(currentTotalHours)) {
        document.getElementById("totalHours").value = "0";
        currentTotalHours = document.getElementById("totalHours").value;
    }
    if (!isInt(currentTotalMinutes)) {
        document.getElementById("totalMins").value = "0";
        currentTotalMinutes = document.getElementById("totalMins").value;
    }
    if (!isInt(currentTotalSeconds)) {
        document.getElementById("totalSecs").value = "0";
        currentTotalSeconds = document.getElementById("totalSecs").value;
    }
    if (!isInt(currentReadPages)) {
        document.getElementById("readPages").value = "0";
        currentReadPages = document.getElementById("readPages").value;
    }
    if (!isInt(currentTotalPages)) {
        document.getElementById("totalPages").value = "0";
        currentTotalPages = document.getElementById("totalPages").value;
    }
    if (!isInt(currentIntroMinutes)) {
        document.getElementById("introMins").value = "0";
        currentTotalMinutes = document.getElementById("introMins").value;
    }
    if (!isInt(currentIntroSeconds)) {
        document.getElementById("introSecs").value = "0";
        currentTotalSeconds = document.getElementById("introSecs").value;
    }
    if (!isInt(currentOutroMinutes)) {
        document.getElementById("outroMins").value = "0";
        currentTotalMinutes = document.getElementById("outroMins").value;
    }
    if (!isInt(currentOutroSeconds)) {
        document.getElementById("outroSecs").value = "0";
        currentTotalSeconds = document.getElementById("outroSecs").value;
    }
    if (!isInt(currentPageStart)) {
        document.getElementById("pageStart").value = "0";
        currentPageStart = document.getElementById("pageStart").value;
    }
    
    // If values are below values that can only be smaller, adjust
    if (parseFloat(currentReadPages) < parseFloat(currentPageStart)) {
        currentReadPages = currentPageStart;
        document.getElementById("readPages").value = currentReadPages;
    }
    if (parseFloat(currentTotalPages) < parseFloat(currentReadPages)) {
        currentTotalPages = currentReadPages;
        document.getElementById("totalPages").value = currentTotalPages;
    }
    
    // If more than 60 is entered for seconds or minutes, carry it over.
    if (parseInt(currentListenedSeconds) >= 60) {
        document.getElementById("listenedMins").value = (parseInt(currentListenedMinutes) + Math.floor(currentListenedSeconds / 60)).toString();
        currentListenedMinutes = document.getElementById("listenedMins").value;
        document.getElementById("listenedSecs").value = (parseInt(currentListenedSeconds) % 60).toString();
        currentListenedSeconds = document.getElementById("listenedSecs").value;
    }
    if (parseInt(currentListenedMinutes) >= 60) {
        document.getElementById("listenedHours").value = (parseInt(currentListenedHours) + Math.floor(currentListenedMinutes / 60)).toString();
        currentListenedHours = document.getElementById("listenedHours").value;
        document.getElementById("listenedMins").value = (parseInt(currentListenedMinutes) % 60).toString();
        currentListenedMinutes = document.getElementById("listenedMins").value;
    }
    if (parseInt(currentTotalSeconds) >= 60) {
        document.getElementById("totalMins").value = (parseInt(currentTotalMinutes) + Math.floor(currentTotalSeconds / 60)).toString();
        currentTotalMinutes = document.getElementById("totalMins").value;
        document.getElementById("totalSecs").value = (parseInt(currentTotalSeconds) % 60).toString();
        currentTotalSeconds = document.getElementById("totalSecs").value;
    }
    if (parseInt(currentTotalMinutes) >= 60) {
        document.getElementById("totalHours").value = (parseInt(currentTotalHours) + Math.floor(currentTotalMinutes / 60)).toString();
        currentTotalHours = document.getElementById("totalHours").value;
        document.getElementById("totalMins").value = (parseInt(currentTotalMinutes) % 60).toString();
        currentTotalMinutes = document.getElementById("totalMins").value;
    }
    if (parseInt(currentIntroSeconds) >= 60) {
        document.getElementById("introMins").value = (parseInt(currentIntroMinutes) + Math.floor(currentIntroSeconds / 60)).toString();
        currentIntroMinutes = document.getElementById("introMins").value;
        document.getElementById("introSecs").value = (parseInt(currentIntroSeconds) % 60).toString();
        currentIntroSeconds = document.getElementById("introSecs").value;
    }
    if (parseInt(currentOutroSeconds) >= 60) {
        document.getElementById("outroMins").value = (parseInt(currentOutroMinutes) + Math.floor(currentOutroSeconds / 60)).toString();
        currentOutroMinutes = document.getElementById("outroMins").value;
        document.getElementById("outroSecs").value = (parseInt(currentOutroSeconds) % 60).toString();
        currentOutroSeconds = document.getElementById("outroSecs").value;
    }
    
    // Check what changed
    if (prevListenedSeconds != currentListenedSeconds)
    {
        updatePages = true;
        prevListenedSeconds = currentListenedSeconds;
    }
    if (prevListenedMinutes != currentListenedMinutes)
    {
        updatePages = true;
        prevListenedMinutes = currentListenedMinutes;
    }
    if (prevListenedHours != currentListenedHours)
    {
        updatePages = true;
        prevListenedHours = currentListenedHours;
    }
    if (prevTotalSeconds != currentTotalSeconds)
    {
        updatePages = true;
        prevTotalSeconds = currentTotalSeconds;
    }
    if (prevTotalMinutes != currentTotalMinutes)
    {
        updatePages = true;
        prevTotalMinutes = currentTotalMinutes;
    }
    if (prevTotalHours != currentTotalHours)
    {
        updatePages = true;
        prevTotalHours = currentTotalHours;
    }
    if (prevReadPages != currentReadPages)
    {
        updateTime = true;
        prevReadPages = currentReadPages;
    }
    if (prevTotalPages != currentTotalPages)
    {
        updateTime = true;
        prevTotalPages = currentTotalPages;
    }
    if (prevIntroSeconds != currentIntroSeconds)
    {
        UpdateCurrentTime();
        updatePages = true;
        prevIntroSeconds = currentIntroSeconds;
    }
    if (prevIntroMinutes != currentIntroMinutes)
    {
        UpdateCurrentTime();
        updatePages = true;
        prevIntroMinutes = currentIntroMinutes;
    }
    if (prevOutroSeconds != currentOutroSeconds)
    {
        UpdateCurrentTime();
        updatePages = true;
        prevOutroSeconds = currentOutroSeconds;
    }
    if (prevOutroMinutes != currentOutroMinutes)
    {
        UpdateCurrentTime();
        updatePages = true;
        prevOutroMinutes = currentOutroMinutes;
    }
    if (prevPageStart != currentPageStart)
    {
        UpdateCurrentPage();
        updateTime = true;
        prevPageStart = currentPageStart;
    }
    
    // Calculate based on what changed
    if (updatePages) {
        UpdateCurrentPage();
    }
    else if (updateTime) {
        UpdateCurrentTime();
    }
    
    // Loop
    setTimeout(function(){CheckInput()}, 500);
}

//Helper
function isInt(n)
{
  return !isNaN(parseInt(n)) && isFinite(n);
}