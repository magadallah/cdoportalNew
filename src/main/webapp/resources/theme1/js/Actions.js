function ValidateUserName ()
{
	var Div = document.getElementById("Update_User_name");
	var Div_loader = document.getElementById("loader");
	var Div_image = document.getElementById("done_image");
	   document.getElementById("UserName_copy").value = document.getElementById("UserName").value
		//document.getElementById(id).disabled = true;
		var UserName = document.getElementById("UserName").value;	
	
	   if(UserName === null || UserName === "")
   			{
		   		alert("Please fill the field");
		   		return false;
   	
   			}
	
    	Div.style.display = "none";
    	Div_loader.style.display= "block";
    	Div_image.style.display= "none";
 
 
    
    
	 var xhttp = new XMLHttpRequest();
	 var URL = document.URL.substring(0, document.URL.lastIndexOf("/"));	
	 var resultarray = new Array();
	 xhttp.onreadystatechange = function() {
		    if (xhttp.readyState == XMLHttpRequest.DONE) {
		      
		    	   if( (xhttp.responseText != "Not Found") && (xhttp.responseText != "Error"))
		    		   {
		    		   Div.style.display = "block";
		    		   Div_loader.style.display= "none";
		    		   resultarray = xhttp.responseText.split(",");
		    		   document.getElementById("Update_Customer_Information").value=resultarray[0];
		    		
		    		   
		    		   
		    		   
		    		   }
		    	   if( (xhttp.responseText == "Not Found"))
	    		   {
		    		   Div_loader.style.display= "none";
	    		   alert("No Customer Found With Login ID : " + UserName);
	    		   }
		    	   
		    	   if( (xhttp.responseText == "Error"))
	    		   {
		    		   Div_loader.style.display= "none";
	    		   alert("An error occured please contact your support or try again later");
	    		   }
		    	   
		    	 
		       
		    }
		}
	 
	    xhttp.open("POST", URL + "/ValidateUserName", true);
	    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	    xhttp.send("UserName=" + UserName);
	    //document.getElementById("remarks_"+req_id).value = document.getElementById(id).value;
}

function ValidateCustomerNumber ()
{
	var Div = document.getElementById("" + "Update_Customer_Information");
	var Div_loader = document.getElementById("loader");
	var Div_image = document.getElementById("done_image");
	document.getElementById("CustomerNumber_copy").value = document.getElementById("CustomerNumber").value
	//document.getElementById(id).disabled = true;
	var CustomerNumber = document.getElementById("CustomerNumber").value;

	if(CustomerNumber === null || CustomerNumber === "")
	{
		alert("Please fill the field");
		return false;

	}
	if(isNaN(CustomerNumber)){
		alert("Please enter a Numeric Value");
		return false;
	}

	Div.style.display = "none";
	Div_loader.style.display= "block";
	Div_image.style.display= "none";




	var xhttp = new XMLHttpRequest();
	var URL = document.URL.substring(0, document.URL.lastIndexOf("/"));
	var resultarray = new Array();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState === XMLHttpRequest.DONE) {

			if( (xhttp.responseText !== "Not Found,Not Found") && (xhttp.responseText !== "Error"))
			{
				Div.style.display = "block";
				Div_loader.style.display= "none";
				resultarray = xhttp.responseText.split(",");
				//document.getElementById("Update_Customer_Information").value=resultarray[0];
				document.getElementById("CustomerType_value").value=resultarray[0];
				document.getElementById("AccountKey_value").value=resultarray[1];
				document.getElementById("PhoneNumber_value").value=resultarray[2];
				document.getElementById("PhoneType_value").value=resultarray[3];
				document.getElementById("PolicyProductNo_value").value=resultarray[4];
				document.getElementById("LastUpdatedDate_value").value=resultarray[5];
				if (resultarray.length > 6 && resultarray[6] !== "Not Found") {
					document.getElementById("CustomerType_update").value = resultarray[6];
					document.getElementById("AccountKey_update").value = resultarray[7];
					document.getElementById("PhoneNumber_update").value = resultarray[8];
					document.getElementById("PhoneType_update").value = resultarray[9];
					document.getElementById("PolicyProductNo_update").value = resultarray[10];
					document.getElementById("LastUpdatedDate_value_copy").value = resultarray[11];
					document.getElementById("Authorization_status_value").value = resultarray[12];
					document.getElementById("Authorization_comments_status_value").value = resultarray[13]
				}
				//document.getElementById("Text4").value=resultarray[3];




			}
			if( (xhttp.responseText === "Not Found,Not Found"))
			{
				Div_loader.style.display= "none";
				alert("No Customer Found With Customer Number : " + CustomerNumber);
			}

			if( (xhttp.responseText === "Error"))
			{
				Div_loader.style.display= "none";
				alert("An error occured please contact your support or try again later");
			}



		}
	}

	xhttp.open("POST", URL + "/ValidateCustomerNumber", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("CustomerNumber=" + CustomerNumber);
	//document.getElementById("remarks_"+req_id).value = document.getElementById(id).value;
}

