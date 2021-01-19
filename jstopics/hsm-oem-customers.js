hmLoadTopic({
hmKeywords:"",
hmTitle:"HsM OEM Customers",
hmDescription:"Entities in the Catalog Service are mapped to one or more OEM Customers. E.g. a device type is mapped to one or more OEM-Customers.",
hmPrevLink:"authorization.html",
hmNextLink:"rest-api.html",
hmParentLink:"authorization.html",
hmBreadCrumbs:"<a href=\"neutral-backend-infrastructure.html\">Neutral backend infrastructure<\/a> &gt; <a href=\"catalog-service.html\">Catalog Service<\/a> &gt; <a href=\"authorization.html\">Authorization<\/a>",
hmTitlePath:"Neutral backend infrastructure > Catalog Service > Authorization > HsM OEM Customers",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">HsM OEM Customers<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">Entities in the Catalog Service are mapped to one or more OEM Customers. E.g. a device type is mapped to one or more OEM-Customers.<\/p>\n\r<p class=\"p_Normal\">When Accessing the Catalog Service’s admin API all read and write operations will verify if the accessed or modified entity is mapped to an OEM customer that is also in the list of OEM-Customers administrated by the accessing user or client.<\/p>\n\r<p class=\"p_Normal\">As the entities managed by the Catalog Service do not contain any business secrets and therefore the Browse API can be accessed anonymously, the Catalog Service’s browse API also does not protect entities with regard to the OEM-Customers they belong to. However for accessing entities through the browse API the user or client must know the entity’s ID, or the OEM-Customer ID.<\/p>\n\r"
})
