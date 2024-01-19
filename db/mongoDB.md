### Reading Docs

```shell
show dbs
use sample_airbnb
show collections
db.restaurants.find().limit(2)
db.listingsAndReviews.find({name: "Manav809"})
db.createCollection("people")
db.restaurants.find({  cuisine: 'Delicatessen'}, {restaurant_id: true, name: true}).limit(2)

db.listingsAndReviews.find({property_type: "Apartment"}, {property_type: true, name: true}).limit(2)

db.listingsAndReviews.find({beds: 5, "address.country": "Portugal"}).count()
```

### Insert Docs

```shell
db.listingsAndReviews.insertOne({name: "Manav"})
db.listingsAndReviews.find({name: "Manav"})
db.listingsAndReviews.insertMany([{name: "Manav"}, {name: "hfhfs"}])
db.listingsAndReviews.find({name: {$in: ["Manav", "hfhfs"]}})
```

