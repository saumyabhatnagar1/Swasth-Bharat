import 'package:flutter/material.dart';

class ShadyDoctor extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Swasth Bharat'),
      ),
      body: SingleChildScrollView(
        child: Column(
          children: <Widget>[
            SizedBox(
              height: 14.0,
            ),
            Card(
              child: TextField(
                textAlign: TextAlign.center,
                decoration: new InputDecoration(
                  border: InputBorder.none,
                  hintText: 'Search Doctors',
                  hintStyle: TextStyle(
                    fontSize: 18.0,
                  ),
                  icon: Icon(
                    Icons.search,
                    size: 40.0,
                  ),
                ),
              ),
            ),
            Card(
              child: Container(
                height: 700,
                child: ListView(
                  children: ListTile.divideTiles(
                    context: context,
                    tiles: [
                      ListTile(
                        subtitle: Text('Neurologist specialist'),
                        title: Text('Dr. Rahul Arora'),
                        trailing: Icon(Icons.arrow_forward_ios),
                      ),
                      ListTile(
                        subtitle: Text('Neurologist specialist'),
                        title: Text('Dr. Santosh Tyagi'),
                        trailing: Icon(Icons.arrow_forward_ios),
                      ),
                      ListTile(
                        subtitle: Text('Neurologist specialist'),
                        title: Text('Dr. Anurag Tripathi'),
                        trailing: Icon(Icons.arrow_forward_ios),
                      ),
                      ListTile(
                        subtitle: Text('Neurologist specialist'),
                        title: Text('Dr. Hardik Sharma'),
                        trailing: Icon(Icons.arrow_forward_ios),
                      ),
                      ListTile(
                        subtitle: Text('Neurologist specialist'),
                        title: Text('Dr. Feroz Shah'),
                        trailing: Icon(Icons.arrow_forward_ios),
                      ),
                      ListTile(
                        subtitle: Text('Neurologist specialist'),
                        title: Text('Dr. Vivek Goyal'),
                        trailing: Icon(Icons.arrow_forward_ios),
                      ),
                    ],
                  ).toList(),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
