import 'package:flutter/material.dart';

import 'package:flutter_map/flutter_map.dart';
import 'package:latlong/latlong.dart';

class ShadyMap extends StatefulWidget {
  @override
  _ShadyMapState createState() => _ShadyMapState();
}

class _ShadyMapState extends State<ShadyMap> {
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      body: new FlutterMap(
        options: new MapOptions(minZoom: 10.0),
        layers: [
          new TileLayerOptions(
              urlTemplate: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
              subdomains: ['a', 'b', 'c']),
        ],
      ),
    );
  }
}
