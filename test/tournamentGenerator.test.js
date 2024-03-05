// Importez les bibliothèques de test et d'assertion
import { expect } from 'chai';

import TeamGenerator from '../src/teamGenerator.js';
import TournamentGenerator from '../src/tournamentGenerator.js';

describe('TournamentGenerator', () => {
  it('should generate tournament stages with the correct structure', () => {
    // setup teams
    const players = ['Joueur1', 'Joueur2', 'Joueur3', 'Joueur4', 'Joueur5', 'Joueur6', 'Joueur7', 'Joueur8', 'Joueur9', 'Joueur10', 'Joueur11', 'Joueur12'];
    const teamGenerator = new TeamGenerator(players);

    teamGenerator.generateTeams();
    const teams = teamGenerator.getTeams();

    // setup tournament
    const tournamentGenerator = new TournamentGenerator(teams);
    
    // calls
    tournamentGenerator.generatePoules();
    tournamentGenerator.simulatePoulesMatches();
    tournamentGenerator.generateFinalStages();

    const finalStages = tournamentGenerator.generateTournament();

    // expect
    expect(finalStages).to.be.an('array');
    expect(finalStages).to.have.lengthOf.at.least(1);

    finalStages.forEach((stage) => {
      expect(stage).to.be.an('array');
      expect(stage).to.have.lengthOf.at.most(teams.length);
    });
  });

  it('should return the winner of the tournament', () => {
    // setup teams
    const players = ['Joueur1', 'Joueur2', 'Joueur3', 'Joueur4', 'Joueur5', 'Joueur6', 'Joueur7', 'Joueur8', 'Joueur9', 'Joueur10', 'Joueur11', 'Joueur12'];
    const teamGenerator = new TeamGenerator(players);
    
    // calls
    teamGenerator.generateTeams();
    const teams = teamGenerator.getTeams();

    // setup tournament
    const tournamentGenerator = new TournamentGenerator(teams);

    // calls
    tournamentGenerator.generatePoules();
    tournamentGenerator.simulatePoulesMatches();
    tournamentGenerator.generateFinalStages();

    const winner = tournamentGenerator.getTournamentWinner();

    // expects
    expect(winner).to.be.an('object');
    expect(winner).to.have.property('name');
    expect(winner).to.have.property('players');
    });
});
