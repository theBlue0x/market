	  // Get the Pending sales count if the user is logged in
	  // Is the user logged in?
	  var loginStatus = sessionStorage.getItem("loginStatus");
	  if (loginStatus == 'loggedin') {// User is logged in, so check to see if there are any Pending Sales
  		// Create localized text for use in the notification menu
  		var translatedPendingSales = $.t("pending_sales_menu_header");
  		var displayPendingMenu = "no";
			var fmlang = localStorage.getItem("fmlang");
        // Yell at the console
        console.log ("User is logged in, checking for pending sales.");
        $(document).ready(function() {
			var loggedInAccount = sessionStorage.getItem("accountRS");
      $.post('http://localhost:2022/nxt', {
        	requestType:'getDGSGoods', 
        	seller: loggedInAccount 
        },              
          function(data) {
            if (data.goods = '[]') {
            console.log('User has no items for sale.');
            }else {     
            for (var i = 0; i < data.items.length; i++) {
            var pending_count = data.items[i].pending_count;
            var originalQuantity = data.items[i].quantity; // For use below to see if quantity ordered equals the original quantity listed
					  // Get end datestamp
					  // Get the current datestamp for comparison
					  // Use moment library to convert current time to BLX timestamp
						  // Compare the item's end date to the current time
						  if (recalculatedEndDate < currentTime) {
						  // Also set a variable to keep up from looking for buying_ids below, since it's not needed for expired items
						  var expired = "yes";
				            }
				            else { // If item is not expired
							var expired = "no";
				            }	            							                  			                    
	                  // Now see if this item has any Pending sales
	                  if (pending_count > 0 && expired == "no") { // If 1 or more pending sales, each sale gets a separate table row
		                  	  // Set a variable to indicate that the menu will be displayed, because there is at least one pending sale
		                  	  displayPendingMenu = "yes";
                      } // End if pending count > 0
                  }
                  }
						if (displayPendingMenu == "yes") {
					      // Yell at the console
					      console.log ("Pending sales found for this user. Displaying pending sales notification banner.");
					      var notificationMenuContents = "<div class=\"nav notify-row\" id=\"pending_notice\"><a href=\"ViewYourPendingSales.html?setLng=";
					      notificationMenuContents += fmlang;
					      notificationMenuContents += "\"><button class=\"btn btn-white\"><i class=\"fa fa-shopping-cart text-info\"></i> ";
					      notificationMenuContents += translatedPendingSales;
					      notificationMenuContents += "</button></a></div>";
					      document.getElementById("pendingNotification").innerHTML = notificationMenuContents;
						  }
						else {
					      // Yell at the console
					      console.log ("No pending sales found, no need to display pending sales notification banner.");
						  }
                  
				  }, "json"); // Specifies JSON as the expected result
} );
}
else {
      // Yell at the console
      console.log ("User is not logged in, no need to report Pending Sales.");
	
} 