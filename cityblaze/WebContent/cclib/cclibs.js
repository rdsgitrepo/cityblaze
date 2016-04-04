var CCLIB = new Object();
CCLIB.CRICKET_ADMIN = new Object();

/*
 * Create tournament....
 */

CCLIB.CRICKET_ADMIN.createTournament = function(tournament,reFun){
	APIUtils.createTournament(tournament,function(resp1){
		console.log("..............")
		console.log(resp1)
		if(resp1.status=="success"){
			tournament.tournamentId = resp1.data.tournament_id;
			DBUtils.createTournament(tournament,function(resp2){
				if(resp2.status=="success")
					reFun(resp1);
				else
					reFun(resp2);
			});
		}else{
			reFun(resp1);
		}
	});
}
/*
 * Ex:
 */
/*var tournament = {};
tournament.name = "XXX1XXX";
tournament.shortName = "XXX1XXX";
tournament.logo = "logo";
tournament.startDate = "2017-05-18";
tournament.endDate = "2017-06-18";
tournament.startTime = "2016-03-18 10:30:00";
tournament.endtime = "2016-04-18 11:30:00";
tournament.pointsTable = "1";
tournament.cat = "ICC";
tournament.createdBy = "Developer";
CCLIB.CRICKET_ADMIN.createTournament(tournament,function(resp){
	console.log(resp)
});*/


CCLIB.CRICKET_ADMIN.updateTournament = function(tournament,reFun){
	APIUtils.updateTournament(tournament,function(resp1){
		console.log("..............")
		console.log(resp1)
		if(resp1.status=="success"){
			DBUtils.updateTournament(tournament,function(resp2){
				if(resp2.status=="success")
					reFun(resp1);
				else
					reFun(resp2);
			});
		}else{
			reFun(resp1);
		}
	});
}
/*
 * Ex:
 */
/*var tournament = {};
tournament.tournamentId = 18;
tournament.name = "XXX18X";
tournament.shortName = "XXX18";
tournament.logo = "logo";
tournament.startDate = "2017-05-18";
tournament.endDate = "2017-06-18";
tournament.startTime = "2016-03-18 10:30:00";
tournament.endtime = "2016-04-18 11:30:00";
tournament.pointsTable = "1";
tournament.cat = "ICC";
tournament.createdBy = "Developer";
CCLIB.CRICKET_ADMIN.updateTournament(tournament,function(resp){
	console.log(resp)
});*/


/*
 * Select all tournments
 */

CCLIB.CRICKET_ADMIN.retrieveTournaments = function(reFun){
	DBUtils.retrieveTournaments(function(resp){
		reFun(resp);
	});
}

/*
 * Ex:
 */
/*CCLIB.CRICKET_ADMIN.retrieveTournaments(function(resp){
	console.log(JSON.stringify(resp))
});*/






//Teams....

/*
 * Create team....
 */

CCLIB.CRICKET_ADMIN.createTeam = function(team,reFun){
	APIUtils.createTeam(team,function(resp1){
		console.log("..............")
		console.log(resp1)
		if(resp1.status=="success"){
			team.teamId = resp1.data.team_id;
			DBUtils.createTeam(team,function(resp2){
				if(resp2.status=="success")
					reFun(resp1);
				else
					reFun(resp2);
			});
		}else{
			reFun(resp1);
		}
	});
}
/*
 * Ex:
 */
/*var team = {};
				team.name = "India";
				team.smallName = "IND";
				team.logo = "LOGO";
				team.color1 = "blue";
				team.color2 = "blue";
				team.color3 = "blue";
CCLIB.CRICKET_ADMIN.createTeam(team,function(resp){
	console.log(resp)
});
*/

CCLIB.CRICKET_ADMIN.updateTeam = function(team,reFun){
	APIUtils.updateTeam(team,function(resp1){
		console.log("..............")
		console.log(resp1)
		if(resp1.status=="success"){
			DBUtils.updateTeam(team,function(resp2){
				if(resp2.status=="success")
					reFun(resp1);
				else
					reFun(resp2);
			});
		}else{
			reFun(resp1);
		}
	});
}
/*
 * Ex:
 */
/*var tournament = {};
var team = {};
team.teamId = "1";
				team.name = "India";
				team.smallName = "IND";
				team.logo = "LOGO";
				team.color1 = "blue";
				team.color2 = "blue";
				team.color3 = "blue";
CCLIB.CRICKET_ADMIN.updateTeam(team,function(resp){
	console.log(resp)
});*/


