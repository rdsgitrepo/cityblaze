var APIUtils = new Object();
APIUtils.SERVER = "http://192.168.3.149/cricket/services/";
APIUtils.URLS = {
		getCreateTournamentURL:function(tournament){
			return APIUtils.SERVER+"Tournament.php?type=create&tournament_name="+tournament.name+"&tournament_logo="+tournament.logo+"&start_date="+tournament.startDate+"&end_date="+tournament.endDate+"&starttime="+tournament.startTime+"&endtime="+tournament.endtime+"&points_table="+tournament.pointsTable+"&tour_cat="+tournament.cat+"&short_name="+tournament.shortName+""
		},
		getAllTournamentsURL:function(){
			return APIUtils.SERVER+"Tournament.php?type=list"
		},
		getUpdateTournamentURL:function(tournament){
			return APIUtils.SERVER+"Tournament.php?type=update&tournament_id="+tournament.tournamentId+"&tournament_name="+tournament.name+"&tournament_logo="+tournament.logo+"&points_table="+tournament.pointsTable+"&tour_cat="+tournament.cat+"&short_name="+tournament.shortName+""
		},
		getDelTournamentURL:function(obj){
			return APIUtils.SERVER+"Tournament.php?type=delete&tournament_id="+obj.tournamentId
		}
		
		,
		getCreateTeamURL:function(team){
			//                      			   type=create&team_name=&team_logo=&team_small_name=&team_color1=&team_color2=&team_color3=
			return APIUtils.SERVER+"team.php?type=create&team_name="+team.name+"&team_logo="+team.logo+"&team_color1="+team.color1+"&team_color2="+team.color2+"&team_color3="+team.color3+"&team_small_name="+team.smallName+""
		},
		getAllTeamsURL:function(){
			return APIUtils.SERVER+"team.php?type=list";
		},
		getUpdateTeamURL:function(team){
			return APIUtils.SERVER+"team.php?type=update&team_id="+team.teamId+"&team_name="+team.name+"&team_logo="+team.logo+"&team_color1="+team.color1+"&team_color2="+team.color2+"&team_color3="+team.color3+"&team_small_name="+team.smallName+""
		},
		getDelTeamURL:function(teamId){
			return APIUtils.SERVER+"team.php?type=delete&team_id="+teamId
		}
		
		,
		getCreateMatchTypeURL:function(obj){
			return APIUtils.SERVER+"match_type.php?type=create&match_type_title="+obj.title
		},
		getAllMatchTypeURL:function(){
			return APIUtils.SERVER+"match_type.php?type=list";
		},
		getUpdateMatchTypeURL:function(obj){
			return APIUtils.SERVER+"match_type.php?type=update&match_type_id="+obj.matchTypeId+"&match_type_title="+obj.title;
		},
		getDelMatchTypeURL:function(obj){
			return APIUtils.SERVER+"match_type.php?type=delete&match_type_id="+obj.matchTypeId
		}
		
		,
		getCreateBowlingStyleURL:function(obj){
			return APIUtils.SERVER+"bowling_style.php?type=create&bowl_style_title="+obj.title
		},
		getAllBowlingStyleURL:function(){
			return APIUtils.SERVER+"bowling_style.php?type=list";
		},
		getUpdateBowlingStyleURL:function(obj){
			return APIUtils.SERVER+"bowling_style.php?type=update&bowl_style_id="+obj.bowlStyleId+"&bowl_style_title="+obj.title;
		},
		getDelBowlingStyleURL:function(obj){
			return APIUtils.SERVER+"bowling_style.php?type=delete&bowl_style_id="+obj.bowlStyleId
		}
		
		,
		getCreateBattingStyleURL:function(obj){
			return APIUtils.SERVER+"batting_style.php?type=create&bat_style_title="+obj.title
		},
		getAllBattingStyleURL:function(){
			return APIUtils.SERVER+"batting_style.php?type=list";
		},
		getUpdateBattingStyleURL:function(obj){
			return APIUtils.SERVER+"batting_style.php?type=update&bat_style_id="+obj.batStyleId+"&bat_style_title="+obj.title;
		},
		getDelBattingStyleURL:function(obj){
			return APIUtils.SERVER+"batting_style.php?type=delete&bat_style_id="+obj.batStyleId
		}
		
		,
		getCreatePlayerRoleURL:function(obj){
			return APIUtils.SERVER+"player_role.php?type=create&player_role_title="+obj.title
		},
		getAllPlayerRoleURL:function(){
			return APIUtils.SERVER+"player_role.php?type=list";
		},
		getUpdatePlayerRoleURL:function(obj){
			return APIUtils.SERVER+"player_role.php?type=update&player_role_id="+obj.playerRoleId+"&player_role_title="+obj.title;
		},
		getDelPlayerRoleURL:function(obj){
			return APIUtils.SERVER+"player_role.php?type=delete&player_role_id="+obj.playerRoleId
		}
		
		,
		getCreateUmpireURL:function(obj){
			return APIUtils.SERVER+"umpire.php?type=create&umpire_name="+obj.name+"&umpire_country_name="+obj.countryName
		},
		getAllUmpireURL:function(){
			return APIUtils.SERVER+"umpire.php?type=list";
		},
		getUpdateUmpireURL:function(obj){
			return APIUtils.SERVER+"umpire.php?type=update&umpire_id="+obj.umpireId+"&umpire_name="+obj.name+"&umpire_country_name="+obj.countryName;
		},
		getDelUmpireURL:function(obj){
			return APIUtils.SERVER+"umpire.php?type=delete&umpire_id="+obj.umpireId
		}
}

