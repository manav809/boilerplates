```shell
show dbs
use sample_airbnb
show collections
db.restaurants.find().limit(2)
db.listingsAndReviews.find({name: "Manav809"})
db.createCollection("people")
db.restaurants.find({  cuisine: 'Delicatessen'}, {restaurant_id: true, name: true}).limit(2)
```

Collection -> Documents -> Fields