/*
 * Select all tournments
 */

CCLIB.CRICKET_ADMIN.retrieveTeams = function(reFun){
	DBUtils.retrieveTeams(function(resp){
		reFun(resp);
	});
}

/*
 * Ex:
 */
/*CCLIB.CRICKET_ADMIN.retrieveTeams(function(resp){
	console.log(JSON.stringify(resp))
});*/



//matchTypeId,title
CCLIB.CRICKET_ADMIN.createMatchType = function(matchType,myFunction) {
	APIUtils.createMatchType(matchType,function(resp){
		myFunction(resp);
	});
};

CCLIB.CRICKET_ADMIN.updateMatchType = function(matchType,myFunction) {
	APIUtils.updateMatchType(matchType,function(resp){
		myFunction(resp);
	});
}

CCLIB.CRICKET_ADMIN.deleteMatchType = function(matchTypeId,myFunction) {
	APIUtils.deleteMatchType(matchTypeId,function(resp){
		myFunction(resp);
	});
}

CCLIB.CRICKET_ADMIN.getMatchTypes = function(myFunction) {
	APIUtils.getMatchTypes(function(resp){
		myFunction(resp);
	});
}



//bowlStyleId, title
CCLIB.CRICKET_ADMIN.createBowlingStyle = function(bowlingStyle,myFunction) {
	APIUtils.createBowlingStyle(bowlingStyle,function(resp){
		myFunction(resp);
	});
}

CCLIB.CRICKET_ADMIN.updateBowlingStyle = function(bowlingStyle,myFunction) {
	APIUtils.updateBowlingStyle(bowlingStyle,function(resp){
		myFunction(resp);
	});
}

CCLIB.CRICKET_ADMIN.deleteBowlingStyle = function(bowlingStyleId,myFunction) {
	APIUtils.deleteBowlingStyle(bowlingStyleId,function(resp){
		myFunction(resp);
	});
}

CCLIB.CRICKET_ADMIN.getBowlingStyles = function(myFunction) {
	APIUtils.getBowlingStyles(function(resp){
		myFunction(resp);
	});
}



//batStyleId, title
CCLIB.CRICKET_ADMIN.createBattingStyle = function(battingStyle,myFunction) {
	APIUtils.createBattingStyle(battingStyle,function(resp){
		myFunction(resp);
	});
}

CCLIB.CRICKET_ADMIN.updateBattingStyle = function(battingStyle,myFunction) {
	APIUtils.updateBattingStyle(battingStyle,function(resp){
		myFunction(resp);
	});
}

CCLIB.CRICKET_ADMIN.deleteBattingStyle = function(battingStyleId,myFunction) {
	APIUtils.deleteBattingStyle(battingStyleId,function(resp){
		myFunction(resp);
	});
}

CCLIB.CRICKET_ADMIN.getBattingStyles = function(myFunction) {
	APIUtils.getBattingStyles(function(resp){
		myFunction(resp);
	});
}





//playerRoleId, title
CCLIB.CRICKET_ADMIN.createPlayerRole = function(playerRole,myFunction) {
	APIUtils.createPlayerRole(playerRole,function(resp){
		myFunction(resp);
	});
}

CCLIB.CRICKET_ADMIN.updatePlayerRole = function(playerRole,myFunction) {
	APIUtils.updatePlayerRole(playerRole,function(resp){
		myFunction(resp);
	});
}

CCLIB.CRICKET_ADMIN.deletePlayerRole = function(playerRoleId,myFunction) {
	APIUtils.deletePlayerRole(playerRoleId,function(resp){
		myFunction(resp);
	});
}

CCLIB.CRICKET_ADMIN.getPlayerRoles = function(myFunction) {
	APIUtils.getPlayerRoles(function(resp){
		myFunction(resp);
	});
}





//umpireId, name, countryName=
CCLIB.CRICKET_ADMIN.createUmpire = function(umpire,myFunction) {
	APIUtils.createUmpire(umpire,function(resp){
		myFunction(resp);
	});
}

CCLIB.CRICKET_ADMIN.updateUmpire = function(umpire,myFunction) {
	APIUtils.updateUmpire(umpire,function(resp){
		myFunction(resp);
	});
}

CCLIB.CRICKET_ADMIN.deleteUmpire = function(umpireId,myFunction) {
	APIUtils.deleteUmpire(umpireId,function(resp){
		myFunction(resp);
	});
}

