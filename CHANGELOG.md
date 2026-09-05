# Changelog

## v0.1.3-beta — 2026-09-05

GPS position averaged (beta test: a fix reported as ±11 m was 24 m off beside a building):

- "Get my GPS position" now collects fixes for up to 20 s and takes their accuracy-weighted mean, stopping early when the fix is steady at ±4 m or better. The line under the button shows how many fixes, over how long, and their spread. Tap the button again to stop early.
- The ± figure of a result now includes the GPS accuracy of the readings, and the compass is taken as ±8° rather than ±6°. A second reading removes the compass part but not a position error, and the app says so.

## v0.1.2-beta — 2026-09-05

Steadier compass capture (beta feedback: reading still jumpy):

- The heading is now averaged over the last two seconds and the display refreshes five times a second, instead of a third of a second at sensor rate.
- A steadiness state: settling, wobbling, steady (±2.5° or better over two seconds). The Capture button shows the value it will take once steady.
- Calibration prompt when the sensor reports poor accuracy or the reading will not settle: figure-of-eight motion, and keep the phone away from the rangefinder's magnet, the car and belt buckles.
- The reading card records the captured heading with its spread, and a second capture replaces it.

## v0.1.1-beta — 2026-09-05

Compass capture fixes (beta feedback: heading jumping by 180°):

- The compass reference turns over when the phone is tilted past vertical. Sampling now pauses with a "hold the phone flatter" note whenever the phone is more than 45° from level, and the level angle is shown with the reading.
- A sudden change of more than 60° restarts the average instead of swinging through it.
- The dial always turns the short way, including across north; before, crossing north spun it the long way round.
- Capture needs a settled reading (a few samples while level).

## v0.1.0-beta — 2026-09-04

First limited beta. Published as "Spotter" at theprixit.github.io/spotter (the working name Tower Spotter was dropped: the app is general).

- Readings: GPS position with accuracy and time, laser rangefinder slant distance and angle (up/down), compass heading typed or captured live from the phone, optional photo of the spot.
- Solver: one reading = distance along the heading; two or more readings from different points = crossing of the horizontal-distance circles, with both candidates offered when the heading cannot decide. Height above the observer from the angle, approximate elevation from GPS altitude.
- Projects with any number of spots; a saved spot can be reopened to add readings and updated.
- Project file is KML/KMZ: spot, observer points with all entered values, dashed lines of sight, possibility arc (one reading) or arcs of both distance circles (two), photos in balloons. Loads back into the app with readings and photos; plain Google Earth KML loads as spots without readings.
- Report for review: plain-text summary of every reading and result.
- Everything typed is kept on the phone between visits to the page; installable as a home-screen app; works offline.
- Beta access by passkey; the hosted copy is encrypted.
