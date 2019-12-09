#the Rush App

**Highlights**

* The provided data is loaded as JSON varialbe for ease of use
* Data can be edited and sorted before export
* Data is paginated
* Only single column sorting is supported and enabled for the following columns:
  * Total Rushing Yards (Yds)
  * Longest Rush (Lng)
  * Total Rushing Touchdowns (TD)
* To filter by player name, enter the name of the player then either press
enter or use the search button. Filtering is supported after the searching
the data
* To export the data click export and the current data view will be exported

## Installation

1. Install dependencies
2. Build
3. Open `index.html` in the browser to view the app

**Install dependencies**

Run <code>npm install</code> at client folder

**Build**

Run <code>npm build</code> at client folder

## Usage

Open `index.html` in the browser to view the app

* sort one of the 3 columns by clicking on it

## For Development

Run <code>npm run run</code> at client folder

## Testing

* validation has been made that all requirements have been met with a very
basic manual testing, porper sorting and exporting covering malformed data or
data formated with a different locale
* basic testing for the provided data set has been performed, number values
that contain numbers whith commas or string value at the end are displayed
as provided, however they are sorted based on the numeric value
* no automated testing has been setup
