# Spotter

**Current version: v0.1.4-beta** · [Changelog](CHANGELOG.md) · [Live app](https://theprixit.github.io/spotter/) · limited beta, by invitation

A phone web app that gives the coordinates of a spot you are looking at, from a laser rangefinder and the phone's own GPS and compass. Built for choosing and recording tower positions from the road in mountain terrain, where you can see the spot but cannot walk to it.

## How it works

You stand at a known point (phone GPS), aim the rangefinder at the spot and read the slant distance and the angle. The app resolves the horizontal distance and the height difference from those two numbers.

- **One reading** places the spot along the compass heading at that distance. A phone compass is good to about 5°, so at 400 m the answer is about ±35 m.
- **Two readings of the same spot from points 100 to 300 m apart** replace the compass with geometry: the spot is where the two horizontal-distance circles cross, typically within a few metres. The heading only picks which of the two crossings is the right one.
- **Height** above the observer comes from distance × sin(angle); an approximate elevation is shown from the GPS altitude.

No terrain model and no map data are used, so it works anywhere on earth and needs no network once installed.

## Projects and files

Spots are grouped in projects. Each spot keeps every reading: the observer position with GPS accuracy and time, distance, angle, heading, and an optional photo of the spot taken from that position.

The project file is a **KML/KMZ**. Opened in Google Earth it shows the spot, a point for each observer position with the values entered, dashed lines of sight, an arc of the possibility band for a single reading or arcs of both distance circles for two, and the photos in the balloons. Loaded back into the app on any phone it restores every reading and photo. A plain KML drawn in Google Earth loads too, as spots without readings.

A **report** button produces a plain-text summary of every reading and result for review.

## Install

Open the live address in Safari (iPhone) or Chrome (Android). During the beta the app asks for a passkey once; tick "remember on this phone". iPhone: Share → Add to Home Screen. Android: tap Install. Open it once with signal; after that it works offline. Allow location, and motion & orientation when the compass capture asks.

## Privacy

Everything runs in the browser and stays on the phone. Nothing is sent anywhere except the files you export yourself.

## Beta

The hosted app is encrypted and opens with a passkey while it is in limited beta. The source will be published in the open at the end of the beta. Feedback: what confused you, results that looked wrong together with the readings, screenshots.

## License

[MIT](LICENSE) · © 2026 Parikshit Pal
