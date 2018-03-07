const Ranker  = require('../../Components/Ranker').Ranker;

test('should set up a Ranker object with default values', () => {
  const ranker = new Ranker();
  expect(ranker.getTeams()).toEqual({});
});
test('should add text line game scores correctly', () => {
  const teamMeciocresName = 'Mediocres';
  const teamWinnersName = 'The Winners';
  const teamLosersName = 'Losers';
  const teamAlsoMediocresName = 'Also Mediocres';
  const ranker = new Ranker();
  const line1 = `${teamLosersName} 0, ${teamWinnersName} 3`;
  const line2 = `${teamMeciocresName} 0, ${teamAlsoMediocresName} 0`;
  const line3 = `${teamMeciocresName} 1, ${teamAlsoMediocresName} 1`;
  const line4 = `${teamWinnersName} 1, ${teamMeciocresName} 0`;

  ranker.addGameScore(line1);
  ranker.addGameScore(line2);
  ranker.addGameScore(line3);
  ranker.addGameScore(line4);

  const teams = ranker.getTeams();

  // validate elements are there, names are correct, and scores are correct.
  const teamLosers = teams[teamLosersName];
  expect(teamLosers.getName()).toBe(teamLosersName);
  expect(teamLosers.getPoints()).toBe(0);

  const teamWinners = teams[teamWinnersName];
  expect(teamWinners.getName()).toBe(teamWinnersName);
  expect(teamWinners.getPoints()).toBe(6);

  const teamMediocres = teams[teamMeciocresName];
  expect(teamMediocres.getName()).toBe(teamMeciocresName);
  expect(teamMediocres.getPoints()).toBe(2);

  const teamAlsoMeciocres = teams[teamAlsoMediocresName];
  expect(teamAlsoMeciocres.getName()).toBe(teamAlsoMediocresName);
  expect(teamAlsoMeciocres.getPoints()).toBe(2);
});
