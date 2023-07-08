const Tutor = require('../../models/Tutor');

module.exports = {
  index,
  show
};

async function index(req, res) {
  try{
    const tutors = await Tutor.find({}).sort('name').populate('subject').exec();
    // re-sort based upon the sortOrder of the categories
    tutors.sort((a, b) => a.subject.sortOrder - b.subject.sortOrder);
    res.status(200).json(tutors);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

async function show(req, res) {
  try{
    const tutor = await Tutor.findById(req.params.id);
    res.status(200).json(tutor);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}