function ShowAuthCustomerNumber ()
{
	var Div = document.getElementById("" + "Update_Authorize_Information");
	var Div_loader = document.getElementById("loader_Auth");
	var Div_image = document.getElementById("done_image_Auth");
	document.getElementById("CustomerNumber_copy_Auth").value = document.getElementById("CustomerNumber_Auth").value
	//document.getElementById(id).disabled = true;
	var CustomerNumber = document.getElementById("CustomerNumber_Auth").value;
	document.getElementById("AuthorizeBtn").disabled = true;
	document.getElementById("RejectBtn").disabled = true;

	if(CustomerNumber === null || CustomerNumber === "")
	{
		alert("Please fill the field");
		return false;

	}
	if(isNaN(CustomerNumber)){
		alert("Please enter a Numeric Value");
		return false;
	}

	Div.style.display = "none";
	Div_loader.style.display= "block";
	Div_image.style.display= "none";




	var xhttp = new XMLHttpRequest();
	var URL = document.URL.substring(0, document.URL.lastIndexOf("/"));
	var resultarray = new Array();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState === XMLHttpRequest.DONE) {

			if( (xhttp.responseText !== "Not Found,Not Found") && (xhttp.responseText !== "Error"))
			{
				Div.style.display = "block";
				Div_loader.style.display= "none";
				resultarray = xhttp.responseText.split(",");
				//document.getElementById("Update_Customer_Information").value=resultarray[0];
				document.getElementById("CustomerType_value_Auth").value=resultarray[0];
				document.getElementById("AccountKey_value_Auth").value=resultarray[1];
				document.getElementById("PhoneNumber_value_Auth").value=resultarray[2];
				document.getElementById("PhoneType_value_Auth").value=resultarray[3];
				document.getElementById("PolicyProductNo_value_Auth").value=resultarray[4];
				document.getElementById("LastUpdatedDate_value_Auth").value=resultarray[5];
				if (resultarray.length > 6 && resultarray[6] !== "Not Found") {
					document.getElementById("CustomerType_update_Auth").value = resultarray[6];
					document.getElementById("AccountKey_update_Auth").value = resultarray[7];
					document.getElementById("PhoneNumber_update_Auth").value = resultarray[8];
					document.getElementById("PhoneType_update_Auth").value = resultarray[9];
					document.getElementById("PolicyProductNo_update_Auth").value = resultarray[10];
					document.getElementById("LastUpdatedDate_value_copy_Auth").value = resultarray[11];
					document.getElementById("Authorization_status_value_Auth").value = resultarray[12];
					document.getElementById("Authorization_comments").value = resultarray[13];
					document.getElementById("AuthorizeBtn").disabled = false;
					if(document.getElementById("Authorization_comments").value){
						document.getElementById("RejectBtn").disabled = false;
					}
				}
				//document.getElementById("Text4").value=resultarray[3];




			}
			if( (xhttp.responseText === "Not Found,Not Found"))
			{
				Div_loader.style.display= "none";
				alert("No Customer Found With Customer Number : " + CustomerNumber);
			}

			if( (xhttp.responseText === "Error"))
			{
				Div_loader.style.display= "none";
				alert("An error occured please contact your support or try again later");
			}



		}
	}

	xhttp.open("POST", URL + "/ShowAuthCustomerNumber", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("CustomerType_Auth=" + CustomerNumber);
	//document.getElementById("remarks_"+req_id).value = document.getElementById(id).value;
}

function GetUnauthorizedCustomer ()
{
	var Div = document.getElementById("" + "GetAllUnauthorized");
	var Div_loader = document.getElementById("loader_Auth");
	var Div_image = document.getElementById("done_image_Auth");
	document.getElementById("CustomerNumber_copy_Auth").value = document.getElementById("CustomerNumber_Auth").value
	//document.getElementById(id).disabled = true;
	var CustomerNumber = document.getElementById("CustomerNumber_Auth").value;

	if(CustomerNumber === null || CustomerNumber === "")
	{
		alert("Please fill the field");
		return false;

	}
	if(isNaN(CustomerNumber)){
		alert("Please enter a Numeric Value");
		return false;
	}

	Div.style.display = "none";
	Div_loader.style.display= "block";
	Div_image.style.display= "none";




	var xhttp = new XMLHttpRequest();
	var URL = document.URL.substring(0, document.URL.lastIndexOf("/"));
	var resultarray = new Array();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState === XMLHttpRequest.DONE) {

			if( (xhttp.responseText !== "Not Found,Not Found") && (xhttp.responseText !== "Error"))
			{
				Div.style.display = "block";
				Div_loader.style.display= "none";
				resultarray = xhttp.responseText.split(",");
				//document.getElementById("Update_Customer_Information").value=resultarray[0];
				document.getElementById("CustomerType_value_Auth").value=resultarray[0];
				document.getElementById("AccountKey_value_Auth").value=resultarray[1];
				document.getElementById("PhoneNumber_value_Auth").value=resultarray[2];
				document.getElementById("PhoneType_value_Auth").value=resultarray[3];
				document.getElementById("PolicyProductNo_value_Auth").value=resultarray[4];
				document.getElementById("LastUpdatedDate_value_Auth").value=resultarray[5];
				if (resultarray.length > 6 && resultarray[6] !== "Not Found") {
					document.getElementById("CustomerType_update_Auth").value = resultarray[6];
					document.getElementById("AccountKey_update_Auth").value = resultarray[7];
					document.getElementById("PhoneNumber_update_Auth").value = resultarray[8];
					document.getElementById("PhoneType_update_Auth").value = resultarray[9];
					document.getElementById("PolicyProductNo_update_Auth").value = resultarray[10];
					document.getElementById("LastUpdatedDate_value_copy_Auth").value = resultarray[11];
					document.getElementById("Authorization_status_value_Auth").value = resultarray[12];
					document.getElementById("Authorization_comments_value").value = resultarray[13];
				}
				//document.getElementById("Text4").value=resultarray[3];




			}
			if( (xhttp.responseText === "Not Found,Not Found"))
			{
				Div_loader.style.display= "none";
				alert("No Customer Found With Customer Number : " + CustomerNumber);
			}

			if( (xhttp.responseText === "Error"))
			{
				Div_loader.style.display= "none";
				alert("An error occured please contact your support or try again later");
			}



		}
	}

	xhttp.open("POST", URL + "/ShowAuthCustomerNumber", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("CustomerType_Auth=" + CustomerNumber);
	//document.getElementById("remarks_"+req_id).value = document.getElementById(id).value;
}

