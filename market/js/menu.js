document.write("");

document.write("<!--header start-->");
document.write("<header class=\"header white-bg\">");
document.write("<div class=\"navbar-header white-bg\">");
document.write("<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">");
document.write("<span class=\"fa fa-bars\"></span>");
document.write("</button>");
document.write("<!--logo start-->");
document.write("<a id=\"logo_link\" href=\"about.html\" class=\"logo\">Blue0x|<span>Market</span></a>");
document.write("<!--logo end-->");
document.write("<div class=\"horizontal-menu navbar-collapse collapse\">");
document.write("<ul class=\"nav navbar-nav\">");
document.write("<li class=\"dropdown\">");
document.write("<a data-toggle=\"dropdown\" data-hover=\"dropdown\" class=\"dropdown-toggle\" href=\"#\"><span data-i18n=\"menu_buy\">Buy</span> <b class=\" fa fa-angle-down\"></b></a>");
document.write("<ul class=\"dropdown-menu\">");
document.write("<li><a id=\"view_all_link\" href=\"ViewAll.html?setLng=en\"><span data-i18n=\"menu_view_all\">View All Items</span></a></li>");
document.write("<li><a id=\"search_location_link\" href=\"SearchByLocation.html?setLng=en\">Search by Location</span></a></li>");
document.write("<li><a id=\"search_category_link\" href=\"SearchByCategory.html?setLng=en\"><span data-i18n=\"menu_search_category\">Search by Category</span></a></li>");
document.write("<li><a id=\"view_purchases_link\" href=\"ViewYourPurchases.html?setLng=en\"><span data-i18n=\"menu_view_purchases\">View Your Purchases</span></a></li>");
document.write("</ul>");
document.write("</li>");
document.write("<li class=\"dropdown\">");
document.write("<a data-toggle=\"dropdown\" data-hover=\"dropdown\" class=\"dropdown-toggle\" href=\"#\"><span data-i18n=\"menu_sell\">Sell</span> <b class=\" fa fa-angle-down\"></b></a>");
document.write("<ul class=\"dropdown-menu\">");
document.write("<li><a id=\"new_item_link\" href=\"ListNewItem.html?setLng=en\"><span data-i18n=\"menu_list_new\">List New Item</span></a></li>");
document.write("<li><a id=\"view_active_link\" href=\"ViewYourActiveItems.html?setLng=en\"><span data-i18n=\"menu_your_active_items\">View Your Active Items</span></a></li>");
document.write("<li><a id=\"view_pending_link\" href=\"ViewYourPendingSales.html?setLng=en\"><span data-i18n=\"menu_your_pending_sales\">View Your Pending Sales</span></a></li>");
document.write("<li><a id=\"view_sold_link\" href=\"ViewYourSoldItems.html?setLng=en\"><span data-i18n=\"menu_your_sold_items\">View Your Sold Items</span></a></li>");
document.write("<li><a id=\"view_expired_link\" href=\"ViewYourExpiredItems.html?setLng=en\"><span data-i18n=\"menu_your_expired_items\">View Your Expired Items</span></a></li>");
document.write("</ul>");
document.write("</li>");
document.write("<li class=\"dropdown\">");
document.write("<a data-toggle=\"dropdown\" data-hover=\"dropdown\" class=\"dropdown-toggle\" href=\"#\"><span data-i18n=\"menu_send\">Send</span> <b class=\" fa fa-angle-down\"></b></a>");
document.write("<ul class=\"dropdown-menu\">");
document.write("<li><a id=\"sendblx_link\" href=\"callBLX.html?setLng=en\"><span data-i18n=\"sendblx_link\">Send BLX</span></a></li>");
document.write("<li><a id=\"sendusdx_link\" href=\"callUSDX.html?setLng=en\"><span data-i18n=\"sendusdx_link\">Send USDX</span></a></li>");
document.write("</ul>");
document.write("</li>");
document.write("<li class=\"dropdown\">");
document.write("<a data-toggle=\"dropdown\" data-hover=\"dropdown\" class=\"dropdown-toggle\" href=\"#\"><span data-i18n=\"menu_rec\">Receive</span> <b class=\" fa fa-angle-down\"></b></a>");
document.write("<ul class=\"dropdown-menu\">");
document.write("<li><a id=\"qr_link\" href=\"genQR.html?setLng=en\"><span data-i18n=\"qr_link\">View QR Code</span></a></li>");
document.write("</ul>");
document.write("</li>");
document.write("</ul>");
document.write("</div>");
document.write("<div id=\"pendingNotification\"></div>");
document.write("<div class=\"top-nav\">");
document.write("<ul class=\"nav pull-right top-menu\">");
document.write("<li>");
document.write("</li>");                                         
document.write("<!-- user login dropdown start-->");
document.write("<li class=\"dropdown\">");
document.write("<a data-toggle=\"dropdown\" class=\"dropdown-toggle\" href=\"#\">");
document.write("<span class=\"username\" id=\"username\"><span data-i18n=\"menu_login_button\">Log In</span></span>");
document.write("</a>");
document.write("<ul class=\"dropdown-menu extended logout\">");
document.write("<div class=\"log-arrow-up\"></div>");
document.write("<li><a href=\"account_details.html?setLng=en\"><i class=\" fa fa-info-circle\"></i><div id=\"USDXbalance\"><span data-i18n=\"menu_login_text\">Log in to store your account number.</span></div></a></li>");
document.write("<li><a id=\"login_link\" href=\"account_details.html?setLng=en\"><i class=\"fa fa-key\"></i><div id=\"logintext\"><span data-i18n=\"menu_login\">Log In</span></div></a></li>");
document.write("</ul>");
document.write("</li>");
document.write("<!-- user login dropdown end -->");
document.write("</ul>");
document.write("</div>");
document.write("</div>");
document.write("</header>");
document.write("<!--header end-->");