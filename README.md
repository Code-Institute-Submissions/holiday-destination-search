## Search For Your Next Holiday Destination,etc.

### Description:
This is a one-page site that will enable users to search for a city of interest, possibly a holiday destinations, tourist attraction, bars, and restaurants.

### Name:
Travel Search:
The name is styled to respond to a hover effect and display a green shadow.

### How It Is Used:
When a user visits the site, the user is presented with an autocomplete input text field for city search; styled radio buttons for refined search to show interests such as Natural Places, Museums, and Zoos; and a map. The map is centrally zoomed to lat: 47.45 and  lng: -30.27 which is somewhere at the North atlantic ocean. This way, the user is not presented any particular country.

When the user types into the textfield, the autocomplete feature automatically loads suggestions of cities/countries for the user to choose. 

When the choice of city/country is made by the user by clicking on any of the autocomplete suggestions,  google maps loads to show Natural Places (this is the default) within the city/country chosen. Also, a table which now appears on the left margin of the map is loaded with places of interests found for the search. Also while the table populates with places of interest, icons drop on the map to the location corresponding to the result returned. And on clicking either the icons or the list on the search result table, an info window opens presenting information about the place clicked.
The user also has a choice to display or remove Hotels and Restaurants from or onto the map by clicking the Hotel / Restaurant (checkboxes) to the right of the autocomplete text field.
It is important to note that these icons are dropped within the map zoomed viewable area. There are clickable icons, that when clicked will display an info Window with more information and photo if any, about the clicked location.

### Users will be able:
1. Search for a destination by city/country by typing into an autocomplete textfield 
2. Find tourist attractions within the search city/country
3. Find hotels, bars and restaurants

### Technologies used
The site was developed using html / html 5, CSS / CSS 3, Bootstrap, Javascript, jQuery, Cloud9, and Google Maps Api, Google Places Api, git/github.

#### Limitations
There are between 50 and 100 or even more different places of interest that can be searched for, but for simplicity, I decided to only add Natural Places, Museums, and Zoos. Using a listbox or a dropdown menu more places can be added.


#### Support:
There is much room to develop this page further. And you are welcome to contribute to improve the page. Efforts have been made to make the page as responsive as possible.


#### Source:
1. https://developers.google.com/maps/documentation/javascript/places-autocomplete#map_controls
2. https://developers.google.com/maps/documentation/javascript/places#place_searches
3. https://www.tripadvisor.ie/Attractions-g186600-Activities-Cork_County_Cork.html#MAPVIEW
4. https://developers.google.com/places/supported_types