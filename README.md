## Search For Your Next Holiday Destination,etc.

### Description:
This is a one-page site that will enable users to search for a city of interest, possibly a holiday destinations, tourist attraction, bars, and restaurants.

### Name:
Travel Search:
The name is styled to respond to a hover effect and display a green shadow.

### How It Is Used:
When a user visits the site, the user is presented with an autocomplete input text field and a map. The map is centrally zoomed to lat: 47.45 and  lng: -30.27 which is somewhere at the North atlantic ocean. This way, the user is not presented any particular country.

When the user types into the textfield, the autocomplete feature automatically loads suggestions cities/countries for the user to choose. 

On clicking a place,  google maps loads. With places of interest within the selected city/country loaded on a table which now appears on the left margin of the map for the user to find a particular interest. Also while the table populates with places of interests, markers are also dropping on the map. And on clicking any of the listed places, an info window opens presenting details about the clicked place..
There is also a drop-down menu to enable the user refine his/her search results into Amusement parks, Aquarium, Art Gallery, Museums, Zoos, Hotels, Restaurants.
It is important to note that the map always load with tiny icons of restaurants, hotels, hospitals, libraries, etc., within the map viewable area. These are clickable icons too that when clicked with display an info Window with more information about the clicked place.

### Users will be able:
1. Search for a destination city
2. Find tourist attractions within the search city/country
3. Find accommodation
4. Find bars and restaurants

### Technologies used
The site was developed using html / html 5, CSS / CSS 3, Bootstrap, Javascript, jQuery, Cloud9, and Google Maps Api, Google Places Api, git/github.

#### Limitations
There are presently lots of limitations. I have read lots of api pages but could not find solutions on how to drop the markers in different colours for different categories. For instance a green marker can be for Amusement parks, blue for museums, yellow for restaurants, etc. And even how to use numbers to label the markers instead of the aphabets.
Another limitation is the search results found for places and displayed on the results table at the left margin of the map are not more than 26 listed places at a time.
Also, I was not able to search for each categories separately and aggregate their results. Example, get the result for hotels and then from museums and display those only.
Also, since icons of places such as restaurants, bars, hospitals, etc., are preloaded on the map when it displays, it is not possible to highlight or modify those icons. I do not have control over these icons.

#### Support:
There is much room to develop this page further. And you are welcome to contribute to solve some of the mentioned limitations above. These may be limitations perculiar only to this page, as I have seen a much more advanced use of the map api here https://www.tripadvisor.ie/Attractions-g186600-Activities-Cork_County_Cork.html#MAPVIEW
which shows that the limitations presented above on the page are solvable.

#### Source:
1. https://developers.google.com/maps/documentation/javascript/places-autocomplete#map_controls
2. https://developers.google.com/maps/documentation/javascript/places#place_searches
3. https://www.tripadvisor.ie/Attractions-g186600-Activities-Cork_County_Cork.html#MAPVIEW
4. https://developers.google.com/places/supported_types