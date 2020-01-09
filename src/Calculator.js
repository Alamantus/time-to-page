export function CalculateSeconds (timeObject) {
  const { hours = 0, minutes, seconds } = timeObject;
  return (((hours * 60) + minutes) * 60) + seconds;
}

export function GetListenedSeconds (listened, intro) {
  let listenedSeconds = CalculateSeconds(listened);
  listenedSeconds -= CalculateSeconds(intro);

  return listenedSeconds;
}  

export function GetTotalSeconds (total, intro, outro) {
  let totalSeconds = CalculateSeconds(total);
  totalSeconds -= CalculateSeconds(intro);
  totalSeconds -= CalculateSeconds(outro);

  return totalSeconds;
}  

export function GetPercentProgress (progress, total) {
  if (progress > total) {
    return 1;
  }

  return progress / total;
}

export function GetCurrentPageFromTime (totalPages, pageStart, listenedSeconds, totalSeconds) {
  const progress = GetPercentProgress(listenedSeconds, totalSeconds);
  const pagesRead = ((totalPages * progress) + (pageStart > 1 ? pageStart : 0)).toFixed(2);
  
  return pagesRead;
}

export function GetCurrentTimeFromPage (currentPage, totalPages, pageStart, totalSeconds, introSeconds) {
  const adjustedCurrentPage = currentPage - pageStart,
    adjustedTotalPages = totalPages - pageStart;
  const progress = GetPercentProgress(adjustedCurrentPage, adjustedTotalPages);
  
  const listenedSeconds = (totalSeconds * progress) + introSeconds;

  const hours = Math.floor(listenedSeconds / 3600);
  const minutes = Math.floor((listenedSeconds - (hours * 3600)) / 60);
  const seconds = Math.floor(listenedSeconds - ((hours * 3600) + (minutes * 60)));

  return {
    hours,
    minutes,
    seconds
  }
}