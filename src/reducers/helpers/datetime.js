const dateTime = () => {
  const today = new Date();
  const dd = today.getDate();
  const mm = today.getMonth()+1;
  const yyyy = today.getFullYear();

  let min = today.getMinutes();
  let hour = 12;
  let timeDiv = 'AM';

  if (hour > 12) {
    hour -= 12;
    timeDiv = 'PM';
  }

  if (min < 10) {
    min = `0${min}`
  }

  return `${mm}/${dd}/${yyyy} ${hour}:${min}${timeDiv}`;
}

export default dateTime;
