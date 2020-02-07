import 'package:flutter/material.dart';

import 'package:carousel_pro/carousel_pro.dart';

import 'package:swasth_app/widgets/grid_view.dart';

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    MediaQueryData queryData;
    queryData = MediaQuery.of(context);
    return Column(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: <Widget>[
        Center(
          child: Text(
            "Goverment Health Insurance Schemes",
            style: TextStyle(
              fontSize: 30.0,
            ),
            textAlign: TextAlign.center,
          ),
        ),
        SizedBox(
          width: queryData.size.width,
          height: queryData.size.height * 0.30,
          child: Carousel(images: [
            Image.asset(
              'assets/1.jpg',
              fit: BoxFit.fill,
            ),
            Image.asset(
              'assets/2.jpg',
              fit: BoxFit.fill,
            ),
            Image.asset(
              'assets/3.jpg',
              fit: BoxFit.fill,
            ),
            Image.asset(
              'assets/4.jpg',
              fit: BoxFit.fill,
            ),
            Image.asset(
              'assets/5.jpg',
              fit: BoxFit.fill,
            ),
          ]),
        ),
        ShadyGridView(),
        Card(child: Image.asset('assets/map.jpg'),),
        Chip(label: Text('Made by CodeBlack'),),
      ],
    );
  }
}
