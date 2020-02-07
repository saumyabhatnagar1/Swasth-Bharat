import 'package:flutter/material.dart';

import 'package:swasth_app/widgets/drawer.dart';
import 'package:swasth_app/widgets/homepage.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Swasth Bharat'),
        ),
        drawer: SizedBox(
          width: 275,
          child: ShadyDrawer(),
        ),
        body: SingleChildScrollView(child: HomePage()),
      ),
    );
  }
}
