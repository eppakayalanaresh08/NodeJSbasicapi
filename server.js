const express=require("express")

const mongoose=require("mongoose")

const Company=require('./model')
const app=express()

app.use(express.json())

mongoose.connect("mongodb+srv://eppakayalanaresh:eppakayalanaresh@cluster0.xxinv8r.mongodb.net/?retryWrites=true&w=majority").then(
    ()=>console.log("DB coonected..")
    ).catch(err=>console.log(err))


app.listen(3002,()=>console.log('Server running'))

// app.get("/",(req,res)=>{
//     res.send("Hello world")
//  })



  app.get('/companies', async (req, res) => {
    const companies = await Company.find({});
    res.json(companies);
  });
  
  // Create an API endpoint for creating a new company
  app.post('/companies', async (req, res) => {
    const company = new Company({
      name: req.body.name,
      description: req.body.description,
      contactNumber: req.body.contactNumber,
      contactEmail: req.body.contactEmail,
      logo: req.body.logo,
      state: req.body.state,
      city: req.body.city,
    });
  
    await company.save();
    res.json(company);
  });
  
  // Create an API endpoint for updating a company
  app.put('/companies/:id', async (req, res) => {
    const company = await Company.findById(req.params.id);
  
    if (!company) {
      res.status(404).send('Company not found');
      return;
    }
  
    company.name = req.body.name;
    company.description = req.body.description;
    company.contactNumber = req.body.contactNumber;
    company.contactEmail = req.body.contactEmail;
    company.logo = req.body.logo;
    company.state = req.body.state;
    company.city = req.body.city;
  
    await company.save();
    res.json(company);
  });
  
  // Create an API endpoint for deleting a company
  app.delete('/companies/:id', async (req, res) => {
    const company = await Company.findById(req.params.id);
  
    if (!company) {
      res.status(404).send('Company not found');
      return;
    }
  
    await company.remove();
    res.json(company);
  });
  
  