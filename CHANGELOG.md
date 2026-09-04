# Changelog

## v0.1.0-beta — 2026-09-04

First limited beta. Published as "Spotter" at theprixit.github.io/spotter (the working name Tower Spotter was dropped: the app is general).

- Readings: GPS position with accuracy and time, laser rangefinder slant distance and angle (up/down), compass heading typed or captured live from the phone, optional photo of the spot.
- Solver: one reading = distance along the heading; two or more readings from different points = crossing of the horizontal-distance circles, with both candidates offered when the heading cannot decide. Height above the observer from the angle, approximate elevation from GPS altitude.
- Projects with any number of spots; a saved spot can be reopened to add readings and updated.
- Project file is KML/KMZ: spot, observer points with all entered values, dashed lines of sight, possibility arc (one reading) or arcs of both distance circles (two), photos in balloons. Loads back into the app with readings and photos; plain Google Earth KML loads as spots without readings.
- Report for review: plain-text summary of every reading and result.
- Everything typed is kept on the phone between visits to the page; installable as a home-screen app; works offline.
- Beta access by passkey; the hosted copy is encrypted.
