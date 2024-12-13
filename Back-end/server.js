// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('./primary-database.db');

// // API Endpoints
// app.get('/api/events', (req, res) => {
//     db.all('SELECT * FROM events', (err, rows) => {
//         if (err) return res.status(500).send(err);
//         res.json(rows);
//       });
// });

// app.get('/api/services', async (req, res) => {
//   try {
//     const services = await new Promise((resolve, reject) => {
//       db.all('SELECT * FROM services', (err, rows) => {
//         if (err) reject(err);
//         resolve(rows);
//       });
//     });

//     const formattedData = await Promise.all(services.map(async (row) => {
//       const offers = await new Promise((resolve, reject) => {
//         db.all('SELECT * FROM offers WHERE service_id = ?', row.id, (err, offerRows) => {
//           if (err) reject(err);
//           resolve(offerRows);
//         });
//       });

//       return {
//         id: row.id,
//         crdImg: row.crdImg,
//         img: row.img,
//         title: row.title,
//         sub1: row.sub1,
//         sub2: row.sub2,
//         sub3: row.sub3,
//         description: row.overview,
//         offers: offers.map(offer => ({
//           offer: offer.offer,
//           description: offer.description
//         }))
//       };
//     }));

//     res.json(formattedData);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.get('/api/blogs', (req, res) => {
//   db.all('SELECT * FROM blogs', (err, rows) => {
//       if (err) return res.status(500).send(err);
//       res.json(rows);
//     });
// });

// app.get('/api/sampleItineraries', async (req, res) => {
//   try {
//       // Fetch all itineraries
//       const itineraries = await new Promise((resolve, reject) => {
//           db.all('SELECT * FROM sample_itineraries', (err, rows) => {
//               if (err) reject(err);
//               resolve(rows);
//           });
//       });

//       // Format each itinerary
//       const formattedItineraries = await Promise.all(itineraries.map(async (itinerary) => {
//           // Fetch days for the current itinerary
//           const days = await new Promise((resolve, reject) => {
//               db.all(
//                   'SELECT * FROM sample_itinerary_days WHERE itinerary_id = ? ORDER BY day_number',
//                   itinerary.id,
//                   (err, dayRows) => {
//                       if (err) reject(err);
//                       resolve(dayRows);
//                   }
//               );
//           });

//           // Format days
//           const formattedDays = days.map((day) => ({
//               id: day.id,
//               day_number: day.day_number,
//               img: day.img,
//               title: day.title,
//               content: JSON.parse(day.content || '[]'), // Parse JSON content
//               inclusion: [], // Inclusion is not present in schema, defaulting to empty
//               distance: day.distance,
//               duration: day.duration,
//               route: JSON.parse(day.route || '[]'), // Parse JSON route
//           }));

//           return {
//               id: itinerary.id,
//               img: itinerary.img,
//               title: itinerary.title,
//               subTitle: itinerary.sub_title, // Corrected field name
//               cardTxt: itinerary.card_txt, // Corrected field name
//               overview: itinerary.overview,
//               galleryImages: JSON.parse(itinerary.gallery_images || '[]'), // Parse JSON gallery images
//               days: formattedDays,
//           };
//       }));

//       // Send the formatted response
//       res.json(formattedItineraries);
//   } catch (error) {
//       res.status(500).json({ error: error.message });
//   }
// });

// app.get('/api/activityTours', (req, res) => {
//   db.all('SELECT * FROM activity_tours', (err, rows) => {
//       if (err) return res.status(500).send(err);
//       res.json(rows);
//     });
// });

// app.get("/api/conciergeServices", (req, res) => {
//   const contentQuery = `SELECT * FROM conciergeServices`;
//   const specsQuery = `SELECT * FROM conciergeServices_specs`;

//   db.all(contentQuery, [], (err, contentRows) => {
//     if (err) {
//       return res.status(500).json({ error: "Failed to fetch content data." });
//     }

//     db.all(specsQuery, [], (err, specsRows) => {
//       if (err) {
//         return res.status(500).json({ error: "Failed to fetch specs data." });
//       }

//       // Format data into the desired structure
//       const formattedData = contentRows.map((content) => ({
//         id: content.id,
//         img: content.img,
//         title: content.title,
//         subTitle: content.subTitle,
//         cardTxt: content.cardTxt,
//         overview: content.overview,
//         specs: specsRows
//           .filter((spec) => spec.concierge_id === content.id)
//           .map((spec) => ({
//             id: spec.id,
//             img: spec.img,
//             title: spec.title,
//           })),
//       }));

//       res.json(formattedData);
//     });
//   });
// });

// app.get("/api/otherTours", (req, res) => {
//   const contentQuery = `SELECT * FROM other_tours`;
//   const inclusionQuery = `SELECT * FROM other_tours_inclusions`;

//   db.all(contentQuery, [], (err, contentRows) => {
//     if (err) {
//       return res.status(500).json({ error: "Failed to fetch content data." });
//     }

//     db.all(inclusionQuery, [], (err, inclusionRows) => {
//       if (err) {
//         return res.status(500).json({ error: "Failed to fetch specs data." });
//       }

//       // Format data into the desired structure
//       const formattedData = contentRows.map((content) => ({
//         id: content.id,
//         tag: content.tag,
//         img: content.img,
//         title: content.title,
//         subTitle: content.subTitle,
//         cardTxt: content.cardText,
//         overview: content.overview,
//         inclusions: inclusionRows
//           .filter((inc) => inc.tour_id === content.id)
//           .map((inc) => ({
//             id: inc.id,
//             name: inc.inclusion_name,
//             details: inc.inclusion_details,
//           })),
//         galleryImages:content.galleryImages
//       }));

