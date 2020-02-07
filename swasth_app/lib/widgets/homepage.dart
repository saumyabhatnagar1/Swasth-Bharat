import 'package:flutter/material.dart';

import 'package:carousel_pro/carousel_pro.dart';

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: <Widget>[
        Center(
          child: Text(
            "Goverment Health Insurance Schemes",
            style: TextStyle(
              fontSize: 20.0,
            ),
          ),
        ),
        SizedBox(
          height: 150.0,
          width: 300.0,
          child: Carousel(
            images: [
              Image.asset('assets/1.jpg'),
              Image.asset('assets/2.jpg'),
              Image.asset('assets/3.jpg'),
              Image.asset('assets/4.jpg'),
              Image.asset('assets/5.jpg'),
            ],
          ),
        ),
      ],
    );
  }
}
