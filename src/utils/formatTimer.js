function formatTimer(seconds) {
  const min = `0${Math.floor(seconds / 60)}`.slice(-2);
  const sec = `0${seconds < 60 ? seconds : seconds % 60}`.slice(-2);

  return `${min}:${sec}`;
}

export default formatTimer;