APIUtils.createTournament = function(tournament,myFunction) {
	var url = APIUtils.URLS.getCreateTournamentURL(tournament);
	console.log(url);
	callAjax(url,null,"GET",myFunction);
}

APIUtils.updateTournament = function(tournament,myFunction) {
	var url = APIUtils.URLS.getUpdateTournamentURL(tournament);
	console.log(url)
	callAjax(url,null,"GET",myFunction);
}

APIUtils.getTournaments = function(myFunction) {
	var url = APIUtils.URLS.getAllTournamentsURL();
	console.log(url)
	callAjax(url,null,"GET",myFunction);
}



APIUtils.createTeam = function(team,myFunction) {
	var url = APIUtils.URLS.getCreateTeamURL(team);
	console.log(url)
	callAjax(url,null,"GET",myFunction);
}

APIUtils.updateTeam = function(team,myFunction) {
	var url = APIUtils.URLS.getUpdateTeamURL(team);
	console.log(url)
	callAjax(url,null,"GET",myFunction);
}

APIUtils.deleteTeam = function(teamId,myFunction) {
	var url = APIUtils.URLS.getDelTeamURL(teamId);
	console.log(url)
	callAjax(url,null,"GET",myFunction);
}

APIUtils.getTeams = function(myFunction) {
	var url = APIUtils.URLS.getAllTeamsURL();
	callAjax(url,null,"GET",myFunction);
}




APIUtils.createMatchType = function(matchType,myFunction) {
	var url = APIUtils.URLS.getCreateMatchTypeURL(matchType);
	console.log(url)
	callAjax(url,null,"GET",myFunction);
}

APIUtils.updateMatchType = function(matchType,myFunction) {
	var url = APIUtils.URLS.getUpdateMatchTypeURL(matchType);
	console.log(url)
	callAjax(url,null,"GET",myFunction);
}

APIUtils.deleteMatchType = function(matchTypeId,myFunction) {
	var url = APIUtils.URLS.getDelMatchTypeURL(matchTypeId);
	console.log(url)
	callAjax(url,null,"GET",myFunction);
}

APIUtils.getMatchTypes = function(myFunction) {
	var url = APIUtils.URLS.getAllMatchTypeURL();
	callAjax(url,null,"GET",myFunction);
}




