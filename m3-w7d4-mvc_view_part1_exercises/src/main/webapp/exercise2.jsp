<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>
	<head>
		<title>Exercise 2 - Fibonacci 25</title>
		<style>
			li {
				list-style-type: none;
			}
		</style>
	</head>
	<body>
		<h1>Exercise 2 - Fibonacci 25</h1>
		<ul>
			<%--
				Add a list item (i.e. <li>) for each of the first 25 numbers in the Fibonacci sequence
				
				See exercise2-fibonacci.png for example output
			 --%>
			 
			 <c:forEach begin="1" end="25" var="fibonacci">
			 	<c:choose>
			 		<c:when>
				 		<li class= "fibonacci">
				 			${number}
				 		</li>
			 		</c:when>
			 	</c:choose>
			 </c:forEach>
			 
		</ul>
	</body>
</html>