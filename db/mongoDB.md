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

### Update Docs
```shell
db.listingsAndReviews.updateOne({name: "Manav"}, {$set: {name: "Hello"}})
db.listingsAndReviews.find({name: {$in: ["Manav", "hfhfs", "Hello"]}})
db.listingsAndReviews.updateMany({name: "hfhfs"}, {$unset: {name: 1}})
db.listingsAndReviews.updateMany({name: null}, {$unset : {name: ""}})


db.listingsAndReviews.find({
$and: [
{name: {$exists: true}}, 
{name: {$in : ["Manav", "Hello", ""]}}
]
})

db.listingsAndReviews.updateOne({name: "Manav"}, {$set: {age: "25"}})

db.listingsAndReviews.find({age: '25'})
```

### Delete Docs

```bash
db.listingsAndReviews.deleteOne({name: "Al"})

```
### Create A Collection and Schema
```base
db.createCollection("hosts", {
	validator: { $jsonSchema : {
		bsonType: "object", 
		required: ["email"], 
		properties: {
			email: {
				bsonType: "string",
				pattern: "@mongodb\.com$",
				description: "must be a string"
			},
			phonenumber: {
				bsonType: "string", 
				description: "must be a string"
			}
		}
  }

db.hosts.insertOne({email: "manavpatel@mongodb.com"})
}})

```
### Aggregation 
```bash
 db.listingsAndReviews.aggregate([
   {
		$match: {
			number_of_reviews: {$gte: 100}
			
		}
	},
  {
		$group: {
			_id: "$property_type",
			count: {$sum: 1}, 
			reviewCount: {$sum: "$number_of_reviews"}
    }
  }





   db.listingsAndReviews.aggregate([
   {
		$match: {
			number_of_reviews: {$gte: 100}
		}
	},
  {
		$group: {
			_id: "$property_type",
			count: {$sum: 1}, 
			reviewCount: {$sum: "$number_of_reviews"},
			avgPrice: {$avg: "$price"}
    }
  },
  {
		$project: {
  		_id: 1, 
  		count: 1, 
  		reviewCount: 1, 
  		avgPrice: {$ceil: "$avgPrice"}
		}
	}, 
  {
		$sort: {count : -1}
	}
])
])
```


### Lookups 
```bash
db.accounts.aggregate([
  {
		$lookup: {
			from: "transactions",
			localField: "account_id", 
			foreignField: "account_id", 
			as: "customer_orders"
		}
	}
])
```


### Indexes
```bash
db.listingsAndReviews.getIndexes()
use sample_analytics
db.accounts.find({account_id: 371138}).explain("executionStats")
db.accounts.createIndex({"account_id": 1})
```