APIUtils.createBowlingStyle = function(bowlingStyle,myFunction) {
	var url = APIUtils.URLS.getCreateBowlingStyleURL(bowlingStyle);
	console.log(url)
	callAjax(url,null,"GET",myFunction);
}

APIUtils.updateBowlingStyle = function(bowlingStyle,myFunction) {
	var url = APIUtils.URLS.getUpdateBowlingStyleURL(bowlingStyle);
	console.log(url)
	callAjax(url,null,"GET",myFunction);
}

APIUtils.deleteBowlingStyle = function(bowlingStyleId,myFunction) {
	var url = APIUtils.URLS.getDelBowlingStyleURL(bowlingStyleId);
	console.log(url)
	callAjax(url,null,"GET",myFunction);
}

APIUtils.getBowlingStyles = function(myFunction) {
	var url = APIUtils.URLS.getAllBowlingStyleURL();
	callAjax(url,null,"GET",myFunction);
}




APIUtils.createBattingStyle = function(battingStyle,myFunction) {
	var url = APIUtils.URLS.getCreateBattingStyleURL(battingStyle);
	console.log(url)
	callAjax(url,null,"GET",myFunction);
}

APIUtils.updateBattingStyle = function(battingStyle,myFunction) {
	var url = APIUtils.URLS.getUpdateBattingStyleURL(battingStyle);
	console.log(url)
	callAjax(url,null,"GET",myFunction);
}

APIUtils.deleteBattingStyle = function(battingStyleId,myFunction) {
	var url = APIUtils.URLS.getDelBattingStyleURL(battingStyleId);
	console.log(url)
	callAjax(url,null,"GET",myFunction);
}

APIUtils.getBattingStyles = function(myFunction) {
	var url = APIUtils.URLS.getAllBattingStyleURL();
	callAjax(url,null,"GET",myFunction);
}






APIUtils.createPlayerRole = function(playerRole,myFunction) {
	var url = APIUtils.URLS.getCreatePlayerRoleURL(playerRole);
	console.log(url)
	callAjax(url,null,"GET",myFunction);
}

APIUtils.updatePlayerRole = function(playerRole,myFunction) {
	var url = APIUtils.URLS.getUpdatePlayerRoleURL(playerRole);
	console.log(url)
	callAjax(url,null,"GET",myFunction);
}

APIUtils.deletePlayerRole = function(playerRoleId,myFunction) {
	var url = APIUtils.URLS.getDelPlayerRoleURL(playerRoleId);
	console.log(url)
	callAjax(url,null,"GET",myFunction);
}

APIUtils.getPlayerRoles = function(myFunction) {
	var url = APIUtils.URLS.getAllPlayerRoleURL();
	callAjax(url,null,"GET",myFunction);
}






APIUtils.createUmpire = function(umpire,myFunction) {
	var url = APIUtils.URLS.getCreateUmpireURL(umpire);
	console.log(url)
	callAjax(url,null,"GET",myFunction);
}

APIUtils.updateUmpire = function(umpire,myFunction) {
	var url = APIUtils.URLS.getUpdateUmpireURL(umpire);
	console.log(url)
	callAjax(url,null,"GET",myFunction);
}

APIUtils.deleteUmpire = function(umpireId,myFunction) {
	var url = APIUtils.URLS.getDelUmpireURL(umpireId);
	console.log(url)
	callAjax(url,null,"GET",myFunction);
}

APIUtils.getUmpires = function(myFunction) {
	var url = APIUtils.URLS.getAllUmpireURL();
	callAjax(url,null,"GET",myFunction);
}




function callAjax(url,obj,type,calback){
	var respObj = {};
	var xhttp;
	console.log(url)
	xhttp=new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			console.log(xhttp.responseText)
			var obj = JSON.parse(xhttp.responseText);
			if(obj.status=="true"){
				respObj.status = "success";
				respObj.data = obj;
				calback(respObj);
			}else{
				respObj.status = "failed";
				respObj.data = obj.msg;
				calback(respObj);
			}
			
		}
	};
	xhttp.open(type, url, true);
	xhttp.send(obj);
}