function AuthorizeCustomerInfo()
{

	var Div = document.getElementById("Update_Authorize_Information");
	var Div_loader = document.getElementById("loader_Auth");
	var Div_image = document.getElementById("done_image_Auth");

	Div.style.display = "none";
	Div_loader.style.display= "block";

	var URL = document.URL.substring(0, document.URL.lastIndexOf("/"));
	//document.getElementById(id).disabled = true;
	//var UserName_update = document.getElementById("CustomerNumber_Auth").value;
	document.getElementById("CustomerNumber_copy_Auth").value = document.getElementById("CustomerNumber_Auth").value
	var CustomerNumber = document.getElementById("CustomerNumber_Auth").value;



	var xhttp = new XMLHttpRequest();
	var resultarray = new Array();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState === XMLHttpRequest.DONE) {

			if( (xhttp.responseText !== "Failed") && (xhttp.responseText !== "Error"))
			{
				Div_loader.style.display= "none";
				Div_image.style.display= "block";
				document.getElementById("CustomerNumber_Auth").value = "";

			}
			if( (xhttp.responseText === "Failed"))
			{
				Div_image.style.display= "none";
				Div_loader.style.display= "none";
				alert("Can not Update CustomerNumber : " + CustomerNumber);
				window.location.href = "home"
			}
			if( (xhttp.responseText === "No"))
			{
				Div_image.style.display= "none";
				Div_loader.style.display= "none";
				alert("Can't Authorize Customer Number : " + CustomerNumber + " , Please check the values");
				window.location.href = "home"
			}

			if( (xhttp.responseText === "Error"))
			{
				Div_image.style.display= "none";
				Div_loader.style.display= "none";
				alert("An error occured please contact your support or try again later");
				window.location.href = "home"
			}

		}
	}

	xhttp.open("POST", URL + "/AuthorizeSingleCustomer", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("CustomerNumber_Auth=" + CustomerNumber);
	//document.getElementById("remarks_"+req_id).value = document.getElementById(id).value;



}

function RejectCustomerInfo()
{

	var Div = document.getElementById("Update_Authorize_Information");
	var Div_loader = document.getElementById("loader_Auth");
	var Div_image = document.getElementById("done_image_Auth");

	Div.style.display = "none";
	Div_loader.style.display= "block";

	var URL = document.URL.substring(0, document.URL.lastIndexOf("/"));
	//document.getElementById(id).disabled = true;
	//var UserName_update = document.getElementById("CustomerNumber_Auth").value;
	document.getElementById("CustomerNumber_copy_Auth").value = document.getElementById("CustomerNumber_Auth").value
	var CustomerNumber = document.getElementById("CustomerNumber_Auth").value;

	var RejectionValue = document.getElementById("Authorization_comments").value;

	if(RejectionValue === null || RejectionValue === ""){
		alert("Please enter Rejection reason");
		return false;
		//window.location.href="home"

	}

	Div.style.display = "none";
	Div_loader.style.display= "block";
	Div_image.style.display= "none";

	var xhttp = new XMLHttpRequest();
	var resultarray = new Array();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState === XMLHttpRequest.DONE) {

			if( (xhttp.responseText !== "Failed") && (xhttp.responseText !== "Error"))
			{
				Div_loader.style.display= "none";
				Div_image.style.display= "block";
				document.getElementById("CustomerNumber_Auth").value = "";
				window.location.href="home"

			}
			if( (xhttp.responseText === "Failed"))
			{
				Div_image.style.display= "none";
				Div_loader.style.display= "none";
				alert("Can not Update CustomerNumber : " + CustomerNumber);
				window.location.href = "home"
			}
			if( (xhttp.responseText === "No"))
			{
				Div_image.style.display= "none";
				Div_loader.style.display= "none";
				alert("Can't Authorize Customer Number : " + CustomerNumber + " , Please check the values");
				window.location.href = "home"
			}

			if( (xhttp.responseText === "Error"))
			{
				Div_image.style.display= "none";
				Div_loader.style.display= "none";
				alert("An error occured please contact your support or try again later");
				window.location.href = "home"
			}

		}
	}

	xhttp.open("POST", URL + "/RejectSingleCustomer", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("CustomerNumber_Auth=" + CustomerNumber + "&Authorization_comments=" + RejectionValue);
	//document.getElementById("remarks_"+req_id).value = document.getElementById(id).value;



}