CCLIB.CRICKET_ADMIN.getUmpires = function(myFunction) {
	APIUtils.getUmpires(function(resp){
		myFunction(resp);
	});
}





autoSyncTables();
function autoSyncTables(){
	APIUtils.getTournaments(function(resp){
		var list = resp.data.list;
		if(list)
			for(var i=0;i<list.length;i++){
				var tournament = list[i];
				tournament.pointsTable = tournament.points_table;
				tournament.tournamentId = tournament.tournament_id;
				tournament.name = tournament.tournament_name;
				tournament.shortName = tournament.short_name;
				tournament.logo = tournament.tournament_logo;
				tournament.cat = tournament.tour_cat;
				tournament.startDate = tournament.start_date;
				tournament.endDate = tournament.end_date;
				DBUtils.createTournament(tournament,function(resp){
					if(resp.status=="failed"){
						DBUtils.updateTournament(resp.data,function(resp1){
						})
					}
				});
			}
	});
	APIUtils.getTeams(function(resp){
		var list = resp.data.list;
		if(list)
			for(var i=0;i<list.length;i++){
				var team = list[i];
				//type=create&team_name=&team_logo=&team_small_name=&team_color1=&team_color2=&team_color3=
				team.teamId = team.team_id;
				team.name = team.team_name;
				team.smallName = team.team_small_name;
				team.logo = team.team_logo;
				team.color1 = team.team_color1;
				team.color2 = team.team_color2;
				team.color3 = team.team_color3;
				DBUtils.createTeam(team,function(resp){
					if(resp.status=="failed"){
						DBUtils.updateTeam(resp.data,function(resp1){
						})
					}
				});
			}
	});
	
	
	APIUtils.getMatchTypes(function(resp){
		var list = resp.data.list;
		if(list)
			for(var i=0;i<list.length;i++){
				var team = list[i];
				//type=update&match_type_id=&match_type_title
				team.matchTypeId = team.match_type_id;
				team.title = team.match_type_title;
				DBUtils.createMatchType(team,function(resp){
					if(resp.status=="failed"){
						DBUtils.updateMatchType(resp.data,function(resp1){
						})
					}
				});
			}
	});
	
	//type=update&bowl_style_id=&bowl_style_title
	APIUtils.getBowlingStyles(function(resp){
		var list = resp.data.list;
		if(list)
			for(var i=0;i<list.length;i++){
				var team = list[i];
				team.bowlStyleId = team.bowl_style_id;
				team.title = team.bowl_style_title;
				DBUtils.createBowlStyle(team,function(resp){
					if(resp.status=="failed"){
						DBUtils.updateBowlStyle(resp.data,function(resp1){
						})
					}
				});
			}
	});
	
	//type=update&bat_style_id=&bat_style_title
	APIUtils.getBattingStyles(function(resp){
		var list = resp.data.list;
		if(list)
			for(var i=0;i<list.length;i++){
				var team = list[i];
				team.batStyleId = team.bat_style_id;
				team.title = team.bat_style_title;
				DBUtils.createBatStyle(team,function(resp){
					if(resp.status=="failed"){
						DBUtils.updateBatStyle(resp.data,function(resp1){
						})
					}
				});
			}
	});
	
	
	//type=update&player_role_id=&player_role_title
	APIUtils.getPlayerRoles(function(resp){
		var list = resp.data.list;
		if(list)
			for(var i=0;i<list.length;i++){
				var team = list[i];
				team.playerRoleId = team.player_role_id;
				team.title = team.player_role_title;
				DBUtils.createPlayerRole(team,function(resp){
					if(resp.status=="failed"){
						DBUtils.updatePlayerRole(resp.data,function(resp1){
						})
					}
				});
			}
	});
	
	
	//type=update&umpire_id=&umpire_name=&umpire_country_name=
	APIUtils.getUmpires(function(resp){
		var list = resp.data.list;
		if(list)
			for(var i=0;i<list.length;i++){
				var team = list[i];
				team.umpireId = team.umpire_id;
				team.name = team.umpire_name;
				team.countryName = team.umpire_country_name;
				DBUtils.createUmpire(team,function(resp){
					if(resp.status=="failed"){
						DBUtils.updateUmpire(resp.data,function(resp1){
						})
					}
				});
			}
	});
	
	
	
	setTimeout(autoSyncTables,45000);
}
