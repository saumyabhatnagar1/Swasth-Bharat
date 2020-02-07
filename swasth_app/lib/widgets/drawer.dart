import 'package:flutter/material.dart';

class ShadyDrawer extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Card(
      child: ListView(
        children: <Widget>[
          ListTile(
            leading: Icon(Icons.healing),
            title: Text('Doctor'),
          ),
          ListTile(
            leading: Icon(Icons.airline_seat_flat_angled),
            title: Text('Bed availability'),
          ),
          ListTile(
            leading: Icon(Icons.blur_circular),
            title: Text('Pharmacy'),
          ),
          ListTile(
            leading: Icon(Icons.accessible),
            title: Text('Ambulance'),
          ),
          ListTile(
            leading: Icon(Icons.assignment),
            title: Text('Appointments'),
          ),
          ListTile(
            leading: Icon(Icons.feedback),
            title: Text('Feedback'),
          ),
        ],
      ),
    );
  }
}
