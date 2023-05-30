const arrayNameToString = genres => {
  let tempGenres = [];
  if (genres === undefined) {
    return;
  } else {
    genres.forEach(genre => {
      tempGenres.push(genre.name);
    });
  }
  return tempGenres.join(', ');
};
export default arrayNameToString;
