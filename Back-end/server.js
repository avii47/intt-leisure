const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./primary-database.db');

// API Endpoints
app.get('/api/events', (req, res) => {
    db.all('SELECT * FROM events', (err, rows) => {
        if (err) return res.status(500).send(err);
        res.json(rows);
      });
});

app.get('/api/services', async (req, res) => {
  try {
    const services = await new Promise((resolve, reject) => {
      db.all('SELECT * FROM services', (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });

    const formattedData = await Promise.all(services.map(async (row) => {
      const offers = await new Promise((resolve, reject) => {
        db.all('SELECT * FROM offers WHERE service_id = ?', row.id, (err, offerRows) => {
          if (err) reject(err);
          resolve(offerRows);
        });
      });

      return {
        id: row.id,
        crdImg: row.crdImg,
        img: row.img,
        title: row.title,
        sub1: row.sub1,
        sub2: row.sub2,
        sub3: row.sub3,
        description: row.overview,
        offers: offers.map(offer => ({
          offer: offer.offer,
          description: offer.description
        }))
      };
    }));

    res.json(formattedData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/blogs', (req, res) => {
  db.all('SELECT * FROM blogs', (err, rows) => {
      if (err) return res.status(500).send(err);
      res.json(rows);
    });
});

app.get('/api/sampleItineraries', async (req, res) => {
  try {
      // Fetch all itineraries
      const itineraries = await new Promise((resolve, reject) => {
          db.all('SELECT * FROM sample_itineraries', (err, rows) => {
              if (err) reject(err);
              resolve(rows);
          });
      });

      // Format each itinerary
      const formattedItineraries = await Promise.all(itineraries.map(async (itinerary) => {
          // Fetch days for the current itinerary
          const days = await new Promise((resolve, reject) => {
              db.all(
                  'SELECT * FROM sample_itinerary_days WHERE itinerary_id = ? ORDER BY day_number',
                  itinerary.id,
                  (err, dayRows) => {
                      if (err) reject(err);
                      resolve(dayRows);
                  }
              );
          });

          // Format days
          const formattedDays = days.map((day) => ({
              id: day.id,
              day_number: day.day_number,
              img: day.img,
              title: day.title,
              content: JSON.parse(day.content || '[]'), // Parse JSON content
              inclusion: [], // Inclusion is not present in schema, defaulting to empty
              distance: day.distance,
              duration: day.duration,
              route: JSON.parse(day.route || '[]'), // Parse JSON route
          }));

          return {
              id: itinerary.id,
              img: itinerary.img,
              title: itinerary.title,
              subTitle: itinerary.sub_title, // Corrected field name
              cardTxt: itinerary.card_txt, // Corrected field name
              overview: itinerary.overview,
              galleryImages: JSON.parse(itinerary.gallery_images || '[]'), // Parse JSON gallery images
              days: formattedDays,
          };
      }));

      // Send the formatted response
      res.json(formattedItineraries);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

app.get('/api/activityTours', (req, res) => {
  db.all('SELECT * FROM activity_tours', (err, rows) => {
      if (err) return res.status(500).send(err);
      res.json(rows);
    });
});

app.get("/api/conciergeServices", (req, res) => {
  const contentQuery = `SELECT * FROM conciergeServices`;
  const specsQuery = `SELECT * FROM conciergeServices_specs`;

  db.all(contentQuery, [], (err, contentRows) => {
    if (err) {
      return res.status(500).json({ error: "Failed to fetch content data." });
    }

    db.all(specsQuery, [], (err, specsRows) => {
      if (err) {
        return res.status(500).json({ error: "Failed to fetch specs data." });
      }

      // Format data into the desired structure
      const formattedData = contentRows.map((content) => ({
        id: content.id,
        img: content.img,
        title: content.title,
        subTitle: content.subTitle,
        cardTxt: content.cardTxt,
        overview: content.overview,
        specs: specsRows
          .filter((spec) => spec.concierge_id === content.id)
          .map((spec) => ({
            id: spec.id,
            img: spec.img,
            title: spec.title,
          })),
      }));

      res.json(formattedData);
    });
  });
});

app.get("/api/otherTours", (req, res) => {
  const contentQuery = `SELECT * FROM other_tours`;
  const inclusionQuery = `SELECT * FROM other_tours_inclusions`;

  db.all(contentQuery, [], (err, contentRows) => {
    if (err) {
      return res.status(500).json({ error: "Failed to fetch content data." });
    }

    db.all(inclusionQuery, [], (err, inclusionRows) => {
      if (err) {
        return res.status(500).json({ error: "Failed to fetch specs data." });
      }

      // Format data into the desired structure
      const formattedData = contentRows.map((content) => ({
        id: content.id,
        tag: content.tag,
        img: content.img,
        title: content.title,
        subTitle: content.subTitle,
        cardTxt: content.cardText,
        overview: content.overview,
        inclusions: inclusionRows
          .filter((inc) => inc.tour_id === content.id)
          .map((inc) => ({
            id: inc.id,
            name: inc.inclusion_name,
            details: inc.inclusion_details,
          })),
        galleryImages:content.galleryImages
      }));

      res.json(formattedData);
    });
  });
});



// Start the server
app.listen(PORT, () => {
  console.log(`Backend API running on http://localhost:${PORT}`);
});
