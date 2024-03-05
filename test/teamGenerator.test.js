// Importez les bibliothèques de test et d'assertion
import { expect } from 'chai';
import TeamGenerator from '../src/teamGenerator.js';

describe('TeamGenerator', () => {
  it('should generate teams with the correct structure', () => {
    // setup
    const players = ['Player1', 'Player2', 'Player3', 'Player4', 'Player5', 'Player6', 'Player7', 'Player8'];
    const teamGenerator = new TeamGenerator(players);

    // calls
    teamGenerator.generateTeams();
    const teams = teamGenerator.getTeams();

    // expect
    expect(teams).to.be.an('array');
    expect(teams).to.have.lengthOf.at.least(1);

    teams.forEach((team) => {
      expect(team).to.have.property('name').that.is.a('string');
      expect(team).to.have.property('players').that.is.an('array');
      expect(team.players).to.have.lengthOf.at.most(teamGenerator.playersPerTeam);
    });
  });
  
  it('should return the total number of players', () => {
  // setup
    const players = ['Joueur1', 'Joueur2', 'Joueur3', 'Joueur4', 'Joueur5', 'Joueur6', 'Joueur7', 'Joueur8', 'Joueur9', 'Joueur10', 'Joueur11', 'Joueur12'];
    const teamGenerator = new TeamGenerator(players);
  
  // calls
    teamGenerator.generateTeams();
    const totalPlayers = teamGenerator.getTotalPlayers();
  
  // expects
    expect(totalPlayers).to.be.a('number');
    expect(totalPlayers).to.equal(players.length);
  });
});

