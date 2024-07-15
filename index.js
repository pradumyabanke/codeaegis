// mongodb+srv://pradumgurjar2:hzHZJSIvI9uySByr@cluster0.xqolutu.mongodb.net/
// hzHZJSIvI9uySByr

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./src/routes/routes");


const port = process.env.PORT || 5000;


app.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

mongoose.set("strictQuery", false);

module.exports = router;

const axios = require('axios');
const cheerio = require('cheerio');

//======================[ Scrap Data]=================================//
async function scrapeCompanyData(url) {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    // Extract data from the HTML using jQuery-like syntax
    const name = $('title').text(); // Example: extracting company name from <title> tag
    const description = $('meta[name="description"]').attr('content');
    const logoUrl = $('meta[property="og:image"]').attr('content');
    const facebookUrl = $('a[href*="facebook.com"]').attr('href');
    const linkedinUrl = $('a[href*="linkedin.com"]').attr('href');
    const twitterUrl = $('a[href*="twitter.com"]').attr('href');
    const instagramUrl = $('a[href*="instagram.com"]').attr('href');

    // Example: Extracting address, phone number, email from specific HTML elements
    const address = $('#address').text();
    const phoneNumber = $('#phone').text();
    const email = $('#email').text();

    // Construct an object with the extracted data
    const companyData = {
      name,
      description,
      logoUrl,
      facebookUrl,
      linkedinUrl,
      twitterUrl,
      instagramUrl,
      address,
      phoneNumber,
      email
    };

    return companyData;
  } catch (error) {
    throw new Error('Error scraping data: ' + error.message);
  }
}

module.exports = scrapeCompanyData;





//===================== [ Database Connection ] ==================/

mongoose
    .connect(
        "mongodb+srv://pradumgurjar2:hzHZJSIvI9uySByr@cluster0.xqolutu.mongodb.net/"
    )
    .then(() => console.log("Database is connected successfully.."))
    .catch((Err) => console.log(Err));

app.use("/", router);


app.listen(port, function () {
    console.log(`Server is connected on Port ${port} ✅✅✅`);
});