function UpdateUserName()
{
	
	var Div = document.getElementById("Update_User_name");
	var Div_loader = document.getElementById("loader");
	var Div_image = document.getElementById("done_image");
	
    	Div.style.display = "none";
    	Div_loader.style.display= "block";
	
    	 var URL = document.URL.substring(0, document.URL.lastIndexOf("/"));	
	//document.getElementById(id).disabled = true;
	var UserName_update = document.getElementById("UserName_update").value;
	var UserName = document.getElementById("UserName_copy").value;
	
	 
	
	 var xhttp = new XMLHttpRequest();
	 var resultarray = new Array();
	 xhttp.onreadystatechange = function() {
		    if (xhttp.readyState == XMLHttpRequest.DONE) {
		      
		    	   if( (xhttp.responseText != "Failed") && (xhttp.responseText != "Error"))
		    		   {
		    		   Div_loader.style.display= "none";
		    		   Div_image.style.display= "block";
		    		   
		    		   
		    		   }
		    	   if( (xhttp.responseText == "Failed"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("Cann't Update Login ID : " + UserName);
	    		   }
		    	   if( (xhttp.responseText == "No"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("Can't Deactivate Account Number : " + Account_Number + ", Customer Number : " + Customer_number + ", Please check the values");
	    		   }
		    	   
		    	   if( (xhttp.responseText == "Error"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("An error occured please contact your support or try again later");
	    		   }
		    	   
		    	 
		       
		    }
		}
	 
	    xhttp.open("POST", URL + "/UpdateUserName", true);
	    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	    xhttp.send("UserName_update=" + UserName_update + "&UserName=" + UserName);
	    //document.getElementById("remarks_"+req_id).value = document.getElementById(id).value;



}

function UpdateCustomerInfo()
{

	var Div = document.getElementById("Update_Customer_Information");
	var Div_loader = document.getElementById("loader");
	var Div_image = document.getElementById("done_image");

	Div.style.display = "none";
	Div_loader.style.display= "block";

	var URL = document.URL.substring(0, document.URL.lastIndexOf("/"));
	//document.getElementById(id).disabled = true;
	// var UserName_update = document.getElementById("UserName_update").value;
	var CustomerType_update = document.getElementById("CustomerType_update").value;
	var AccountKey_update = document.getElementById("AccountKey_update").value;
	var PhoneNumber_update = document.getElementById("PhoneNumber_update").value;
	var PhoneType_update = document.getElementById("PhoneType_update").value;
	var PolicyProductNo_update = document.getElementById("PolicyProductNo_update").value;
	var LastUpdatedDate_update = document.getElementById("LastUpdatedDate_value").value;
	var CustomerNumber = document.getElementById("CustomerNumber").value;



	var xhttp = new XMLHttpRequest();
	var resultarray = new Array();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState === XMLHttpRequest.DONE) {

			if( (xhttp.responseText !== "Failed") && (xhttp.responseText !== "Error"))
			{
				Div_loader.style.display= "none";
				Div_image.style.display= "block";
				document.getElementById("CustomerNumber").value = "";

			}
			if( (xhttp.responseText === "Failed"))
			{
				Div_image.style.display= "none";
				Div_loader.style.display= "none";
				alert("Can not Update Customer Number : " + CustomerNumber);
				window.location.href = "home"
			}
			if( (xhttp.responseText === "No"))
			{
				Div_image.style.display= "none";
				Div_loader.style.display= "none";
				alert("Can't update customer information : " + CustomerNumber +  ", Please check the values");
				window.location.href = "home"
			}

			if( (xhttp.responseText === "Error"))
			{
				Div_image.style.display= "none";
				Div_loader.style.display= "none";
				alert("An error occured please contact your support or try again later");
				window.location.href = "home"
			}



		}
	}

	xhttp.open("POST", URL + "/UpdateCustomerInfo", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("CustomerType_update=" + CustomerType_update +
		"&AccountKey_update=" + AccountKey_update +
		"&PhoneNumber_update=" + PhoneNumber_update +
		"&PhoneType_update="+ PhoneType_update +
		"&PolicyProductNo_update=" + PolicyProductNo_update +
		"&CustomerNumber=" + CustomerNumber +
		"&LastUpdatedDate_update=" + LastUpdatedDate_update);
	//document.getElementById("remarks_"+req_id).value = document.getElementById(id).value;



}


function DeactivateUserAccount()
{
	
	
	var Div_loader = document.getElementById("loader");
	var Div_image = document.getElementById("done_image");
	var Div = document.getElementById("ValidateACCReAct");
	var Account_Number = document.getElementById("Account_Number").value;
    var Customer_number = document.getElementById("Customer_number").value;
    
    valid(Account_Number);
    valid(Customer_number);
    Div.style.display= "none";
 	Div_image.style.display= "none";
	Div_loader.style.display= "block";
    
    
    if(Account_Number == null || Account_Number == "" , Customer_number == null || Customer_number == "")
		{
   		alert("Please fill the fields");
   		return false;

		}

    
    
	
	 	Div_image.style.display= "none";
    	Div_loader.style.display= "block";
	
	
	//document.getElementById(id).disabled = true;
    
    var URL = document.URL.substring(0, document.URL.lastIndexOf("/"));	
    	
    	
	 var xhttp = new XMLHttpRequest();
	 var resultarray = new Array();
	 xhttp.onreadystatechange = function() {
		    if (xhttp.readyState == XMLHttpRequest.DONE) {
		      
		    	   if( (xhttp.responseText != "Failed") && (xhttp.responseText != "Error"))
		    		   {
		    		   Div_loader.style.display= "none";
		    		   Div_image.style.display= "block";
		    		   
		    		   
		    		   }
		    	   if( (xhttp.responseText == "Failed"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("Can't Deactivate Account Number : " + Account_Number + ", Customer Number : " + Customer_number + ", Please check the values");
	    		   }
		    	   
		    	   if( (xhttp.responseText == "No"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("Can't Deactivate Account Number : " + Account_Number + ", Customer Number : " + Customer_number + ", Please check the values");
	    		   }
		    	   
		    	   if( (xhttp.responseText == "Error"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("An error occured please contact your support or try again later");
	    		   }
		    	   
		    	 
		       
		    }
		}
	 
	    xhttp.open("POST", URL + "/DeactivateUserAccount", true);
	    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	    xhttp.send("Account_Number=" + Account_Number + "&Customer_number=" + Customer_number);
	    //document.getElementById("remarks_"+req_id).value = document.getElementById(id).value;

}



function ReactivateUserAccount()
{
	
	
	var Div_loader = document.getElementById("loader");
	var Div_image = document.getElementById("done_image");
	var Div = document.getElementById("ValidateACCReAct");
	var Account_Number = document.getElementById("Account_Number").value;
    var Customer_number = document.getElementById("Customer_number").value;
    valid(Account_Number);
    valid(Customer_number);
    Div.style.display= "none";
 	Div_image.style.display= "none";
	Div_loader.style.display= "block";
    
    
    if(Account_Number == null || Account_Number == "" , Customer_number == null || Customer_number == "")
		{
   		alert("Please fill the fields");
   		return false;

		}

    
    
	
	 	Div_image.style.display= "none";
    	Div_loader.style.display= "block";
	
	
	//document.getElementById(id).disabled = true;
    
    var URL = document.URL.substring(0, document.URL.lastIndexOf("/"));	
    	
    	
	 var xhttp = new XMLHttpRequest();
	 var resultarray = new Array();
	 xhttp.onreadystatechange = function() {
		    if (xhttp.readyState == XMLHttpRequest.DONE) {
		      
		    	   if( (xhttp.responseText != "Failed") && (xhttp.responseText != "Error"))
		    		   {
		    		   Div_loader.style.display= "none";
		    		   Div_image.style.display= "block";
		    		   
		    		   
		    		   }
		    	   if( (xhttp.responseText == "Failed"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("Can't Reactivate Account Number : " + Account_Number + ", Customer Number : " + Customer_number + ", Please check the values");
	    		   }
		    	   
		    	   if( (xhttp.responseText == "No"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("Can't Reactivate Account Number : " + Account_Number + ", Customer Number : " + Customer_number + ", Please check the values");
	    		   }
		    	   
		    	   if( (xhttp.responseText == "Error"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("An error occured please contact your support or try again later");
	    		   }
		    	   
		    	 
		       
		    }
		}
	 
	    xhttp.open("POST", URL + "/ReactivateUserAccount", true);
	    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	    xhttp.send("Account_Number=" + Account_Number + "&Customer_number=" + Customer_number);
	    //document.getElementById("remarks_"+req_id).value = document.getElementById(id).value;

}

function ValidateCCReAct()
{
	var Div_loader = document.getElementById("loader");
	var Div_image = document.getElementById("done_image");
	var Div = document.getElementById("ValidateCCReAct");
	var sema_num = document.getElementById("sema_num").value;
    var gp_acc_num = document.getElementById("gp_acc_num").value;
    valid(sema_num);
    valid(gp_acc_num);
    if(sema_num == null || sema_num == "" , gp_acc_num == null || gp_acc_num == "")
		{
   		alert("Please fill the fields");
   		return false;

		}
	    Div.style.display= "none";
	 	Div_image.style.display= "none";
    	Div_loader.style.display= "block";
	
	
	//document.getElementById(id).disabled = true;
   
    var URL = document.URL.substring(0, document.URL.lastIndexOf("/"));	
    var resultarray = new Array();	
    	
	 var xhttp = new XMLHttpRequest();
	 var resultarray = new Array();
	 xhttp.onreadystatechange = function() {
		    if (xhttp.readyState == XMLHttpRequest.DONE) {
		      
		    	   if( (xhttp.responseText != "Not Found") && (xhttp.responseText != "Error"))
		    		   {
		    		   
		    		   Div_loader.style.display= "none";
		    		   Div_image.style.display= "none";		    		  
		    		   resultarray = xhttp.responseText.split(",");
		    		   document.getElementById("Text1").value=resultarray[0];
		    		   document.getElementById("Text2").value=resultarray[1];
		    		   document.getElementById("Text3").value=resultarray[2];
		    		   document.getElementById("Text4").value=resultarray[3];
		    		   Div.style.display= "block";
		    		   }
		    	   if( (xhttp.responseText == "Not Found"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("No Credit Card Found For Sema Number : " + sema_num + " and group account number : " + gp_acc_num);
	    		   }
		    	   
		    	   if( (xhttp.responseText == "Error"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("An error occured please contact your support or try again later");
	    		   }
		    	   
		    	 
		       
		    }
		}
	 
	    xhttp.open("POST", URL + "/ValidateCCReAct", true);
	    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	    xhttp.send("sema_num=" + sema_num + "&gp_acc_num=" + gp_acc_num);
	    //document.getElementById("remarks_"+req_id).value = document.getElementById(id).value;
}



function ValidateACCReAct()
{
	var Div_loader = document.getElementById("loader");
	var Div_image = document.getElementById("done_image");
	var Div = document.getElementById("ValidateACCReAct");
	var Account_Number = document.getElementById("Account_Number").value;
    var Customer_number = document.getElementById("Customer_number").value;
    
    valid(Account_Number);
    valid(Customer_number);
    	
    	
    	 if(Account_Number == null || Account_Number == "" , Customer_number == null || Customer_number == "")
 		{
    		alert("Please fill the fields");
    		return false;

 		}
 	    Div.style.display= "none";
 	 	Div_image.style.display= "none";
     	Div_loader.style.display= "block";
 	
 	
 	//document.getElementById(id).disabled = true;
    
     var URL = document.URL.substring(0, document.URL.lastIndexOf("/"));	
     var resultarray = new Array();	
     	
 	 var xhttp = new XMLHttpRequest();
 	 var resultarray = new Array();
 	 xhttp.onreadystatechange = function() {
 		    if (xhttp.readyState == XMLHttpRequest.DONE) {
 		      
 		    	   if( (xhttp.responseText != "Not Found") && (xhttp.responseText != "Error"))
 		    		   {
 		    		   
 		    		   Div_loader.style.display= "none";
 		    		   Div_image.style.display= "none";		    		  
 		    		   resultarray = xhttp.responseText.split(",");
 		    		   document.getElementById("Visible").value=resultarray[0];
 		    		   document.getElementById("Is_Active").value=resultarray[1];
 		    		  
 		    		   Div.style.display= "block";
 		    		   }
 		    	   if( (xhttp.responseText == "Not Found"))
 	    		   {
 		    		   Div_image.style.display= "none";
 		    		   Div_loader.style.display= "none";
 	    		   alert("No Account Found For Account Number : " + Account_Number + " and Customer number : " + Customer_number);
 	    		   }
 		    	   
 		    	   if( (xhttp.responseText == "Error"))
 	    		   {
 		    		   Div_image.style.display= "none";
 		    		   Div_loader.style.display= "none";
 	    		   alert("An error occured please contact your support or try again later");
 	    		   }
 		    	   
 		    	 
 		       
 		    }
 		}
 	 
 	    xhttp.open("POST", URL + "/ValidateACCReAct", true);
 	    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
 	    xhttp.send("Account_Number=" + Account_Number + "&Customer_number=" + Customer_number);
 	    //document.getElementById("remarks_"+req_id).value = document.getElementById(id).value;
    	
    	
    	
   
    
   
}


function valid(text)
{
debugger;
 var s = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?";
 str=text;
 for (var i = 0; i < str.length; i++)
 {
    if (s.indexOf(str.charAt(i)) != -1)
  {
     alert ("The box has special characters. \nThese are not allowed.\n");
    document.getElementById('<%=TextBox1.ClientID%>').value="";
     return false;
  }
}
}


function ValidateCCUpdate()
{
	var Div_loader = document.getElementById("loader");
	var Div_image = document.getElementById("done_image");
	var Div = document.getElementById("ValidateCCUpdate");
	var sema_num = document.getElementById("sema_num").value;
    var gp_acc_num = document.getElementById("gp_acc_num").value;
    valid(sema_num);
    valid(gp_acc_num);
    
    
    if(sema_num == null || sema_num == "" , gp_acc_num == null || gp_acc_num == "")
		{
   		alert("Please fill the fields");
   		return false;

		}
	    Div.style.display= "none";
	 	Div_image.style.display= "none";
    	Div_loader.style.display= "block";
	
	
	//document.getElementById(id).disabled = true;
    
    var URL = document.URL.substring(0, document.URL.lastIndexOf("/"));	
    var resultarray = new Array();	
    	
	 var xhttp = new XMLHttpRequest();
	 var resultarray = new Array();
	 xhttp.onreadystatechange = function() {
		    if (xhttp.readyState == XMLHttpRequest.DONE) {
		      
		    	   if( (xhttp.responseText != "Not Found") && (xhttp.responseText != "Error"))
		    		   {
		    		   
		    		   Div_loader.style.display= "none";
		    		   Div_image.style.display= "none";		    		  
		    		   resultarray = xhttp.responseText.split(",");
		    		   document.getElementById("Text1").value=resultarray[0];
		    		   document.getElementById("Text2").value=resultarray[1];
		    		   document.getElementById("Text3").value=resultarray[2];
		    		   document.getElementById("Text4").value=resultarray[3];
		    		   Div.style.display= "block";
		    		   }
		    	   if( (xhttp.responseText == "Not Found"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
		    		   alert("No Credit Card Found For Sema Number : " + sema_num + " and group account number : " + gp_acc_num);
	    		   }
		    	   
		    	   if( (xhttp.responseText == "Error"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("An error occured please contact your support or try again later");
	    		   }
		    	   
		    	 
		       
		    }
		}
	 
	    xhttp.open("POST", URL + "/ValidateCCReAct", true);
	    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	    xhttp.send("sema_num=" + sema_num + "&gp_acc_num=" + gp_acc_num);
	    //document.getElementById("remarks_"+req_id).value = document.getElementById(id).value;
}


function ValidateCCUpdateSup()
{
	var Div_loader = document.getElementById("loader");
	var Div_image = document.getElementById("done_image");
	var Div = document.getElementById("ValidateCCUpdate");
	var sema_num = document.getElementById("sema_num").value;
    var gp_acc_num = document.getElementById("gp_acc_num").value;
    valid(sema_num);
    valid(gp_acc_num);
    if(sema_num == null || sema_num == "" , gp_acc_num == null || gp_acc_num == "")
		{
   		alert("Please fill the fields");
   		return false;

		}
	    Div.style.display= "none";
	 	Div_image.style.display= "none";
    	Div_loader.style.display= "block";
	
	
	//document.getElementById(id).disabled = true;
    
    var URL = document.URL.substring(0, document.URL.lastIndexOf("/"));	
    var resultarray = new Array();	
    	
	 var xhttp = new XMLHttpRequest();
	 var resultarray = new Array();
	 xhttp.onreadystatechange = function() {
		    if (xhttp.readyState == XMLHttpRequest.DONE) {
		      
		    	   if( (xhttp.responseText != "Not Found") && (xhttp.responseText != "Error"))
		    		   {
		    		   
		    		   Div_loader.style.display= "none";
		    		   Div_image.style.display= "none";		    		  
		    		   resultarray = xhttp.responseText.split(",");
		    		   document.getElementById("Text1").value=resultarray[0];
		    		   document.getElementById("Text2").value=resultarray[1];
		    		   document.getElementById("Text3").value=resultarray[2];
		    		   document.getElementById("Text4").value=resultarray[3];
		    		   Div.style.display= "block";
		    		   }
		    	   if( (xhttp.responseText == "Not Found"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
		    		   alert("No Credit Card Found For Supplementary Sema Number : " + sema_num + " and group account number : " + gp_acc_num);
	    		   }
		    	   
		    	 
		    	   if( (xhttp.responseText == "Error"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("An error occured please contact your support or try again later");
	    		   }
		    	   
		    	 
		       
		    }
		}
	 
	    xhttp.open("POST", URL + "/ValidateCCUpdateSup", true);
	    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	    xhttp.send("sema_num=" + sema_num + "&gp_acc_num=" + gp_acc_num);
	    //document.getElementById("remarks_"+req_id).value = document.getElementById(id).value;
}



function ReActivateCC()
{

	var Div_loader = document.getElementById("loader");
	var Div_image = document.getElementById("done_image");
	var Div = document.getElementById("ValidateCCReAct");
    Div.style.display= "none";
	 	Div_image.style.display= "none";
    	Div_loader.style.display= "block";
	
	
	//document.getElementById(id).disabled = true;
    	var sema_num = document.getElementById("sema_num").value;
        var gp_acc_num = document.getElementById("gp_acc_num").value;
    var URL = document.URL.substring(0, document.URL.lastIndexOf("/"));	
    	
    valid(sema_num);
    valid(gp_acc_num);
    
	 var xhttp = new XMLHttpRequest();
	 var resultarray = new Array();
	 xhttp.onreadystatechange = function() {
		    if (xhttp.readyState == XMLHttpRequest.DONE) {
		      
		    	   if( (xhttp.responseText != "Failed") && (xhttp.responseText != "Error"))
		    		   {
		    		   Div_loader.style.display= "none";
		    		   Div_image.style.display= "block";
		    		   
		    		   
		    		   }
		    	   if( (xhttp.responseText == "Failed"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
		    		   alert("Can't Reactivate Credit Card  For Sema Number : " + sema_num + " and group account number : " + gp_acc_num);
	    		   }
		    	   
		    	   if( (xhttp.responseText == "Error"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("An error occured please contact your support or try again later");
	    		   }
		    	   
		    	 
		       
		    }
		}
	 
	    xhttp.open("POST", URL + "/ReActivateCC", true);
	    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	    xhttp.send("sema_num=" + sema_num + "&gp_acc_num=" + gp_acc_num);
	    //document.getElementById("remarks_"+req_id).value = document.getElementById(id).value;


}


function DeActivateCC()
{

	var Div_loader = document.getElementById("loader");
	var Div_image = document.getElementById("done_image");
	var Div = document.getElementById("ValidateCCReAct");
    Div.style.display= "none";
	 	Div_image.style.display= "none";
    	Div_loader.style.display= "block";
	
	
	//document.getElementById(id).disabled = true;
    	var sema_num = document.getElementById("sema_num").value;
        var gp_acc_num = document.getElementById("gp_acc_num").value;
    var URL = document.URL.substring(0, document.URL.lastIndexOf("/"));	
    valid(sema_num);
    valid(gp_acc_num);
    
    	
	 var xhttp = new XMLHttpRequest();
	 var resultarray = new Array();
	 xhttp.onreadystatechange = function() {
		    if (xhttp.readyState == XMLHttpRequest.DONE) {
		      
		    	   if( (xhttp.responseText != "Failed") && (xhttp.responseText != "Error"))
		    		   {
		    		   Div_loader.style.display= "none";
		    		   Div_image.style.display= "block";
		    		   
		    		   
		    		   }
		    	   if( (xhttp.responseText == "Failed"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
		    		   alert("Can't Deactivate Credit Card  For Sema Number : " + sema_num + " and group account number : " + gp_acc_num);
	    		   }
		    	   
		    	   if( (xhttp.responseText == "Error"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("An error occured please contact your support or try again later");
	    		   }
		    	   
		    	 
		       
		    }
		}
	 
	    xhttp.open("POST", URL + "/DeActivateCC", true);
	    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	    xhttp.send("sema_num=" + sema_num + "&gp_acc_num=" + gp_acc_num);
	    //document.getElementById("remarks_"+req_id).value = document.getElementById(id).value;


}



function ReActivateCCSup()
{

	var Div_loader = document.getElementById("loader");
	var Div_image = document.getElementById("done_image");
	var Div = document.getElementById("ValidateCCUpdate");
    Div.style.display= "none";
	 	Div_image.style.display= "none";
    	Div_loader.style.display= "block";
	
	
	//document.getElementById(id).disabled = true;
    	var sema_num = document.getElementById("sema_num").value;
        var gp_acc_num = document.getElementById("gp_acc_num").value;
    var URL = document.URL.substring(0, document.URL.lastIndexOf("/"));	
    	
    valid(sema_num);
    valid(gp_acc_num);
    
	 var xhttp = new XMLHttpRequest();
	 var resultarray = new Array();
	 xhttp.onreadystatechange = function() {
		    if (xhttp.readyState == XMLHttpRequest.DONE) {
		      
		    	   if( (xhttp.responseText != "Failed") && (xhttp.responseText != "Error"))
		    		   {
		    		   Div_loader.style.display= "none";
		    		   Div_image.style.display= "block";
		    		   
		    		   
		    		   }
		    	   if( (xhttp.responseText == "Failed"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
		    		   alert("Can't Reactivate Credit Card  For Sema Number : " + sema_num + " and group account number : " + gp_acc_num);
	    		   }
		    	   
		    	   if( (xhttp.responseText == "Error"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("An error occured please contact your support or try again later");
	    		   }
		    	   
		    	 
		       
		    }
		}
	 
	    xhttp.open("POST", URL + "/ReActivateCCSup", true);
	    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	    xhttp.send("sema_num=" + sema_num + "&gp_acc_num=" + gp_acc_num);
	    //document.getElementById("remarks_"+req_id).value = document.getElementById(id).value;


}


function DeActivateCCSup()
{

	var Div_loader = document.getElementById("loader");
	var Div_image = document.getElementById("done_image");
	var Div = document.getElementById("ValidateCCUpdate");
    Div.style.display= "none";
	 	Div_image.style.display= "none";
    	Div_loader.style.display= "block";
	
	
	//document.getElementById(id).disabled = true;
    	var sema_num = document.getElementById("sema_num").value;
        var gp_acc_num = document.getElementById("gp_acc_num").value;
    var URL = document.URL.substring(0, document.URL.lastIndexOf("/"));	
    valid(sema_num);
    valid(gp_acc_num);
    
    	
	 var xhttp = new XMLHttpRequest();
	 var resultarray = new Array();
	 xhttp.onreadystatechange = function() {
		    if (xhttp.readyState == XMLHttpRequest.DONE) {
		      
		    	   if( (xhttp.responseText != "Failed") && (xhttp.responseText != "Error"))
		    		   {
		    		   Div_loader.style.display= "none";
		    		   Div_image.style.display= "block";
		    		   
		    		   
		    		   }
		    	   if( (xhttp.responseText == "Failed"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
		    		   alert("Can't Deactivate Credit Card  For Sema Number : " + sema_num + " and group account number : " + gp_acc_num);
	    		   }
		    	   
		    	   if( (xhttp.responseText == "Error"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("An error occured please contact your support or try again later");
	    		   }
		    	   
		    	 
		       
		    }
		}
	 
	    xhttp.open("POST", URL + "/DeActivateCCSup", true);
	    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	    xhttp.send("sema_num=" + sema_num + "&gp_acc_num=" + gp_acc_num);
	    //document.getElementById("remarks_"+req_id).value = document.getElementById(id).value;


}



function UpdateCC()
{
	
	var Div_loader = document.getElementById("loader");
	var Div_image = document.getElementById("done_image");
	var Div = document.getElementById("ValidateCCUpdate");
    Div.style.display= "none";
	 	Div_image.style.display= "none";
    	Div_loader.style.display= "block";
	
	
	//document.getElementById(id).disabled = true;
    	var sema_num = document.getElementById("sema_num").value;
        var gp_acc_num = document.getElementById("gp_acc_num").value;
    var URL = document.URL.substring(0, document.URL.lastIndexOf("/"));	
    valid(sema_num);
    valid(gp_acc_num);
    
    	
	 var xhttp = new XMLHttpRequest();
	 var resultarray = new Array();
	 xhttp.onreadystatechange = function() {
		    if (xhttp.readyState == XMLHttpRequest.DONE) {
		      
		    	   if( (xhttp.responseText != "Failed") && (xhttp.responseText != "Error"))
		    		   {
		    		   Div_loader.style.display= "none";
		    		   Div_image.style.display= "block";
		    		   
		    		   
		    		   }
		    	   if( (xhttp.responseText == "Failed"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("Card Not Supplmentry For Sema Number : " + sema_num + " and group account number : " + gp_acc_num);
	    		   }
		    	   
		    	   if( (xhttp.responseText == "Error"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("An error occured please contact your support or try again later");
	    		   }
		    	   
		    	 
		       
		    }
		}
	 
	    xhttp.open("POST", URL + "/UpdateCC", true);
	    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	    xhttp.send("sema_num=" + sema_num + "&gp_acc_num=" + gp_acc_num);
	    //document.getElementById("remarks_"+req_id).value = document.getElementById(id).value;




}
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

function JoinT24()
{
	var Div_loader = document.getElementById("loader");
	var Div_image = document.getElementById("done_image");
	var T24CustNo = document.getElementById("T24CustNo").value;
	var SemaNum = document.getElementById("SemaNum").value;
	
	document.getElementById("T24CustNo").value = "";
    document.getElementById("SemaNum").value ="";
    
    if(T24CustNo == null || T24CustNo == "" , SemaNum == null || SemaNum == "")
		{
   		alert("Please fill the fields");
   		return false;

		}
	 	Div_image.style.display= "none";
    	Div_loader.style.display= "block";
	
	
	//document.getElementById(id).disabled = true;
  
    var URL = document.URL.substring(0, document.URL.lastIndexOf("/"));	
    var resultarray = new Array();	
    	
	 var xhttp = new XMLHttpRequest();
	 var resultarray = new Array();
	 xhttp.onreadystatechange = function() {
		    if (xhttp.readyState == XMLHttpRequest.DONE) {
		      
		    	   if( (xhttp.responseText != "Failed") && (xhttp.responseText != "Error"))
		    		   {
		    		   
		    		   Div_loader.style.display= "none";
		    		   Div_image.style.display= "block";		    		  
		    		
		    		   }
		    	   if( (xhttp.responseText == "Failed"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("Can't Join T24 Number : " + T24CustNo + "with sema number : " + SemaNum);
	    		   }
		    	   
		    	   if( (xhttp.responseText == "Error"))
	    		   {
		    		   Div_image.style.display= "none";
		    		   Div_loader.style.display= "none";
	    		   alert("An error occured please contact your support or try again later");
	    		   }
		    	   
		    	 
		       
		    }
		}
	 
	    xhttp.open("POST", URL + "/JoinT24", true);
	    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	    xhttp.send("T24CustNo=" + T24CustNo + "&SemaNum=" + SemaNum);
	    //document.getElementById("remarks_"+req_id).value = document.getElementById(id).value;

}

$(document).ready(function () {
	var url = "/GetAllUnauthorizedCustomerNumber";
	// prepare the data
	var source =
		{
			datatype: "json",
			datafields: [
				{ name: 'firstname' },
				{ name: 'lastname' },
				{ name: 'productname'},
				{ name: 'quantity', type: 'int' },
				{ name: 'price', type: 'float' },
				{ name: 'total', type: 'float' }
			],
			id: 'CUSTOMER_KEY',
			url: "/GetAllUnauthorizedCustomerNumber"
		};
	var dataAdapter = new $.jqx.dataAdapter(source,{
		downloadComplete:function(edata,textStatus,jqXHR){
			alert(edata)
		}
	});
	$("#grid").jqxGrid(
		{
			width: 50,
			source: dataAdapter,
			columnsresize: true,
			columns: [
				{ text: 'First Name', dataField: 'firstname', width: 200 },
				{ text: 'Last Name', dataField: 'lastname', width: 200 },
				{ text: 'Product', dataField: 'productname', width: 180 },
				{ text: 'Quantity', dataField: 'quantity', width: 80, cellsalign: 'right' },
				{ text: 'Unit Price', dataField: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
				{ text: 'Total', dataField: 'total', cellsalign: 'right', minwidth: 100, cellsformat: 'c2' }
			]
		});
});




