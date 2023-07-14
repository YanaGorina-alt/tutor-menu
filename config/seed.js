require('dotenv').config();
require('./database');

const Subject = require('../models/Subject');
const Tutor = require('../models/Tutor');

(async function() {

  await Subject.deleteMany({});
  const subjects = await Subject.create([
    {name: 'Calculas', sortOrder: 10},
    {name: 'Discrete Math', sortOrder: 20},
    {name: 'Linear Algebra', sortOrder: 30},
    {name: 'Computer Architecture', sortOrder: 40},
    {name: 'Java', sortOrder: 50},
    {name: 'Python', sortOrder: 60},
    {name: 'Data Science', sortOrder: 70},
  ]);

  await Tutor.deleteMany({});
  const tutors = await Tutor.create([
    {name: 'Yana', education: 'High School Diploma', photo: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80", subject: subjects[0], price: 50},
    {name: 'Josh', education: 'Ph.D in Computer Science', photo: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWFsfGVufDB8fDB8fHww&w=1000&q=80', subject: subjects[0], price: 45},
    {name: 'Cristina', education: 'Ph.D in Pure Mathematics', photo: 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwYW5pbWFsfGVufDB8fDB8fHww&w=1000&q=80', subject: subjects[0], price: 45},
    {name: 'Abdul', education: 'B.A.', photo: 'https://images.unsplash.com/photo-1484557985045-edf25e08da73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybSUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80', subject: subjects[1], price: 40},
    {name: 'Brian', education: 'B.S.', photo: 'https://images.unsplash.com/photo-1598755257130-c2aaca1f061c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2lsZCUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80', subject: subjects[1], price: 35},
    {name: 'Olga', education: 'B.Eng.', photo: 'https://images.unsplash.com/photo-1615812214207-34e3be6812df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', subject: subjects[1], price: 35},
    {name: 'Nikita', education: 'B.Eng.', photo: 'https://plus.unsplash.com/premium_photo-1673382904016-3c98ae830cd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFsJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&w=1000&q=80', subject: subjects[2], price: 40},
    {name: 'Candra', education: 'Master Degree in Web Development', photo: 'https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.webp?b=1&s=170667a&w=0&k=20&c=nOa1R7PGaqOaQscx10FpA5ZNenMeDfs-k6VgmmuY4cc=', subject: subjects[2], price: 35},
    {name: 'Devin', education: 'B.Ed.', photo: 'https://plus.unsplash.com/premium_photo-1666668784038-293e7827c3d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFscyUyMGluJTIwdGhlJTIwd2lsZHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80', subject: subjects[3], price: 35},
    {name: 'Annson', education: 'Master Degree in Aerospace Engineering', photo: 'https://plus.unsplash.com/premium_photo-1686147445158-95d356d3446c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFyZSUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80', subject: subjects[3], price: 30},
    {name: 'Antony', education: 'Master Degree in Education', photo: 'https://images.unsplash.com/photo-1549488799-496ecb87b5b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80', subject: subjects[3], price: 25},
    {name: 'Michael', education: 'Bachelor of Technology', photo: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsJTIwdGVzdGluZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80', subject: subjects[4], price: 40},
    {name: 'Lauren', education: 'B.F.A.', photo: 'https://media.istockphoto.com/id/1397756029/photo/bengal-cat-in-glasses-works-at-the-table-on-the-computer.webp?b=1&s=170667a&w=0&k=20&c=z4nF4zXkZf9hI9ldIahGYw_fColmKNwtabi7aJk-QLw=', subject: subjects[4], price: 40},
    {name: 'Arwa', education: 'B.B.A.', photo: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsJTIwY2FyZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80', subject: subjects[5], price: 50},
    {name: 'Gino', education: 'B.Com.', photo: 'https://images.unsplash.com/photo-1504006833117-8886a355efbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyZSUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80', subject: subjects[5], price: 40},
    {name: 'Nick', education: 'Bachelor Degree in Actuarial Science', photo: 'https://images.unsplash.com/photo-1591160945146-55f2fd87373e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5NjkyMDUyfHxlbnwwfHx8fHw%3D&w=1000&q=80', subject: subjects[5], price: 40},
    {name: 'Luis', education: 'B.Sc.', photo: 'https://media.istockphoto.com/id/530674261/photo/koala-resting-and-sleeping-on-his-tree.webp?b=1&s=170667a&w=0&k=20&c=M7LuAddIwvhvqv27CH32mXiUqzUWEyL9TzZJC6h6kH8=', subject: subjects[5], price: 45},
    {name: 'Ramya', education: 'B.Arch.', photo: 'https://media.istockphoto.com/id/1458215547/photo/brown-bear.webp?b=1&s=170667a&w=0&k=20&c=1ADJtvC9wQFy1Arglt8YEDLy-rqU2ZNAYHTongfTJJU=', subject: subjects[6], price: 45},
    {name: 'Stanley', education: 'B.Pharm.', photo: 'https://images.unsplash.com/photo-1520808663317-647b476a81b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlJTIwYW5pbWFsfGVufDB8fDB8fHww&w=1000&q=80', subject: subjects[6], price: 45},
    {name: 'Edwin', education: 'B.Tech.', photo: 'https://images.unsplash.com/photo-1470093851219-69951fcbb533?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fHw%3D&w=1000&q=80', subject: subjects[6], price: 45},
    {name: 'Naomi', education: 'B.Mus.', photo: 'https://media.istockphoto.com/id/1170804921/photo/turtle-closeup-with-school-of-fish.webp?b=1&s=170667a&w=0&k=20&c=lFYgwGc_hahoQfryqY06tvgi6jBnXvKtYh314cbhzhI=', subject: subjects[6], price: 50},
    {name: 'Yuan', education: 'Bachelor of Fine Arts', photo: 'https://cdn.pixabay.com/photo/2016/10/21/19/45/hedgehog-1759027_640.jpg', subject: subjects[6], price: 50},
  ]);

  console.log(tutors)

  process.exit();

})();