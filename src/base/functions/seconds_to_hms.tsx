import moment from 'moment';

function secondsToMin(sec: any) {
  sec = Number(sec);
  return moment.utc(sec * 1000).format('m:ss');
}

export default secondsToMin;
