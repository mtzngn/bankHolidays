export const filterBySixMonthFromNow = eventsArray => {
  const sixMonthInFuture = new Date();
  sixMonthInFuture.setMonth(sixMonthInFuture.getMonth() + 6);

  return eventsArray.filter(
    ({date}) =>
      sixMonthInFuture > new Date(date) && new Date(date) > new Date(),
  );
};

export const addDivisons = eventsArray => {
  const englandDays = eventsArray['england-and-wales'].events.map(el => {
    return {...el, division: eventsArray['england-and-wales'].division};
  });
  const scotlandDays = eventsArray.scotland.events.map(el => {
    return {...el, division: eventsArray.scotland.division};
  });
  const northenIrelandDays = eventsArray['northern-ireland'].events.map(el => {
    return {...el, division: eventsArray['northern-ireland'].division};
  });
  return [...englandDays, ...scotlandDays, ...northenIrelandDays];
};

export const capitalizeWords = str => {
  const words = str.split(' ');

  return words
    .map(word => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(' ');
};

export const formatText = str => {
  return capitalizeWords(str.replace(/\-/g, ' '));
};
