var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var evacLocationSchema = new Schema({
  name: String,
  address: String,
  city: String,
  state: String,
  zipcode: String,
});

var familyMemberSchema = new Schema({
  firstName: String,
  lastName: String,
  address: String,
  city: String,
  state: String,
  zipcode: String,
  emailAddress: String,
  phone: String,
  smsEnabled: Boolean,
  group: groupSchema
});

var familySchema = new Schema({
  name: String,
  address: String,
  city: String,
  state: String,
  zipcode: String,
  outOfAreaContact: String,
  updateDate: Date,
  lastUpdatedBy: String,
  shelterInPlaceItems: {
    twoPlusWeeksFood: Boolean,
    tapePlastic: Boolean
  },
  goBagItems: {
    threeDaysFoodWaterPerPerson: Boolean,
    money: Boolean,
    firstAidKit: Boolean,
    prescriptionDrugs: Boolean,
    copyImportantPapers: Boolean,
    emergencyBlankets: Boolean,
    flashlight: Boolean,
    dustMasks: Boolean,
    multifunctionTool: Boolean,
    noaaRadio: Boolean,
    shoesAndClothes: Boolean,
    bible: Boolean
  },
  familyMembers: [familyMemberSchema]
});

var groupSchema = new Schema({
  locationName: String,
  overseer: String,
  primaryEvacLocation: evacLocationSchema,
  secondaryEvacLocation: evacLocationSchema,
  families: [familySchema]
});

var loginAccountSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  provider: String,
  congregations: [congegationSchema]
});

var congegationSchema = new Schema({
  name: String,
  number: String,
  city: String,
  groups: [groupSchema]
});

exports.EvacuationLocation = mongoose.model('EvacuationLocation', evacLocationSchema);
exports.FamilyMember = mongoose.model('FamilyMember', familyMemberSchema);
exports.Family = mongoose.model('Family', familySchema);
exports.Group = mongoose.model('Group', groupSchema);
exports.LoginAccount = mongoose.model('LoginAccount', loginAccountSchema);
exports.Congregation = mongoose.model('Congregation', congegationSchema);


//CongregationProvider = function(){};

//find all congregations
// CongregationProvider.prototype.findAll = function(callback) {
//   Congregation.find({}, function (err, congregations) {
//     callback(null, congregations);
//   });
// };

// CongregationProvider.prototype.findByLoginAccount = function(emailAddress, provider, callback) {
//   Congregation.findOne({'loginAccounts.email': emailAddress, 'loginAccounts.provider': provider} 
//     function(err, congregation){    
//       callback(err, congregation);
//     }
//   });
// };


// //Find congregation by ID
// CongregationProvider.prototype.findById = function(id, callback) {
//   Congregation.findById(id, function (err, congregation) {    
//       callback(err, post); 
//   });
// };

// CongregationProvider.prototype.addFamilyMemberToGroup = function(id, callback) {
//   Congregation.findById(id, function (err, congregation) {
//       callback(err, post); 
//   });
// };








// //Update post by ID
// PostProvider.prototype.updateById = function(id, body, callback) {
//   Post.findById(id, function (err, post) {
//     if (!err) {
//     post.title = body.title;
//     post.body = body.body;
//     post.save(function (err) {
//       callback();
//     });
//   }
//   });
// };






// //Update post by ID
// PostProvider.prototype.updateById = function(id, body, callback) {
//   Post.findById(id, function (err, post) {
//     if (!err) {
// 	  post.title = body.title;
// 	  post.body = body.body;
// 	  post.save(function (err) {
// 	    callback();
// 	  });
// 	}
//   });
// };

// //Create a new post
// PostProvider.prototype.save = function(params, callback) {
//   var post = new Post({title: params['title'], body: params['body'], created_at: new Date()});
//   post.save(function (err) {
//     callback();
//   });
// };

// //Add comment to post
// PostProvider.prototype.addCommentToPost = function(postId, comment, callback) {
//   this.findById(postId, function(error, post) {
//     if(error){
// 	  callback(error)
// 	}
//     else {
// 	  post.comments.push(comment);
// 	  post.save(function (err) {
// 	    if(!err){
// 		  callback();
// 	    }	
// 	  });
//     }
//   });
// };

//exports.CongregationProvider = CongregationProvider;