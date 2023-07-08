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
    {name: 'Yana', education: 'High School Diploma', photo: './images/t1.png', subject: subjects[0], price: 50},
    {name: 'Josh', education: 'Ph.D in Computer Science', photo: './images/t2.png', subject: subjects[0], price: 45},
    {name: 'Cristina', education: 'Ph.D in Pure Mathematics', photo: './images/t3.png', subject: subjects[0], price: 45},
    {name: 'Abdul', education: 'B.A.', photo: './images/t4.png', subject: subjects[1], price: 40},
    {name: 'Brian', education: 'B.S.', photo: './images/t5.png', subject: subjects[1], price: 35},
    {name: 'Olga', education: 'B.Eng.', photo: './images/t6.png', subject: subjects[1], price: 35},
    {name: 'Nikita', education: 'B.Eng.', photo: './images/t7.png', subject: subjects[2], price: 40},
    {name: 'Candra', education: 'Master Degree in Web Development', photo: './images/t8.png', subject: subjects[2], price: 35},
    {name: 'Devin', education: 'B.Ed.', photo: './images/t9.png', subject: subjects[3], price: 35},
    {name: 'Annson', education: 'Master Degree in Aerospace Engineering', photo: './images/t10.png', subject: subjects[3], price: 30},
    {name: 'Antony', education: 'Master Degree in Education', photo: './images/t11.png', subject: subjects[3], price: 25},
    {name: 'Michael', education: 'Bachelor of Technology', photo: './images/t12.png', subject: subjects[4], price: 40},
    {name: 'Lauren', education: 'B.F.A.', photo: './images/t13.png', subject: subjects[4], price: 40},
    {name: 'Arwa', education: 'B.B.A.', photo: './images/t14.png', subject: subjects[5], price: 50},
    {name: 'Gino', education: 'B.Com.', photo: './images/t15.png', subject: subjects[5], price: 40},
    {name: 'Nick', education: 'Bachelor Degree in Actuarial Science', photo: './images/t16.png', subject: subjects[5], price: 40},
    {name: 'Luis', education: 'B.Sc.', photo: './images/t17.png', subject: subjects[5], price: 45},
    {name: 'Ramya', education: 'B.Arch.', photo: './images/t18.png', subject: subjects[6], price: 45},
    {name: 'Stanley', education: 'B.Pharm.', photo: './images/t19.png', subject: subjects[6], price: 45},
    {name: 'Edwin', education: 'B.Tech.', photo: './images/t20.png', subject: subjects[6], price: 45},
    {name: 'Naomi', education: 'B.Mus.', photo: './images/t21.png', subject: subjects[6], price: 50},
    {name: 'Yuan', education: 'Bachelor of Fine Arts', photo: './images/t22.png', subject: subjects[6], price: 50},
  ]);

  console.log(tutors)

  process.exit();

})();