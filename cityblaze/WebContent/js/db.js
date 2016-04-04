


var DBUtils = new Object();
//var db = window.openDatabase("cricket_admin", "1.0", "Test DB", 100000);

DBUtils.loadDBInitials = function(){
	db.transaction(
			function(tx) {
				//team_id,name,small_name,logo,color1,color2,color3
				tx.executeSql('CREATE TABLE IF NOT EXISTS login(id integer primary key,userName text,password text,userJson text,lupdate datetime DEFAULT CURRENT_TIMESTAMP)');
				
				
			}
	);

}
//DBUtils.loadDBInitials();
if(!window.sqlitePlugin){
	window.db = openDatabase('campuschamps_admin', '1.0', 'campuschamps_admin DB', 2 * 1024 * 1024);
	DBUtils.loadDBInitials();
}else{
	window.db = window.sqlitePlugin.openDatabase({name: "campuschamps_admin.db", location: 1},DBUtils.loadDBInitials(),function(){
		console.log("Problem with connect sqlite...")
	});
}


DBUtils.createLogin = function(userObj,retFun){
	db.transaction(
			function(tx) {
				var respObj = {};
				respObj.status = "failed";
				var query = 'INSERT INTO login(userName,password,userJson) VALUES(?,?,?) ';
				tx.executeSql(query,[userObj.userName,userObj.password,userObj.userJson],
				function(tx, res) {
					respObj.status = "success";
					respObj.data = userObj;
			        retFun(respObj);
				}, function(e1) {
					respObj.data = userObj;
					retFun(respObj);
				}); 
			}
	);
}

DBUtils.deleteLogin = function(retFun){
	db.transaction(
			function(tx) {
				var respObj = {};
				respObj.status = "failed";
				var query = 'delete from login';
				tx.executeSql(query,[],
				function(tx, res) {
					respObj.status = "success";
					respObj.data = [];
			        retFun(respObj);
				}, function(e1) {
					respObj.data = [e1];
					retFun(respObj);
				}); 
			}
	);
}

DBUtils.retrieveLoginData = function(retFun){
	db.transaction(
			function(tx) {
				var dataArray = [];
				var respObj = {};
				respObj.status = "failed";
				tx.executeSql("SELECT * FROM login", [], function(tx, res) {
		            for (var i = 0; i < res.rows.length; i++){
		                dataArray[i] = res.rows.item(i);
		            }
		            if(dataArray && dataArray.length>0){
		            	respObj.status = "success";
		            	respObj.data = dataArray;
		            }else{
		            	respObj.status = "fail";
		            	respObj.data = [];
		            }
		            retFun(respObj);
		        });
			}
	);
}

