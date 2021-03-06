import 'package:flutter/material.dart';

import 'package:swasth_app/widgets/doctor.dart';

class ShadyDrawer extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Card(
      child: ListView(
        children: <Widget>[
          UserAccountsDrawerHeader(
            accountName: Text("Aadarsh Patel"),
            accountEmail: Text("aadarsh18100@iiitnr.edu.in"),
            currentAccountPicture: CircleAvatar(
              backgroundColor: Theme.of(context).platform == TargetPlatform.iOS
                  ? Colors.blue
                  : Colors.white,
              child: Text(
                "A",
                style: TextStyle(fontSize: 40.0),
              ),
            ),
          ),
          ListTile(
            leading: Icon(Icons.healing),
            title: Text('Doctor'),
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => ShadyDoctor()),
              );
            },
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