//       res.json(formattedData);
//     });
//   });
// });

// app.get('/api/dmc', (req, res) => {
//   db.all('SELECT * FROM dmc_section', (err, rows) => {
//       if (err) return res.status(500).send(err);
//       res.json(rows);
//     });
// });



// // Start the server
// app.listen(PORT, () => {
//   console.log(`Backend API running on http://localhost:${PORT}`);
// });

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const mongoUri = 'mongodb://localhost:27017';
const dbName = 'local'; // Replace with your MongoDB database name
let db;

MongoClient.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((client) => {
    db = client.db(dbName);
    console.log(`Connected to MongoDB: ${dbName}`);
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
  });

// API Endpoints
app.get('/api/events', async (req, res) => {
  try {
    const events = await db.collection('events').find().toArray();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/services', async (req, res) => {
  try {
    const services = await db.collection('services').find().toArray();
    const formattedData = await Promise.all(
      services.map(async (service) => {
        return {
          id: service.id,
          crdImg: service.crdImg,
          img: service.img,
          title: service.title,
          sub1: service.sub1,
          sub2: service.sub2,
          sub3: service.sub3,
          description: service.overview,
          offers: service.offers || []
        };
      })
    );
    res.json(formattedData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await db.collection('blogs').find().toArray();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/sampleItineraries', async (req, res) => {
  try {
    const itineraries = await db.collection('sample_itineraries').find().toArray();
    const formattedItineraries = await Promise.all(
      itineraries.map(async (itinerary) => {
        return {
          id: itinerary.id,
          img: itinerary.img,
          title: itinerary.title,
          subTitle: itinerary.subTitle,
          cardTxt: itinerary.card_txt,
          overview: itinerary.overview,
          galleryImages: itinerary.gallery_images || [],
          days: itinerary.days || []
        };
      })
    );
    res.json(formattedItineraries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/activityTours', async (req, res) => {
  try {
    const tours = await db.collection('activity_tours').find().toArray();
    res.json(tours);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/conciergeServices', async (req, res) => {
  try {
    const services = await db.collection('concierge_services').find().toArray();
    const formattedData = services.map((service) => ({
      id: service.id,
      img: service.img,
      title: service.title,
      subTitle: service.subTitle,
      cardTxt: service.cardTxt,
      overview: service.overview,
      specs: service.specs || [] 
    }));

    res.json(formattedData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/otherTours', async (req, res) => {
  try {
    const tours = await db.collection('other_tours').find().toArray();
    const formattedData = tours.map((tour) => ({
      id: tour.id,
      tag: tour.tag,
      img: tour.img,
      title: tour.title,
      subTitle: tour.subTitle,
      cardTxt: tour.cardTxt,
      overview: tour.overview,
      inclusions: tour.inclusions || [],
      galleryImages: tour.galleryImages || [],
    }));

    res.json(formattedData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/dmc', async (req, res) => {
  try {
    const dmcData = await db.collection('dmc_section').find().toArray();
    res.json(dmcData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Express Route for Creating a Booking
app.post('/api/inquiry', async (req, res) => {
  try {
    const inquiriesCollection = db.collection('inquiries');

    const inquiryData = {
      name: req.body.name,
      email: req.body.email ,
      mobile: req.body.mobile,
      nationality: req.body.nationality,
      arrivalDate: req.body.arrivalDate,
      departureDate: req.body.departureDate,
      guests: 
        { adults: req.body.adults,
          kids: req.body.kids
        },
      package: req.body.pack,
      message: req.body.message,
      status: "pending",
      createdAt: new Date(),
    };

    const result = await inquiriesCollection.insertOne(inquiryData);

    // Respond with success
    res.status(201).json({ success: true, id: result.insertedId });
  } catch (error) {
    console.error('Error adding inquiry:', error);
    res.status(500).json({ success: false, message: 'Failed to add inquiry' });
  } 
});

// app.get('/api/inquiries', async (req, res) => {
//   try {
//     const bookings = await Booking.find().sort({ createdAt: -1 });
//     res.json(bookings);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

app.post('/api/contactUs', async (req, res) => {
  try {
    const contactUsCollection = db.collection('contact_us');

    const contactUsData = {
      name: req.body.name,
      email: req.body.email ,
      mobile: req.body.mobile,
      message: req.body.message,
      status: "pending",
      createdAt: new Date(),
    };

    const result = await contactUsCollection.insertOne(contactUsData);

    res.status(201).json({ success: true, id: result.insertedId });
  } catch (error) {
    console.error('Error adding message:', error);
    res.status(500).json({ success: false, message: 'Failed to add message' });
  } 
});

app.post('/api/newsletters', async (req, res) => {
  try {
    const newsletterCollection = db.collection('newsletters');

    const newsletterData = {
      email: req.body.email ,
      status: "pending",
      createdAt: new Date(),
    };

    const result = await newsletterCollection.insertOne(newsletterData);

    res.status(201).json({ success: true, id: result.insertedId });
  } catch (error) {
    console.error('Error adding message:', error);
    res.status(500).json({ success: false, message: 'Failed to add message' });
  } 
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend API running on http://localhost:${PORT}`);
});
